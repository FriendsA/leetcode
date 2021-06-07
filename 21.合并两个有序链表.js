/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * 思路:
 * 遍历两个链表，比较小的节点创建添加至新的链表
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let res, node, temp=null;
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                node = l1;
                l1 = l1.next;
            } else {
                node = l2;
                l2 = l2.next;
            }
        } else if (l1) {
            node = l1;
            l1 = l1.next;
        } else {
            node = l2;
            l2 = l2.next;
        }
        if (res) {
            res.next = node;
            res = res.next;
        } else {
            res = node;
            temp = res;
        }
    }
    return temp;
};
// @lc code=end

