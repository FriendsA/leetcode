/*
 * @lc app=leetcode.cn id=226 lang=javascript
 * 思路1:递归
 * 1.递归处理左右子树
 * 2.节点为空返回
 * 思路2:利用栈存储
 * 1.根入栈，
 * 2.栈不为空则弹出栈里一个节点
 * 3.节点的左右节点存在就入栈
 * 4.交换节点的左右节点，执行2
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    /**
     * 思路1:
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
     */
    //思路2:
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
        [node.left, node.right] = [node.right, node.left];
    }
    return root;
};
// @lc code=end

