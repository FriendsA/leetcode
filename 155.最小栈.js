/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * 思路: 
 * 1.镜像栈存储当前最小值，镜像栈和栈同时操作进出栈
 * 2.优化不实用额外空间，存入栈的值为包含值和当前最小值的对象
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.stack.length) {
        this.stack.push({ value: val, min: val });
    } else {
        let { min } = this.stack[this.stack.length - 1];
        if (min < val) {
            this.stack.push({ value: val, min });
        } else {
            this.stack.push({ value: val, min: val });
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (!this.stack.length) {
        return 'stack empty'
    }
    let { value } = this.stack.pop();
    return value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!this.stack.length) {
        return 'stack empty'
    }
    let { value } = this.stack[this.stack.length - 1];
    return value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (!this.stack.length) {
        return 'stack empty'
    }
    let { min } = this.stack[this.stack.length - 1];
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

