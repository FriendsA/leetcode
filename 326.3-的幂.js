/*
 * @lc app=leetcode.cn id=326 lang=javascript
 * 思路:
 * 1.转换为3进制 应为1和若干个0
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return /^10{0,}$/.test(n.toString(3))
};
// @lc code=end

