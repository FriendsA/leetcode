/*
 * @lc app=leetcode.cn id=75 lang=javascript
 * 思路: 
 * 1.三指针排序
 * 2.left左边为0，right右边为2，mid为游标当mid和right相同时停止
 * 3.mid位为0和left换 left和mid同时移动，为2和right换
 * 注意:
 * 边界条件:
 * 和left相等，left和mid同时右移,和right相等，right左移，其他mid右移
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0, right = nums.length - 1, mid = left;
    while (mid <= right) {
        if (nums[mid] === 0) {
            [nums[mid], nums[left]] = [nums[left], nums[mid]];
            left++;
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[right]] = [nums[right], nums[mid]];
            right--;
        } else {
            mid++;
        }
    }
};
// @lc code=end

