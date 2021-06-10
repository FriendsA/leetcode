/*
 * @lc app=leetcode.cn id=240 lang=javascript
 * 思路:
 * 1.从左上角或右下角开始查找
 * 2.对于从右上角开始， 小于目标值往下，大于目标值往左
 * 
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    //思路1:
    let j = matrix[0].length - 1, i = 0;
    let len = matrix.length;
    while (j >= 0 && i < len) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }

    }
    return false;
};
// @lc code=end

