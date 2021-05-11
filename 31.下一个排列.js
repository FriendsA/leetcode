/*
 * @lc app=leetcode.cn id=31 lang=javascript
 * 思路：
 * 1.从后往前找，找当前数字后面比他 大 的 最小 数字
 * 2.互换位置，后面的从小到大排序
 * 3.没找到则全局从小到大排序
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    function sort(l) {
        for (let j = nums.length - 1; j > l; j--) {
            for (let i = l; i < j; i++) {
                if (nums[i] > nums[i + 1]) {
                    nums[i + 1] = nums[i + 1] + nums[i];
                    nums[i] = nums[i + 1] - nums[i];
                    nums[i + 1] = nums[i + 1] - nums[i];
                }
            }
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {

        let small = Infinity;
        let flag;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i] && nums[j] < small) {
                flag = j;
                small = nums[j];
            }
        }
        if (small !== Infinity) {
            //互换，排序，返回
            nums[flag] = nums[flag] + nums[i];
            nums[i] = nums[flag] - nums[i];
            nums[flag] = nums[flag] - nums[i];
            sort(i + 1);
            return;
        }
    }
    sort(0);
};
// @lc code=end

