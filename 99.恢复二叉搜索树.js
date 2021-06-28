/*
 * @lc app=leetcode.cn id=99 lang=javascript
 * 思路一: DFS 中序遍历 O(h)
 * 1. 中序遍历二叉搜索树，保存前一个节点。
 * 2. 正常的应该是递增顺序，所以比较前一个和当前的节点值。
 * 3. 两个节点互换多找到两组异常的值，记录第一组的前一个节点和第二组的后一个节点值，或只有一组记录两个节点值
 * 4. 交换两个节点的值。
 * 思路二: morris遍历 O(1)
 * 1. 如果cur没有左节点，cur向右节点移动
 * 2. 如果cur有左节点，找出左节点的最右的节点
 *   * 如果最右节点没有右节点，最右节点的右节点指向cur,cur左移。
 *   * 如果最右节点的右节点是cur，最右节点的右节点置成空，cur右移。
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    /**
     * 思路1:
    let stack = [], x, y, pre;
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (pre) {
            if (pre.val > root.val) {
                y = root;
                if (x) {
                    break;
                } else {
                    x = pre;
                }
            }
        } else {
            pre = root;
        }
        pre = root;
        root = root.right;
    }
    [x.val, y.val] = [y.val, x.val];
     */
    // 思路二: 
    let cur = root, last, x, y;
    while (cur) {
        let tempNode = cur.left;
        if (tempNode) {
            while (tempNode.right && tempNode.right !== cur) {
                tempNode = tempNode.right;
            }

            if (tempNode.right) {
                tempNode.right = null;
            } else {
                tempNode.right = cur;
                cur = cur.left;
                continue;
            }
        }
        if (last && last.val > cur.val) {
            if (!x) {
                x = last;
            }
            y = cur;
        }
        last = cur;
        cur = cur.right;
    }
    [x.val,y.val] = [y.val,x.val];
};
// @lc code=end

