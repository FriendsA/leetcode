/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * 思路一: 空间复杂度O(n)
 * 1.利用set存储一个链表的节点
 * 2.遍历另一个链表，当set存在该节点时，即为相交节点。
 * 思路二: 双指针
 * 1.p1和p2分别指向A和B的头节点 ，当遍历到尽头时p1指向B的头节点接着遍历，p2同理
 * 2.当p1和p2相等或同时为空时结束返回节点 
 * 3.先判断下两个链表不存在空链表，存在空链表则一定没相交的节点
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    /**
     * 思路1:
    let set = new Set();
    let node = headA;
    while (node) {
        set.add(node);
        node = node.next;
    }
    node = headB;
    while (node) {
        if (set.has(node)) {
            return node;
        }
        node = node.next;
    }
    return null;
     */
    //思路2:
    if (!headA || !headB) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        if (!pA) {
            pA = headB;
        } else if (!pB) {
            pB = headA;
        } else {
            pA = pA.next;
            pB = pB.next;
        }
    }
    return pA;
};
// @lc code=end

