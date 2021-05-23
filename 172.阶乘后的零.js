/*
 * @lc app=leetcode.cn id=172 lang=javascript
 * 思路:
 * 1.结尾的0即是10的倍数，即计算结果一直整除10的次数
 * 2.但是计算出来复杂度太高了，则转为求10的因子，10=2*5
 * 3.偶数皆为2的倍数，所以转为求5的因子个数
 * 4.特殊的5的倍数处理，25则为5*5 125则为 5*5*5 因此类推
 * 5.利用每次对5做除法取整
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let sum = 0;
    for (let i = n; i / 5 | 0 > 1; i = i / 5 | 0) {
        sum += i / 5 | 0;
    }
    return sum;
};
// @lc code=end

