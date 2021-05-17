/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * 思路1:
 * 递归查找
 * 查找p，q节点是否在树的那一侧。同一侧则root为公共父节点
 * 都在左侧则接着遍历左树，都在右侧接着遍历右树
 * 思路2:
 * 中序遍历(左根右)：两个节点中间的节点为根节点
 * 前序遍历(根左右)：先出现的为根节点
 * 前序中最先出现的中序中间节点既是最小公共父节点
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    //思路1:
    /** 
    if (!root) {
        return null;
    }
    if (root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }
    return left ? left : right;
    */
    //思路2:
    if (!root) {
        return null;
    }
    if (root === p || root === q) {
        return root;
    }
    let temp = [];
    //前序遍历
    let saveArr = [];
    //中序遍历
    let saveArr2 = [];
    let node = root;
    while (node || temp.length > 0) {
        while (node) {
            saveArr.push(node);
            temp.push(node);
            node = node.left;
        }
        if (temp.length > 0) {
            node = temp.pop();
            saveArr2.push(node);
            node = node.right;
        }
    }
    let flag = 0;
    let min = Infinity;
    for (let i of saveArr2) {
        if (i === q || i === p) {
            flag++;
        }
        if (flag) {
            min = Math.min(min, saveArr.findIndex(j => j === i));
        }
        if (flag === 2) {
            break;
        }
    }
    return saveArr[min];
};
// @lc code=end

