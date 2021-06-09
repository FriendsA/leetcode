/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * 思路:
 * 1.快慢指着查找中间节点 偶数节点则找到中间两个节点的前一个
 * 2.中间节点的下一个开始反转链表 记录反转的头节点
 * 3.初始链表和反转链表开始遍历比较，直到反转链表尽头
 * 4.再次反转反转链表 恢复链表
 * 5.返回比较结果
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let p1 = head, p2 = head, flag = true;
    while (p2.next && p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    let tailNode = reverseNode(p1.next);
    let startNode = head, endNode = tailNode;
    while (flag && endNode) {
        if (startNode.val !== endNode.val) {
            flag = false;
        }
        startNode = startNode.next;
        endNode = endNode.next;
    }
    reverseNode(tailNode);
    return flag;

    function reverseNode(node) {
        let prev = null;
        let curr = node;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};
// @lc code=end

