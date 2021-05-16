/*
 * @lc app=leetcode.cn id=1234 lang=javascript
 * 思路1: (每次都循环字符串太浪费性能，最后一个案例超时了)
 * 1.计算多余需要替换的字符串的个数
 * 2.双指针滑动窗口，右指针移动找到包含的子串，记录最短子串长度和坐标
 * 3.左指针移动直到不包含的子串，每次移动记录最短子串长度和坐标
 * 4.右指针循环到头，做指针循环到不包含停止
 * 思路2:
 * 1.统计所有字符的个数
 * 2.双指针移动窗口，右指针每次移动，相应字符减一，直到所有字符小于等于平均字符
 * 3.收缩左指针，记录最小值
 * 4.右指针玄幻到头，循环结束
 * [1234] 替换子串得到平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
    /** 
    let map = {
        "Q": 0,
        "W": 0,
        "E": 0,
        "R": 0,
    };
    for (let i of s) {
        map[i]++;
    }
    for (let i of ["Q", "W", "E", "R"]) {
        if (map[i] > s.length / 4) {
            map[i] = map[i] - s.length / 4;
        } else {
            Reflect.deleteProperty(map, i);
        }
    }

    if (JSON.stringify(map) === "{}") {
        return 0;
    }

    function catchStr(str) {
        let temp = Object.assign({}, map);
        for (let i of str) {
            if (temp[i]) {
                temp[i]--;
            }
        }
        for (let i in temp) {
            if (temp[i] > 0) {
                return false;
            }
        }
        return true;
    }

    let r = 0;
    let ans = Infinity;
    let str = [];
    while (r < s.length) {
        str.push(s[r]);
        if (catchStr(str)) {
            ans = Math.min(ans, str.length);
            str.shift();
            while (catchStr(str)) {
                ans = Math.min(ans, str.length);
                str.shift();
            }
        }
        r++;
    }
    return ans;
    */

    let map = { "Q": 0, "W": 0, "E": 0, "R": 0 };
    let ave = s.length / 4;
    let ans = Infinity;
    for (let i of s) {
        map[i]++;
    }
    if (map["Q"] == ave && map["W"] == ave && map["E"] == ave && map["R"] == ave) {
        return 0;
    }
    let r = l = 0;
    while (r < s.length) {
        map[s[r]]--;
        while (map["Q"] <= ave && map["W"] <= ave && map["E"] <= ave && map["R"] <= ave) {
            ans = Math.min(ans, s.length - map["Q"] - map["W"] - map["E"] - map["R"]);
            map[s[l]]++;
            l++;
        }
        r++;
    }
    return ans;
};
// @lc code=end

