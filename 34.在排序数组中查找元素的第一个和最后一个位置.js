/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * 思路:
 * 1.二分法查找
 * 2.注意边界条件
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let ans = [-1, -1];
    let leftIndex = splitFun(nums, target, true);
    let rightIndex = splitFun(nums, target, false) - 1;
    if (leftIndex <= rightIndex && nums[leftIndex] === target && nums[rightIndex] === target) {
        ans = [leftIndex, rightIndex]
    }
    return ans;
};

function splitFun(nums, target, lower) {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
// @lc code=end

