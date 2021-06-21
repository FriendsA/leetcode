/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * 思路: 回溯 DFS
 * 1. 利用copy数组标记使用过的下标
 * 2. 因为会复用res，所以ans中的res每次要做个拷贝存进去
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = [], res = [], copy = nums.map(i => false);
    DFS(0, res);
    return ans;

    function DFS(depth, res) {
        if (depth === nums.length) {
            ans.push([...res]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!copy[i]) {
                copy[i] = true;
                res.push(nums[i]);
                DFS(depth + 1, res);
                copy[i] = false;
                res.pop();
            }
        }
    }
};
// @lc code=end

