/*
 * @lc app=leetcode.cn id=300 lang=javascript
 * 思路一：
 * 1. 用一个同位数的数组arr表示第i位时的最长递增子序列长度，全部初始化为1，
 * 2. 第i+1位的长度为:比较前i位，比i大则记录arr[i]+1,之后取最大的存arr[i+1]
 * 3. 遍历arr取最大的
 * 思路儿: 贪心
 * 1. 用一个arr表示第i位的最长递增子序列的最后一位元素
 * 2. 第i+1的位的值 和i比较，如果大则记录进arr，小则二分查找比arr小的替换掉下一位
 * 3. arr的长度则为最长递增子序列的长度
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    /**  思路1: 
    let arr = nums.map(i => 1);
    for (let i = 0; i < nums.length; i++) {
        let max = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                max = Math.max(max, arr[j] + 1);
            }
        }
        arr[i] = max;
    }
    return arr.reduce((a, b) => a > b ? a : b);
    */
    /** 思路2: */
    let arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i]);
        } else {
            if (arr[0] >= nums[i]) {
                arr[0] = nums[i];
            } else {
                let l = 0, r = arr.length - 1, mid, pos = 0;
                while (l <= r) {
                    mid = (l + r) / 2 | 0
                    if (arr[mid] >= nums[i]) {
                        r = mid - 1;
                    } else {
                        pos = mid;
                        l = mid + 1;
                    }
                }
                arr[pos + 1] = nums[i];
            }
        }
    }
    return arr.length;
};
// @lc code=end

