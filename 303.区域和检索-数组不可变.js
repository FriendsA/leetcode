/*
 * @lc app=leetcode.cn id=303 lang=javascript
 * 思路:
 * 1. 不存原始数组，而存前缀和数组，最开始的位置存个0;
 * 2. [left,right]的和即为 array[right+1]-array[left] 的值
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.array = [0];
    let sum = 0;
    for (let i of nums) {
        sum += i;
        this.array.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.array[right + 1] - this.array[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end