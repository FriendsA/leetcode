/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * 思路1:
 * 1.前序 [根，左子树，右子树]
 * 2.中序 [左子树，根，右子树]
 * 3.利用前序的第一个根可以在中序中确定根的位置
 * 4.利用中序根的位置可以在前序中区分左子树和右子树
 * 5.递归处理这样的拆分子树
 * 6.边界条件是前序拆分到不能拆分
 * 7.使用map存储中序的位置，优化查找根的位置
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    function build(pl, pr, il, ir) {
        if (pl > pr) {
            return null;
        }
        let index = map.get(preorder[pl]);
        let num = index - il;
        let root = new TreeNode(preorder[pl]);
        root.left = build(pl + 1, pl + num, il, index - 1);
        root.right = build(pl + num + 1, pr, index + 1, ir)
        return root
    }
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end

