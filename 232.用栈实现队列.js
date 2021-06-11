/*
 * @lc app=leetcode.cn id=232 lang=javascript
 * 思路:
 * 1.使用两个栈来模拟队列
 * 2.当获取头部数据的时候，把存数据的栈依次出栈存入另一个栈中，另一个栈则是队列前面的部分
 * 3.当两个栈都为空则队列为空
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack = [];
    this.stackRe = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.empty()) {
        return "queue empty";
    }
    if (this.stackRe.length === 0) {
        while (this.stack.length) {
            this.stackRe.push(this.stack.pop());
        }
    }
    return this.stackRe.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.empty()) {
        return "queue empty";
    }
    if (this.stackRe.length === 0) {
        while (this.stack.length) {
            this.stackRe.push(this.stack.pop());
        }
    }
    return this.stackRe[this.stackRe.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length === 0 && this.stackRe.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

