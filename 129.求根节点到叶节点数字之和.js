/*
 * @lc app=leetcode.cn id=129 lang=javascript
 * 思路一: DFS
 * 1. 深度遍历把每次遍历的值带到字节点，拼成数字，如果到了叶节点就加到总数里
 * 思路二: DFS
 * 1. 每次的值*10再加当前值带入字节点，返回的值=左子树的值+右子树的值，如果到叶节点直接返回计算的值
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
    /**
     * 思路一:
    let sum = 0;
    DFS(root, 0);
    return sum;
    function DFS(root, num) {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            sum += (num * 10 + root.val);
        }
        DFS(root.left, num + root.val);
        DFS(root.right, num + root.val);
    }
    */
    /**思路二: */
    return DFS(root, 0);
    function DFS(root, num) {
        if (!root) {
            return 0;
        }
        if (!root.left && !root.right) {
            return (num * 10 + root.val);
        }
        return DFS(root.left, num * 10 + root.val) + DFS(root.right, num * 10 + root.val);
    };
};
// @lc code=end

