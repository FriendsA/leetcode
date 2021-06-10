/*
 * @lc app=leetcode.cn id=448 lang=javascript
 * 思路: 鸽笼
 * 1.遍历数组，值x对应的索引[x-1]置为负数。
 * 2.再次遍历数组，没有变成负数的则为未出现数字
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let temp, res = [];
    for (let i = 0; i < nums.length; i++) {
        temp = Math.abs(nums[i]);
        nums[temp - 1] = -1 * Math.abs(nums[temp - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};
// @lc code=end

