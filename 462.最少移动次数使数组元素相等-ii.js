/*
 * @lc app=leetcode.cn id=462 lang=javascript
 * 思路:寻找中位数
 * 1.快速排序寻找中位数
 * 2.偶数个的时候[q,p]中任何一个数即可
 * 3.快速排序时，只排序包含中位数下标的那部分，直到找到下标
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    let n = nums.length / 2 | 0;
    let { index, start, end } = partition(nums, 0, nums.length - 1);
    while (n !== index) {
        if (n > index) {
            let data = partition(nums, index + 1, end);
            index = data.index;
            start = data.start;
            end = data.end;
        } else {
            let data = partition(nums, start, index - 1);
            index = data.index;
            start = data.start;
            end = data.end;
        }
    }
    let sum = 0
    for (let i of nums) {
        sum += Math.abs(i - nums[n]);
    }
    return sum;
};
function partition(nums, start, end) {
    let flag = nums[start], left = start, right = end;
    while (left != right) {
        while (left < right && nums[right] > flag) {
            right--;
        }
        while (left < right && nums[left] <= flag) {
            left++;
        }
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }
    [nums[left], nums[start]] = [nums[start], nums[left]];
    let index = left;
    return { index, start, end };
}
minMoves2([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
// @lc code=end

