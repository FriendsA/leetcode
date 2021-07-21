/*
 * @lc app=leetcode.cn id=100 lang=javascript
 * 思路: DFS
 * 1.同时递归两棵树，比较两棵树的节点是否相同
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return DFS(p, q);
    function DFS(root1, root2) {
        if (!root1 && !root2) {
            return true;
        }
        if (!root1 || !root2) {
            return false;
        }
        if (root2.val !== root1.val) {
            return false;
        }
        return DFS(root1.left, root2.left) && DFS(root1.right, root2.right);
    }
};
// @lc code=end

