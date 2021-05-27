/*
 * @lc app=leetcode.cn id=382 lang=javascript
 * 思路:蓄水池抽样算法
 * 1.从链表头开始，遍历，记录总节点数n，每次都取随机值m
 * 2.没遍历一个节点都重新计算随机数，如果 m < 1/n 则保存选中的值，否则使用上次报错的值
 * [382] 链表随机节点
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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
       this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
       let sum = 1, res;
       let point = this.head;
       while (point) {
              let random = Math.random();
              let n = 1 / sum;
              if (random < n) {
                     res = point.val;
              }
              point = point.next;
              sum++;
       }
       return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end

