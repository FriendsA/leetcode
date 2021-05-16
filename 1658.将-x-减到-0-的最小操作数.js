/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 * 思路1：
 * 1.遍历前缀和存map {sum,index}
 * 2.遍历后缀和存map {sum,index}
 * 3.遍历前缀 从后缀map里找相加等于目标数的值 长度则为索引的和
 * 4.遍历时记录最小长度
 * 5.注意:
 *      左右指针都从0开始
 *      左右指针不能越界
 * 思路2：
 * 1.遍历加出总和
 * 2.从左边开始滑动窗口寻找 总和减去减去目标值
 * 3.右指针移动加到超过了左指针移动，减到超过了右指针移动
 * 4.滑动时记录最小长度
 * 5.注意:
 *      左右指针不能越界
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    //思路1
    /**
    let startMap = new Map(), endMap = new Map();
    startMap.set(0, 0);
    endMap.set(0, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        startMap.set(sum, i + 1);
    }
    sum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        sum += nums[i];
        endMap.set(sum, nums.length - i);
    }
    let ans = Infinity;
    for (let [key, value] of startMap.entries()) {
        if (key > x) {
            break;
        }
        let half = endMap.get(x - key)
        if ((half || half === 0) && nums.length - half >= value) {
            ans = Math.min(ans, value + half);
        }
    }
    for (let [key, value] of endMap.entries()) {
        if (key > x) {
            break;
        }
        let half = startMap.get(x - key)
        if ((half || half === 0) && nums.length - value >= half) {
            ans = Math.min(ans, value + half);
        }
    }
    return ans === Infinity ? -1 : ans;
    */
    //思路2
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let rest = sum - x;
    let l = 0, r = 0;
    let total = 0;
    let ans = Infinity;
    while (r <= nums.length) {
        while (total > rest) {
            total -= nums[l];
            l++;
        }
        if (total === rest && l <= r) {
            ans = Math.min(ans, nums.length - (r - l));
        }
        total += nums[r];
        r++;
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

