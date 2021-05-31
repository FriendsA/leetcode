/*
 * @lc app=leetcode.cn id=461 lang=javascript
 * 思路一:
 * 1.无符号右移 和 &1运算 取最后一位
 * 2.判断并记录
 * 思路二:Brian Kernighan 算法
 * 1.n = x ^ y,n的1位即为不同的位置
 * 2.f(n) = n & (n-1);
 * 可以少计算中间为0的部分
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    let res = 0;
    /**
     * 思路1：
    while (x > 0 || y > 0) {
        if ((x & 1) !== (y & 1)) {
            res++;
        }
        x >>>= 1;
        y >>>= 1;
    }
     */
    //思路二:
    let n = x ^ y;
    while (n) {
        n = n & (n - 1);
        res++;
    }

    return res;
};
// @lc code=end

