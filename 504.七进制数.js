/*
 * @lc app=leetcode.cn id=504 lang=javascript
 * 思路：
 * 1.机制转换就是对转换进制的数字一直求余数然后倒过来
 * 2.负数注意先取出符号
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let n = "";
    let sum = Math.abs(num);
    while (sum) {
        n = sum % 7 + n;
        sum = sum / 7 | 0
    }
    return num === 0 ? "0" : num < 0 ? "-" + n : n;
};
// @lc code=end

