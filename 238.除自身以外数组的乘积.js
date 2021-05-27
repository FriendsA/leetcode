/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * 思路一：
 * 1.使用两个数组，一个前缀积，一个后缀积
 * 2.当前位置的则是前缀积的前一个和后缀积的后一个的和
 * 思路二:
 * 使用一个数组作为输出数组
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    /**
     *  思路一:
    let sArr = [], eArr = [], temp = 1, res = [];
    for (let i = 0; i < nums.length; i++) {
        temp *= nums[i];
        sArr.push(temp)
    }
    temp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        temp *= nums[i];
        eArr.unshift(temp)
    }
    for (let i = 0; i < nums.length; i++) {
        let sum = 1;
        if (i !== 0) {
            sum *= sArr[i - 1];
        }
        if (i !== nums.length - 1) {
            sum *= eArr[i + 1];
        }
        res.push(sum);
    }
    return res;
     */
    /**
     * 思路二:
     */
    let res = [1], temp = 1;
    for (let i = 0; i < nums.length; i++) {
        temp *= nums[i];
        if (i < nums.length - 1) {
            res[i + 1] = temp;
        }
    }
    temp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        temp *= nums[i];
        if (i > 0) {
            res[i - 1] *= temp;
        }
    }
    return res;
};
// @lc code=end