/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * 思路一: 
 * 1.找到0移动到数组后面
 * 思路二: 双指针
 * 1. 一个指针指向零，一个指针指向零后面的非零数字，交换，直到非零指针到数组最后
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /**
     * 思路一: 
    let length = nums.length, r = nums.length, i = 0;
    while (i < length) {
        if (!nums[i]) {
            nums.splice(i, 1);
            nums[r - 1] = 0;
            length--;
        } else {
            i++;
        }
    }
     */
    /** 思路二: */
    let j = 0, i = 0;
    while (i < nums.length) {
        while (nums[j]) {
            j++;
        }
        i = j + 1;
        while (nums[i] === 0) {
            i++;
        }
        if (i < nums.length) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
};
// @lc code=end

