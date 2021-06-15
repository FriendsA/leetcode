/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * 思路:
 * 1. 滑动窗口，不包含则向右指针移动，包含则左指针移动，直到右指针越界停止。
 * 2. 包含时对比记录最小值
 * 3. 关于是否包含的对比方法，用一个map记录t的元素及个数(防止重复)，用一个num记录当前字符串包含的字母种类的数量。
 * 4. 如果右指针移动了，对比右指针指向的元素是否在map中，map的对应元素减1，如果减到0则num减1。
 * 5. 如果num为0则当前指针对应的字符串满足条件了，左指针移动。
 * 6. 如果左指针对应的元素在map中，map的对应元素加1，如果大于1则num加1。继续移动右指针。
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = { num: 0 };
    for (let i of t) {
        if (map[i]) {
            map[i] += 1;
        } else {
            map[i] = 1;
            map.num++;
        }
    }
    let l = r = 0; min = "";
    while (r < s.length) {
        let temp = s[r];
        if (map[temp] !== undefined) {
            map[temp] -= 1;
            if (map[temp] === 0) {
                map.num -= 1;
            }
        }
        while (map.num === 0) {
            let str = s.slice(l, r + 1);
            if (min) {
                min = str.length < min.length ? str : min;
            } else {
                min = str;
            }
            temp = s[l];
            if (map[temp] !== undefined) {
                map[temp] += 1;
                if (map[temp] > 0) {
                    map.num += 1;
                }
            }
            l++;
        }
        r++;
    }
    return min;
};
// @lc code=end

