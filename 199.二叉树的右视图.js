/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * 思路一: DFS
 * 1.深度优先遍历记录每层最先遍历到的节点
 * 思路二: BFS
 * 1.广度优先遍历，记录每层最后遍历的节点
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {

    if (!root) {
        return []
    }

    /**
     * 思路1: DFS
    let ans = [];
    DFS(root, 0);
    return ans;

    function DFS(root, dep) {
        if (!root) {
            return;
        }
        if (!ans[dep]) {
            ans[dep] = root.val;
        }
        DFS(root.right, dep + 1);
        DFS(root.left, dep + 1);
    }
    */

    /**
     * 思路2: BFS
     */

    let stack = [], n, node, ans = [];
    stack.push(root);
    while (stack.length) {
        n = stack.length;
        while (n) {
            node = stack.shift();
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
            n--;
        }
        ans.push(node.val);
    }
    return ans;
};
// @lc code=end

