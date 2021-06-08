/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * 思路一: 递归
 * 每次交换两个节点，递归操作后面的 
 * 思路二: 迭代
 * 先做一个虚拟节点在head前面 迭代操作三个节点，然后每次移动两个节点保证操作的next不会乱
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    /**
     *  思路1: 递归
        if (!head || !head.next) {
            return head;
        }
        let node = head, res = head.next;
        let temp = swapPairs(node.next.next);
        node.next.next = node;
        node.next = temp;
        return res;
     */
    // 思路2: 迭代
    if(!head || !head.next){
        return head;
    }
    let temp = new TreeNode(), node1, node2,res = head.next;
    temp.next = head;
    while (temp.next && temp.next.next) {
        node1 = temp.next;
        node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return res;

};
// @lc code=end

