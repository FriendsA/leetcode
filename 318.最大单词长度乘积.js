/*
 * @lc app=leetcode.cn id=318 lang=javascript
 * 思路:
 * 1.用26位保存26个字母 利用字母的charCode 和 或运算
 * 2.遍历 按位与& 等于0则没有相同的字母 
 * 3.记录最大值
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let wordArr = [], max = 0;

    for (let i = 0; i < words.length; i++) {
        wordArr[i] = 0;
        for (let j = 0; j < words[i].length; j++) {
            let temp = 1 << words[i].charCodeAt(j) - 97;
            wordArr[i] |= temp;
        }
    }

    for (let i = 0; i < wordArr.length; i++) {
        for (let j = i + 1; j < wordArr.length; j++) {
            if (!(wordArr[i] & wordArr[j])) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

    return max;
};
// @lc code=end

