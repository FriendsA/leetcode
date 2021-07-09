/*
 * @lc app=leetcode.cn id=204 lang=javascript
 * 思路一: 
 * 1. 暴力循环判断是否为质数
 * 思路二: 埃氏筛
 * 1. 厄拉多塞筛法。x 为质数，则x的倍数都为合数。
 * 2. 这里防止重复判断 从 x*x开始判断。（但特殊的值还会有重复的判断）
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    /**
     * 思路1
        let num = 0;
        for (let i = 2; i < n; i++) {
            if (isPrimes(i)) {
                num++;
            }
        }
        return num;
        function isPrimes(n) {
            for (let i = 2; i * i <= n; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        }
    */

    /**思路2 */
    let num = 0, arr = new Array(n).fill(true);
    for (let i = 2; i < n; i++) {
        if (arr[i]) {
            num++;
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }
    return num;
};
// @lc code=end

