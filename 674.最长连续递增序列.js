/*
 * @lc app=leetcode.cn id=674 lang=javascript
 * 思路一:
 * 1. 指针指向起始位置，指针1开始，符合条件则前进
 * 2. 用max记录连续增长的值，不符合条件则重制max
 * 3. 记录max的最大值即结果
 * 思路二: 动态规划
 * 1. 状态转移方程 dp[i] 代表dp为到i的子序列长度(dp[i]为序列的最大值)
 *    如果 dp[i]>dp[i-1] 则 dp[i] = dp[i-1] +1 否则 dp[i] =1 
 * 2. 边界条件 dp[0] = 1;
 * 3. 最优子结构  dp[i] = dp[i-1] +1
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    /**
     * 思路1:
    let p = 1, max = 1, res = 1;
    while (p < nums.length) {
        if (nums[p] > nums[p - 1]) {
            max++;
            res = Math.max(res, max);
        } else {
            max = 1;
        }
        p++;
    }
    return res;
     */
    //思路2:
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
    }
    return Math.max(...dp);
};
// @lc code=end

