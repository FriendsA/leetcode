/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * 思路1:(时间复杂度为O(m+n))
 * 1.双指针从头循环两个数组,合并数组。
 * 2.偶数长度找出中间的两个数，奇数长度找出中间一个数
 * 思路2:
 * 
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //思路1:
    /** 
    let arr = [];
    let i = j = 0;
    while (i < nums1.length || j < nums2.length) {
        if ((nums1[i] || nums1[i] === 0) && (nums2[j] || nums2[j] === 0)) {
            if (nums1[i] < nums2[j]) {
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        } else if (nums1[i] || nums1[i] === 0) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }
    console.log(arr)
    let length = arr.length;
    if (length % 2 === 0) {
        return (arr[length / 2] + arr[length / 2 - 1]) / 2;
    } else {
        return arr[(length - 1) / 2];
    }
    */
};
// @lc code=end

