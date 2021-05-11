/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = String(x);
    let sp = 0;
    let ep = str.length - 1;
    let flag = true;
    while (sp < ep) {
        if (str[sp] !== str[ep]) {
            flag = false;
            break;
        }
        sp++;
        ep--;
    }
    return flag
};
// @lc code=end

