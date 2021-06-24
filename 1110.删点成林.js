/*
 * @lc app=leetcode.cn id=1110 lang=javascript
 * 思路一: BFS 递归+迭代
 * 1. 层序遍历二叉树，如果传入节点不为需要删除节点则添加到森林中，遍历该节点
 * 2. 如果传入节点为删除节点则左右字节点递归调用
 * 3. 层序遍历时如果遍历的节点左子节点为删除节点 则左子节点递归调用 该节点左字节点只为空，右节点同理。
 * 4. 否则加入队列继续遍历。
 * 思路二: DFS
 * 1. 后续遍历二叉树，从下往上，如果节点为删除节点，则把左右加入森林中，返回空，否则返回该节点。
 * 2. 把节点的左右节点更新
 * 3. 最后判断root节点
 * [1110] 删点成林
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    if (!root) {
        return null;
    }
    let ans = [];
    /**
     * 思路1:
    BFS(root);
    return ans;
    function BFS(root) {
        if (!root) {
            return;
        }
        if (to_delete.includes(root.val)) {
            BFS(root.left);
            BFS(root.right);
            return;
        }
        ans.push(root);

        let stack = [];
        stack.push(root);
        while (stack.length) {
            let node = stack.shift();
            if (node.left && !to_delete.includes(node.left.val)) {
                stack.push(node.left);
            } else {
                BFS(node.left);
                node.left = null
            }
            if (node.right && !to_delete.includes(node.right.val)) {
                stack.push(node.right);
            } else {
                BFS(node.right);
                node.right = null
            }
        }
    }
     */
    /**
     * 思路2:
     */

    if (DFS(root)) {
        ans.push(root);
    };
    function DFS(root) {
        if (!root) {
            return null;
        }

        root.left = DFS(root.left);
        root.right = DFS(root.right);

        if (to_delete.includes(root.val)) {
            if (left) {
                ans.push(left);
            }
            if (right) {
                ans.push(right);
            }
            return null;
        } else {
            return root;
        }
    }
    return ans;
};
// @lc code=end

