/*
 * @lc app=leetcode.cn id=509 lang=javascript
 * 思路:
 * 1.循环计算
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 1, r = 1;
    for (let i = 2; i < n; i++) {
        [p, q] = [q, r];
        r = p + q;
    }
    return r;
};
// @lc code=end

