/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * 思路:
 * 1. 控制边界条件，按顺序遍历
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let arr = [];
    let x=0, y=0, xMax = n, yMax = m, xMin = 0, yMin = 1;
    while (arr.length < m * n) {
        while (y < xMax && arr.length < m * n) {
            arr.push(matrix[x][y++]);
        }
        y--;
        x++;
        xMax--;
        while (x < yMax && arr.length < m * n) {
            arr.push(matrix[x++][y]);
        }
        x--;
        y--;
        yMax--;
        while (y >= xMin && arr.length < m * n) {
            arr.push(matrix[x][y--])
        }
        y++;
        x--;
        xMin++;
        while (x >= yMin && arr.length < m * n) {
            arr.push(matrix[x--][y])
        }
        x++;
        y++;
        yMin++;
    }
    return arr;
};
// @lc code=end

