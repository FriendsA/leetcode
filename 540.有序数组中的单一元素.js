/*
 * @lc app=leetcode.cn id=540 lang=javascript
 * 思路一:
 * 二分查找
 * 1.判断mid的前后是否有相同的数字
 * 2.两个数的索引如果偶奇要找的数在后面 如果是奇偶的话 要找的数在前边
 * 思路二：
 * 全部数字非操作（时间复杂度为n）
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    // 思路一:
    /**
    let left = 0, right = nums.length - 1, mid;
    let ans;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid - 1] && nums[mid - 1] === nums[mid]) {
            if (mid % 2 === 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid + 1] && nums[mid + 1] === nums[mid]) {
            if (mid % 2 !== 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid]) {
            return nums[mid];
        }
    }
    return ans ? nums[ans] : nums[left];
    */
    //思路二:
    return nums.reduce((a, b) => a ^ b);
};
// @lc code=end

