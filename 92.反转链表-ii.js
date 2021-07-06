/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * 思路一: 
 * 1. 找到链表中交换的位置，记录需要交换的位置，交换
 * 思路二: 头插法
 * 1. left之后的节点都插入到left的位置，直到插入到right
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    /**
     * 思路1:
    let node = head, first = null, ans = head, i = 1;
    if (!node) {
        return head;
    }
    while (node) {
        if (i === left) {
            break;
        }
        i++;
        first = node;
        node = node.next;
    }
    let p1 = node, last = null, next, j = left;
    while (node) {
        next = node.next;
        node.next = last;
        last = node;
        node = next;
        if (j === right) {
            break;
        }
        j++;
    }
    if (first) {
        first.next = last;
    } else {
        ans = last;
    }
    p1.next = node;
    return ans;
    */
    /**思路二: 头插法 */
    let node1 = head, n = left, font = null;
    while (--n) {
        font = node1;
        node1 = node1.next;
    }
    let temp, cur = node1, last = node1, node = node1.next;
    while (right != left) {
        temp = node.next;
        last.next = temp;
        node.next = cur;
        
        cur = node;
        node = temp;

        right--;
    }
    if (font) {
        font.next = cur;
    } else {
        head = cur;
    }
    return head;
};
// @lc code=end

