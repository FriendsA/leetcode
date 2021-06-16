/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * 思路一:（复杂度超过O(n)）
 * 去重，排序，从头遍历。
 * 思路二:
 * 1.用set存去重，然后遍历数组，查找set中是否存在连续的数，直到查找到不存在。
 * 2.跳过前一个在set中的（避免重复查找）
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    /**
     * 思路1:
    nums = [...new Set(nums)].sort((a, b) => a - b);
    let l = r = 0; max = 0;
    while (r < nums.length) {
        r++;
        if (nums[r] !== nums[r - 1] + 1) {
            l = r;
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
     */
    // 思路2:
    let set = new Set(), res = 0, max;
    for (let i of nums) {
        set.add(i);
    }
    for (let i of nums) {
        if (!set.has(i - 1)) {
            max = 1;
            while (set.has(i + max)) {
                max += 1;
            }
            res = Math.max(res, max);
        }
    }
    return res;
};
// @lc code=end