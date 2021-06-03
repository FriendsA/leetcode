/*
 * @lc app=leetcode.cn id=205 lang=javascript
 * 思路:
 * 1.利用map一边存储映射一边遍历，如果和映射不符则返回false
 * 2.分别遍历s->t t->s 的映射
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i])) {
            if (t[i] !== map.get(s[i])) {
                return false;
            }
        } else {
            map.set(s[i], t[i]);
        }
    }
    map.clear();
    for (let i = 0; i < t.length; i++) {
        if (map.get(t[i])) {
            if (s[i] !== map.get(t[i])) {
                return false;
            }
        } else {
            map.set(t[i], s[i]);
        }
    }
    return true;
};
// @lc code=end

