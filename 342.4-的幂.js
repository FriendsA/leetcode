/*
 * @lc app=leetcode.cn id=342 lang=javascript
 * 思路1:
 * 转成4进制判断是否为10000...
 * 思路2:
 * 先判断是2的幂，再判断 n%3===1 则为4的幂
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    /**
     * 思路1:
     * return /^10{0,}$/.test(n.toString(4));
     */
    //思路2:
    if (n & (n - 1)) {
        return false;
    }
    return n % 3 === 1;
};
// @lc code=end

