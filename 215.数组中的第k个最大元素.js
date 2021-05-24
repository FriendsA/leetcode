/*
 * @lc app=leetcode.cn id=215 lang=javascript
 * 思路一:
 * 1.冒泡排序从后往前
 * 2.排序到第nums.length-k个元素就可以停止了
 * 3.返回nums[nums.length -k];
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    for (let i = nums.length - 1; i >= nums.length - k; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums[nums.length - k];
};
// @lc code=end

