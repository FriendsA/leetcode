/*
 * @lc app=leetcode.cn id=528 lang=javascript
 * 思路:
 * 1.计算总和，则每部分所在的区间为概率 
 * 2.从总和中随一个数字，在哪个区间则对应取哪个数字
 * 优化: 
 * 1.可以保存前缀和数组
 * 2.查找使用二分法
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.init = w;
    this.sum = w.reduce((a, b) => a + b);
    this.sumArr = [];
    let temp = 0;
    for (let i of w) {
        this.sumArr.push(i + temp);
        temp += i;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let temp = (Math.random() * this.sum + 1) | 0;
    // for (let i = 0; i < this.init.length; i++) {
    //     if (temp - this.init[i] <= 0) {
    //         return i;
    //     }
    //     temp -= this.init[i];
    // }
    let l = 0, r = this.sumArr.length - 1, res = r;
    while (l <= r) {
        let mid = (l + r) / 2 | 0;
        if (this.sumArr[mid] >= temp) {
            r = mid - 1;
            res = mid;
        } else {
            l = mid + 1;
        }
    }
    return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

