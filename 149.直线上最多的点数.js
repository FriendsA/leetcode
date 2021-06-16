/*
 * @lc app=leetcode.cn id=149 lang=javascript
 * 思路:
 * 1. 两层遍历，两个点可以计算斜率(x1-x2)/(y1-y2)，用map存储斜率和斜率上的点，相同斜率map存的点数量加1.
 * 2. 但是如果y1=y2,计算的斜率可能出现正负Infinity不想等的情况，
 * 3. 一种方式是y从i+1开始遍历，判断一下如果y1=y2,则直接map存Infinity
 * 4. 另一种方式就是y遍历除i以外的所有点
 * 5. 小于两个点直接返回点数组长度即可
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points.length <= 2) {
        return points.length;
    }
    let max = 2;
    for (let i = 0; i < points.length; i++) {
        let map = new Map()
        for (let j = i + 1; j < points.length; j++) {
            let temp = (points[i][0] - points[j][0]) / (points[i][1] - points[j][1]);
            if (points[i][1] == points[j][1]){
                temp = Infinity;
            }
            if (map.has(temp)) {
                map.set(temp, map.get(temp) + 1);
                max = Math.max(max, map.get(temp));
            } else {
                map.set(temp, 2);
            }
        }
    }
    return max;
};

// @lc code=end

