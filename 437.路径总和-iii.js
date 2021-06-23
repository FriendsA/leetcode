/*
 * @lc app=leetcode.cn id=437 lang=javascript
 * 思路: 双重DFS
 * 1. DFS遍历树，再遍历树的时候再以当前节点为跟节点向下遍历和为targetNum的字节点
 * 2. 用一个变量计数，查到了就加1,继续遍历。
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function (root, targetSum) {
   return path(root, targetSum)
};

function path(root, targetSum) {
    let count = 0;
    return getPath(root, targetSum);
    function getPath(root, targetSum) {
        if (!root) {
            return 0;
        }
        DFS(root, targetSum);
        getPath(root.left, targetSum);
        getPath(root.right, targetSum)
        return count;
    };
    function DFS(root, targetSum) {
        if (!root) {
            return;
        }
        let sum = targetSum - root.val;
        if (sum === 0) {
            count++;
        }
        DFS(root.left, sum);
        DFS(root.right, sum);
    }
}

// @lc code=end

