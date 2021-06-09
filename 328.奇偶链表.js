/*
 * @lc app=leetcode.cn id=328 lang=javascript
 * 思路一:
 * 1.找到尾节点
 * 2.从head开始遍历，把偶数节点加到为节点上，偶数节点的前后链接
 * 3.如果遍历到尾节点则停止遍历
 * 4.注意把最后一个节点的next置为null
 * 思路二:
 * 奇偶分开组合，最后再组合到一起
 * [328] 奇偶链表
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
var oddEvenList = function (head) {
    if (!head) {
        return null;
    }
    /**
     * 思路1：
        let p1 = head;
        while (p1.next) {
            p1 = p1.next;
        }
        let tail = p1;
        let p2 = head;
        let flag = true;
        while (flag && p2.next) {
            if (p2.next === tail || p2.next.next === tail) {
                flag = false;
            }
            p1.next = p2.next;
            p1 = p2.next;
            p2.next = p2.next.next;

            p2 = p2.next;
        }
        p1.next = null;
     */
    //思路2:
    let odd = head,even = head.next,tail = head.next;
    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = tail;
    return head;
};
// @lc code=end

