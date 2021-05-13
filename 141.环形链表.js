/*
 * @lc app=leetcode.cn id=141 lang=javascript
 * 思路：
 * 1. 快慢指针遍历，如果相遇了有环，指针到头没环
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next || !head.next.next) {
        return false;
    }
    let sp = head.next;
    let fp = head.next.next;
    while (sp != fp) {
        sp = sp.next;
        if (!fp.next || !fp.next.next) {
            return false;
        }
        fp = fp.next.next;
    }
    return true;
};
// @lc code=end

