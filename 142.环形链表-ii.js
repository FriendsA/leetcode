/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * 思路：
 * 1. 快慢指针遍历，相遇则有环，快指针到头则无环
 * 2. 相遇后快指针回到头结点，快慢指针都各走一步，相遇的地方则是环的入口点
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next || !head.next.next) {
        return null;
    }
    let sp = head.next;
    let fp = head.next.next;
    while (sp !== fp) {
        if (!fp.next || !fp.next.next) {
            return null;
        }
        sp = sp.next;
        fp = fp.next.next;
    }
    fp = head;
    while (fp !== sp) {
        fp = fp.next;
        sp = sp.next;
    }
    return fp;
};
// @lc code=end

