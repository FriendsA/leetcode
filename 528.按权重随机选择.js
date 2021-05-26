/*
 * @lc app=leetcode.cn id=528 lang=javascript
 * 思路:
 * 1.计算总和，则每部分所在的区间为概率 
 * 2.从总和中随一个数字，在哪个区间则对应取哪个数字
 * 
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.init = w;
    this.sum = w.reduce((a, b) => a + b);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let temp = Math.random() * this.sum;
    for (let i = 0; i < this.init.length; i++) {
        if (temp - this.init[i] <= 0) {
            return i;
        }
        temp -= this.init[i];
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

