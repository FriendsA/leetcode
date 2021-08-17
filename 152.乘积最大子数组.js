/*
 * @lc app=leetcode.cn id=152 lang=javascript
 * 思路一:
 * 1. 把数组按照0的位置拆分成若干数组，如果有0，则最大值最小是0，（乘0永远是0），转换成求若干的数组的最大值
 * 2. 滑动窗口处理一个一个乘到最后，然后如果得出结果是负值，则从前边找到第一个负数，除去负数和负数前边的数，
 * 3. 其实就是包含偶数个负数的则是所有乘积，奇数个的则是两边去掉直到负数的部分再比较
 * 思路二：动态规划
 * 1. 状态转移方程
 * Max(i) = Math.max(i,Max(i-1)*i,Min(i-1)*i);
 * Min(i) = Math.min(i,Max(i-1)*i,Min(i-1)*i);
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    /** 
     * 思路1：
    let max = -Infinity, t = 0, arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            arr.push(nums.slice(t, i));
            t = i + 1;
            max = 0;
        }
    }
    if (t !== nums.length) {
        arr.push(nums.slice(t));
    }
    for (let i of arr) {
        let n = findMax(i);
        max = Math.max(max, n);
    }
    return max;
    */
    /**思路2: 动态规划 
    let Max = nums.map(i => i), Min = nums.map(i => i), max = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        Max[i] = Math.max(Max[i], Max[i - 1] * Max[i], Min[i - 1] * Max[i]);
        Min[i] = Math.min(Min[i], Max[i - 1] * Min[i], Min[i - 1] * Min[i]);
    }
    for (let i of Max) {
        max = Math.max(max, i);
    }
    return max;
    */
    /** 思路3: 优化动态规划 */
    let max = nums[0], min = nums[0], result = nums[0], temp;
    for (let i = 1; i < nums.length; i++) {
        temp = max;
        max = Math.max(nums[i], nums[i] * max, nums[i] * min);
        min = Math.min(nums[i], nums[i] * temp, nums[i] * min);
        result = Math.max(max, result);
    }
    return result;
};

function findMax(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let p1 = 0, p2 = 0, max = -Infinity, temp = 1;
    while (p2 < nums.length) {
        temp *= nums[p2];
        if (temp > max) {
            max = temp;
        }
        p2++;
    }
    if (temp > 0) {
        return max;
    } else {
        let temp2 = 1;
        while (nums[p1] > 0) {
            temp2 *= nums[p1];
            p1++;
        }
        temp2 *= nums[p1];
        if (temp / temp2 > max) {
            max = temp / temp2;
        }
    }
    return max;
}
// @lc code=end

