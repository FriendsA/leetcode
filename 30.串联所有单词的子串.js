/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 * 思路：
 * 1.双指针模拟滑动窗口截取words总长度的字符串
 * 2.map存储words所有字符串
 * 3.窗口字符串按length截取和map比较
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let map = {};
    let result = [];
    for (let i of words) {
        if (map[i]) {
            map[i] += 1;
        } else {
            map[i] = 1;
        }
    }
    let wordLength = words[0].length;
    let length = words.length * wordLength;
    for (let i = 0; i < s.length - length + 1; i++) {
        let tempMap = Object.assign({}, map);
        //截取的words总长字符串
        let str = s.slice(i, i + length);
        for (let j = 0; j < str.length; j += wordLength) {
            //截取的words元素长字符串
            let s = str.slice(j, j + wordLength)
            if (!tempMap[s]) {
                break;
            }
            tempMap[s] -= 1;
        }
        //tempMap是否全为0
        let sum = 0;
        for (let i in tempMap) {
            sum += tempMap[i];
        }
        if (sum === 0) {
            result.push(i);
        }
    }
    return result
};
// @lc code=end

