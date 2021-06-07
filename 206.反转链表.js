/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * 思路:递归 迭代
 * 递归head.next,当递归到最后一个节点时返回最后一个节点
 * 却别在于递归和迭代的子结构
 * [206] 反转链表
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
var reverseList = function (head) {

    /**
     * 递归 返回最后一个节点
    let newHead = null;
    function reverse(head) {
        if (!head || !head.next) {
            newHead = head;
            return head;
        }
        let tail = reverse(head.next);
        tail.next = head;
        head.next = null;
        return head;
    }
    reverse(head);
    return newHead;
      */

    /**
     * 递归 不需要返回 让head.next.next 指向当前即可
    
    let res;
    function reverse(head) {
        if (!head || !head.next) {
            res = head;
            return head;
        }
        reverse(head.next);
        head.next.next = head;
        head.next = null;
    }
    reverse(head);
    return res;
     */

    /**
     * 迭代 只改变当前节点的指向
    let prev = null,curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return curr;
    */
};
// @lc code=end

