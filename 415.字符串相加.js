/*
 * @lc app=leetcode.cn id=415 lang=javascript
 * 思路：
 * 1.从末尾开始依次相加
 * 2.指针移动到首位停止，用一个临时变量存进位
 * 3.最后一位进位不要忘记
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let p1 = num1.length - 1, p2 = num2.length - 1, flag = 0;
    let sum = "";
    while (p1 >= 0 || p2 >= 0) {
        let n1 = n2 = 0;
        if (p1 >= 0) {
            n1 = (+num1[p1]);
            p1--;
        }
        if (p2 >= 0) {
            n2 = (+num2[p2]);
            p2--;
        }
        sum = (n1 + n2 + flag) % 10 + sum;
        flag = (n1 + n2 + flag) / 10 | 0;
    }
    if (flag) {
        sum = "1" + sum;
    }
    return sum;
};
// @lc code=end

