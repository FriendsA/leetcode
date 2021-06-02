/*
 * @lc app=leetcode.cn id=338 lang=javascript
 * 思路:
 * 1. 对于x，x为偶数时，x的1的位数=x/2的1的位数
 * 2. 为奇数时，x的1的位数=x/2的1的位数+1
 * 3. x的奇偶可以利用 x&1 来判断
 * 4. x/2可以用x>>1表示
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
};
// @lc code=end

