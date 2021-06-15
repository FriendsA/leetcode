/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *  思路:
 *  1.两两合并然后递归调用，直到合并成一个数组
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    let newList = [];
    for (let i = 0; i < lists.length; i = i + 2) {
        newList.push(mergeListTwo(lists[i], lists[i + 1]));
    }
    return mergeKLists(newList);
};

function mergeListTwo(aHead, bHead) {
    let Head = new ListNode();
    let node = Head;
    while (aHead && bHead) {
        if (aHead.val < bHead.val) {
            node.next = aHead;
            aHead = aHead.next;
        } else {
            node.next = bHead;
            bHead = bHead.next;
        }
        node = node.next;
    }
    node.next = bHead ? bHead : aHead;
    return Head.next;
}
// @lc code=end

