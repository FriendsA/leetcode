/*
 * @lc app=leetcode.cn id=637 lang=javascript
 * 思路: BFS
 * 1. 层序遍历，每层计算平均数
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) {
        return;
    }
    let stack = [], temp, ans = [];
    stack.push(root);
    while (stack.length) {
        let size = stack.length;
        let arr = [];
        while (size) {
            temp = stack.shift();
            if (temp.left) {
                stack.push(temp.left);
            }
            if (temp.right) {
                stack.push(temp.right);
            }
            arr.push(temp.val);
            size--;
        }
        ans.push(arr.reduce((a, b) => a + b) / arr.length);
    }
    return ans
};
// @lc code=end

