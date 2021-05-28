/*
 * @lc app=leetcode.cn id=202 lang=javascript
 * 思路: 快慢指针
 * 1.分别存储每次执行一次和两次的值
 * 2.比较存储的值是否相等，相等返回true
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let slow = trans(n);
    let fast = trans(slow);
    while (slow != fast) {
        slow = trans(slow);
        fast = trans(trans(fast));
    }
    if (slow === 1) {
        return true;
    } else {
        return false;
    }
};

function trans(num) {
    let str = "" + num;
    let sum = 0;
    for (let i of str) {
        sum += (-i) ** 2;
    }
    return sum;
}
// @lc code=end

