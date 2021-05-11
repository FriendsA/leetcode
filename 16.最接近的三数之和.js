/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 * 思路:
 * 0.先排序
 * 1.固定一个数 剩下两个使用双指针模拟动态滑动窗口
 * 2.计算差值，只记录最小的那个。
 * 3.固定值判断和前一个相同跳过，滑动窗口判断和后一个相同跳过
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let close = Infinity;
    let s;
    let array = nums.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] === array[i - 1]) {
            continue;
        }
        let l = i + 1; r = array.length - 1;
        while (l < r) {
            let sum = array[i] + array[l] + array[r];
            if (target < sum) {
                r--;
            } else {
                l++;
            }
            if (Math.abs(target - sum) < close) {
                close = Math.abs(target - sum);
                s = sum;
            }
        }
    }
    return s;
};
// @lc code=end

