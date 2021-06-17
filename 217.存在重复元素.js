/*
 * @lc app=leetcode.cn id=217 lang=javascript
 * 思路:
 * 1. 遍历数组，利用set存储，如果set中存在则存在重复元素
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set();
    for (let i of nums) {
        if (set.has(i)) {
            return true;
        } else {
            set.add(i);
        }
    }
    return false;
};
// @lc code=end

