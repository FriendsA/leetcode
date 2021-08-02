/*
 * @lc app=leetcode.cn id=402 lang=javascript
 * 思路:
 * 思路:
 * 1. 从前往后找出i>i+1的位置去掉位置i的数，如果小于k的则是升序数列，剩下的从后往前去掉即可，每删除一次重新遍历。最后去掉前导0
 * 2. 优化执行次数：利用栈来缓存数据，每次删除一位后再从栈中弹出一个比较
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    for (let i of num) {
        if (stack.length == 0) {
            stack.push(i);
            continue;
        }
        let top = stack[stack.length - 1];
        while (i < top && k) {
            stack.pop();
            k--;
            if (stack.length == 0) {
                break;
            } else {
                top = stack[stack.length - 1];
            }
        }
        stack.push(i);
    }
    while (k--) {
        stack.pop();
    }
    while (stack[0] == 0) {
        stack.shift();
    }
    return stack.join("") || "0";
};
// @lc code=end

