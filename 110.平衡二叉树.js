/*
 * @lc app=leetcode.cn id=110 lang=javascript
 * 思路: DFS
 * 1. 自底向上返回子树的深度，如果左右深度大于1，则返回false
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true
    }
    let flag = true;
    DFS(root);
    return flag;
    function DFS(root) {
        let l = 0, r = 0;
        if (root.left) {
            l = DFS(root.left);
            if (l < 0) {
                return -1;
            }
        }
        if (root.right) {
            r = DFS(root.right);
            if (r < 0) {
                return -1;
            }
        }
        if (Math.abs(l - r) > 1) {
            flag = false;
            return -1;
        }
        return Math.max(l, r) + 1;
    }
};
// @lc code=end