/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * 思路:
 * 1. 遍历字符串，如果是左边的括号入栈
 * 2. 遇到右边的括号，出栈比较，不匹配返回false，匹配继续
 * 3. 最后判断栈是否为空，为空返回true，不为空返回false 
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i of s) {
        if (["(", "[", "{"].includes(i)) {
            stack.push(i);
        } else {
            let str = stack.pop();
            if ((i == "}" && str !== "{") || (i == "]" && str !== "[") || (i == ")" && str !== "(")) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};
// @lc code=end

