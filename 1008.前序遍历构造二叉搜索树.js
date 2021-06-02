/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 * 思路一:
 * 1.前序遍历第一个一定是根节点
 * 2.把第一个固定成跟节点，然后依次遍历
 * 3.按照二叉搜索树的规则插入
 * [1008] 前序遍历构造二叉搜索树
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
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    /**
     * 思路1；
     */
    let root = new TreeNode(preorder[0]);
    for (let i = 1; i < preorder.length; i++) {
        insert(root,preorder[i]);
    }
    return root;

    function insert(root,node){
        if(node>root.val){
            if(root.right){
                insert(root.right,node);
            }else{
                root.right = new TreeNode(node);
            }
        }else{
            if(root.left){
                insert(root.left,node);
            }else{
                root.left = new TreeNode(node);
            }
        }
    }
};
// @lc code=end

