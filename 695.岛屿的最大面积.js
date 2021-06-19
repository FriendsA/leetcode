/*
 * @lc app=leetcode.cn id=695 lang=javascript
 * 思路: DFS
 * 1.该点的面积n默认为1，该点的面积n等与n和四周的和，DFS返回该点的面积。
 * 2.遍历一个点就把该点置为0，防止重复遍历。
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let m = grid.length, n = grid[0].length, max = 0; stack = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, DFS(i, j));
        }
    }
    return max;

    function DFS(i, j) {
        if (grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = 0;
        let num = 1;
        if (i - 1 >= 0 && grid[i - 1][j]) {
            num += DFS(i - 1, j);
        }
        if (i + 1 < m && grid[i + 1][j]) {
            num += DFS(i + 1, j);
        }
        if (j - 1 >= 0 && grid[i][j - 1]) {
            num += DFS(i, j - 1);
        }
        if (j + 1 < n && grid[i][j + 1]) {
            num += DFS(i, j + 1);
        }
        return num;
    }
};
// @lc code=end