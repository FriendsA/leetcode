/*
 * @lc app=leetcode.cn id=384 lang=javascript
 * 思路:Fisher–Yates shuffle 洗牌算法
 * 1.从后往前遍历数组，每次从前边元素随机一个和当前位置替换。
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
    this.init = nums.concat();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.init;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = this.nums.length - 1; i >= 0; i--) {
        let random = Math.random() * (this.nums.length - 1 - i) | 0;
        [this.nums[i], this.nums[random]] = [this.nums[random], this.nums[i]];
    }
    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

