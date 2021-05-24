/*
 * @lc app=leetcode.cn id=227 lang=javascript
 * 思路:
 * 1. 先计算乘除，后计算加减，全部转化为加法，用栈存储。
 * 2. 用变量存储上一个符号，用栈来存储数字，遇到乘除弹出数字。
 * 3. 遇到减法存进栈负的数字
 * 4. 栈内元素计算加法
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let opera = "#", d = "", stack = [];
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(+s[i])) {
            d += s[i];
        }
        if (!Number.isInteger(+s[i]) || i === s.length - 1) {
            if (opera === "+") {
                stack.push(d);
            } else if (opera === "-") {
                stack.push(-d);
            } else if (opera === "*") {
                let num = stack.pop();
                let num2 = (+num) * (+d);
                stack.push(num2);
            } else if (opera === "/") {
                let num = stack.pop();
                let num2 = (+num) / (+d) | 0;
                stack.push(num2);
            } else if (opera === "#") {
                stack.push(d);
            }
            opera = s[i];
            d = "";
        }
    }
    let sum = 0;
    for (let i of stack) {
        sum += (+i);
    }
    return sum;
};
// @lc code=end

