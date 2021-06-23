/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * 思路: DFS
 * 1. DFS差找左右最大节点数。 路径数 = 最大节点数 - 1
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    DFS(root);
    return max;
    function DFS(root) {
        if (!root) {
            return 0;
        }
        let l = DFS(root.left);
        let r = DFS(root.right);
        if (max < l + r) {
            max = l + r;
        }
        return Math.max(l, r) + 1;
    }
};
// @lc code=end

