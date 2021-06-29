/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * 思路:
 * 1. 双指针从后往前排序插入
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (!n) {
        return;
    }
    let p1 = m - 1, p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0;) {
        if (nums1[p1] !== undefined && nums2[p2] !== undefined) {
            if (nums1[p1] > nums2[p2]) {
                nums1[i--] = nums1[p1--];
            } else {
                nums1[i--] = nums2[p2--];
            }
        } else if (nums1[p1] !== undefined) {
            nums1[i--] = nums1[p1--];
        } else if (nums1[p2] !== undefined) {
            nums1[i--] = nums2[p2--];
        }
    }
};
// @lc code=end

