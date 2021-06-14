/*
 * @lc app=leetcode.cn id=739 lang=javascript
 * 思路:
 * 1. 使用一个栈stack来存储带比较的温度，另一个和温度数组等长的数组ans来存储结果。
 * 2. ans全置为0，遍历温度数组，如果栈为空或者当前温度小于栈顶温度，把当前的索引进栈
 * 3. 如果当前温度大于栈顶温度，ans中 栈顶索引的值 为 当前索引-栈顶索引。
 * 4. 栈顶出栈，继续判断是否大于栈顶温度，直到小于栈顶温度再继续遍历
 * 5. 最后返会ans数组
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [], ans = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length === 0) {
            stack.push(i);
            continue;
        }
        let index = stack[stack.length - 1];
        while (temperatures[i] > temperatures[index]) {
            stack.pop();
            ans[index] = i - index;
            index = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return ans;
};
// @lc code=end

