/*
 * @lc app=leetcode.cn id=218 lang=javascript
 * 思路：
 * 1. 先把数组转变成[位置,高度]的坐标点数组,如果是左端点，高度存成负值区分。
 * 2. 把数组按照从左到右从低到高的顺序排序。
 * 3. 遍历数组，从左到右扫描，如果是左端点存高度入栈，如果是右端点把高度出栈。
 * 4. 计算当前栈中最大值，如果和前一个点的最大值不相等，则记录该点[位置，最大高度]
 * 5. 如果和前一个最大值相同，继续遍历。
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    let dataArray = [],// 端点数组
        height = [0], // 高度栈
        pre = null,// 前一个最大高度
        res = [];// 结果数组
    for (let i of buildings) {
        dataArray.push([i[0], -i[2]]);// 左端点
        dataArray.push([i[1], i[2]]);// 右端点
    }
    // 按照从左到右，从低到高的顺序排序
    dataArray = dataArray.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    for (let i of dataArray) {
        if (i[1] < 0) {
            //左 端点入栈
            height.push(-i[1]);
        } else {
            // 右端点出栈
            height.splice(height.findIndex(item => item === i[1]), 1);
        }
        // 找出最高值
        let max = Math.max(...height);
        if (pre !== max) {
            // 和前一个最高值不相等，即为拐点，记录
            res.push([i[0], max]);
            // 更新前一个最大值
            pre = max;
        }
    }
    return res;
};
// @lc code=end

