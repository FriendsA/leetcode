/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * 思路一: BFS 迭代
 * 1. 层序遍历二叉树，用数组存储每层的节点，不存在的字节点用-1标识。
 * 2. 遍历一层就比较一层是否镜像，所有层都为镜像则为镜像二叉树。
 * 思路二: DFS 递归
 * 1. 同时递归左右子树，比较左右子树的值是否相等。
 * 思路三: DFS 迭代
 * 1. 用栈来存储节点，开始入栈两次root，每次循环都取出两个结点，每次遍历也都入栈镜像的两个结点。
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    if (!root) {
        return false;
    }
    /**
     * 思路1:
    let stack = [], temp, arr = [];
    stack.push(root);
    while (stack.length) {
        let size = stack.length;
        arr = [];
        while (size) {
            temp = stack.shift();
            if (temp.left) {
                stack.push(temp.left);
                arr.push(temp.left.val);
            } else {
                arr.push(-1);
            }
            if (temp.right) {
                stack.push(temp.right);
                arr.push(temp.right.val);
            } else {
                arr.push(-1);
            }
            size--;
        }
        let i = 0, j = arr.length - 1;
        while (i < j) {
            if (arr[i++] !== arr[j--]) {
                return false;
            }
        }
    }
     */
    /**
     * 思路2:
    return DFS(root.left,root.right);
    function DFS(left, right) {
        if (!left && !right) {
            return true;
        }
        if(!left || !right) {
            return false;
        }
        return (left.val === right.val) && DFS(left.left, right.right) && DFS(left.right, right.left);
    }
     */
    /**
     * 思路3:
     */
    let stack = [];
    stack.push(root);
    stack.push(root);
    while (stack.length) {
        let l = stack.pop();
        let r = stack.pop();
        if (!l && !r) {
            continue;
        }
        if (!r || !l) {
            return false;
        }
        if (l.val !== r.val) {
            return false;
        }
        stack.push(l.left);
        stack.push(r.right);
        stack.push(l.right);
        stack.push(r.left);
    }
    return true;
};
// @lc code=end

