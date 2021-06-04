/*
 * @lc app=leetcode.cn id=696 lang=javascript
 * 思路一:
 * 遍历数组，在左右不想等的地方中心扩散式查找符合条件的子串，记录
 * 思路二:
 * 把"11000111100"转换成[2,3,4,2],相邻位置符合条件有min{a,b}个，记录
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    /**
     * 思路1:
    let p = 0;
    let res = [];
    while (p < s.length - 1) {
        if (s[p] !== s[p + 1]) {
            let l = p; r = p + 1;
            res.push(s.slice(l, r + 1));
            while (s[l] == s[l - 1] && s[r] === s[r + 1] && l > 0 && r < s.length - 1) {
                l--;
                r++;
                let str = s.slice(l, r + 1);
                res.push(str);
            }
        }
        p++;
    }
    return res.length;
     */
    // 思路2:
    let arr = [], n = 1;
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === s[i + 1]) {
            n++;
        } else {
            arr.push(n);
            n = 1;
        }
    }
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.min(arr[i], arr[i + 1]);
    }
    return sum;
};
// @lc code=end

