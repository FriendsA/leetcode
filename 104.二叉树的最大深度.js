/*
 * @lc app=leetcode.cn id=104 lang=javascript
 * 思路一: DFS
 * 1. 遍历左右节点，每次遍历字节点深度加1，直到遍历所有节点。
 * 思路二: BFS
 * 2. 用栈存储遍历节点，遍历一层之后再遍历下一层。每次遍历一层深度加1。
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let max = 0;
    /**
     * 思路1: DFS
        DFS(1, root);
        return max;
        function DFS(n, root) {
            if (root.left) {
                DFS(n + 1, root.left)
            }
            if (root.right) {
                DFS(n + 1, root.right)
            }
            max = Math.max(max, n);
        }
     */
    // 思路2: BFS
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let len = stack.length;
        while (len) {
            let node = stack.shift();
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
            len--;
        }
        max++;
    }
    return max;
};
// @lc code=end

