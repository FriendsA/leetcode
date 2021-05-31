/*
 * @lc app=leetcode.cn id=190 lang=javascript
 * 思路一:
 * 转成32位字符串反转在转回数字
 * 思路二:位运算 
 * 1.n&1运算获取最后一位
 * 2.左移+或运算 拼接结果
 * 3.注意使用无符号右移动 >>> 
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    /**
     * 思路1:
    let res = "";
    let str = n.toString(2).padStart(32, "0");
    for (let i of str) {
        res = i + res;
    }
    console.log(res);
    return parseInt(res, 2);
     */
    //思路2:
    let ans = 0;
    let i = 32,temp;
    while (i) {
        temp = n & 1;
        n = n >>> 1;
        ans = ans | (temp << (--i));
    }
    return ans >>> 0;
};
// @lc code=end

