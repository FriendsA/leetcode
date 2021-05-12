/*
 * @lc app=leetcode.cn id=345 lang=javascript
 * 思路：
 * 1. 收尾双指针遍历
 * 2. 两边遇到元音替换
 * 3. 接着遍历和替换
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split("");
    let l = 0, r = s.length - 1;
    let arr = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let temp;
    while (l < r) {
        if (arr.includes(s[l]) && arr.includes(s[r])) {
            //替换
            temp = s[r];
            s[r] = s[l];
            s[l] = temp;
            r--;
            l++;
        } else if (arr.includes(s[l])) {
            r--;
        } else if (arr.includes(s[r])) {
            l++;
        } else {
            r--;
            l++;
        }
    }
    return s.join("");
};
// @lc code=end

