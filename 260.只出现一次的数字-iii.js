/*
 * @lc app=leetcode.cn id=260 lang=javascript
 * 思路一:
 * 1. 利用对象存储，当遇到对象中存过的就删除改属性
 * 2. 最后对象中剩下的属性就是不重复的两个数
 * 思路二:
 * 1. 基于^运算可以消除两个相同的数字,数组全员^则可以甄别出两个数字
 * 2. 再在异或结果中3取一位不为0的，例如1010 取 10 或 1000 (利用&运算)
 * 3. 取到的值和数组再^一遍使两个数字分开，再把两个数组分别异或就得出两个数了
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    /**
     * 思路一:
    let o = {};
    for (let i of nums) {
        if (Reflect.has(o, i)) {
            Reflect.deleteProperty(o, i);
        } else {
            o[i] = i;
        }
    }
    return Object.keys(o).map(i=>parseInt(i));
     */
    //思路二:
    let temp = 0;
    for (let i of nums) {
        temp ^= i;
    }
    let flag = 1;
    while ((temp & flag) === 0) {
        flag <<= 1;
    }
    let res1 = res2 = 0;
    for (let i of nums) {
        if (i & flag) {
            res1 ^= i;
        } else {
            res2 ^= i;
        }
    }
    return [res1, res2];
};
// @lc code=end

