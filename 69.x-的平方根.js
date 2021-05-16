/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * 思路1:
 * 1.从1开始循环到x 
 * 2.平方是x输出，否则判断平方小于x但是加一的平方大于x
 * 思路2:
 * 牛顿迭代
 * n = 1/2 * (n+x/n)
 * 思路3:
 * 1.二分法
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    //思路1:
    /** 
    if (x == 0) {
        return 0;
    }
    for (let i = 0; i <= x; i++) {
        if (i ** 2 === x) {
            return i;
        }
        if (i ** 2 < x && (i + 1) ** 2 > x) {
            return i;
        }
    }
    */
    //思路2:
    /**  
    if (x === 0) {
        return 0;
    }
    let n = x;
    let m = 1 / 2 * (n + x / n)
    while (n !== m) {
        n = m;
        m = 1 / 2 * (n + x / n);
    }
    return n | 0;
    */
    // 思路3:
    if (x < 2) return x;
    let l = 1, r = Math.floor(x / 2);
    let m;
    while (l <= r) {
        m = Math.floor(l + (r - l) / 2);
        if (m ** 2 == x) {
            return m;
        }
        if (m ** 2 < x) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r;
};
// @lc code=end

