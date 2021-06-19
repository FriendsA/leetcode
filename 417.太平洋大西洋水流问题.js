/*
 * @lc app=leetcode.cn id=417 lang=javascript
 * 思路:
 * 1. DFS搜索，从四边形向中间所搜
 * 2. A表示上左可以搜索到的位置，B表示又下可以搜索到的位置
 * 3. A、B中都有的点即为都可以流到的点
 * 4. 搜索某点后，搜索该点前后左右的点
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let m = heights.length, n = heights[0].length, ans = [];
    let A = new Array(m).fill(0).map(i => i = new Array(n).fill(0)),
        B = new Array(m).fill(0).map(i => i = new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        DFS(A, i, 0);
        DFS(B, i, n - 1);
    }

    for (let i = 0; i < n; i++) {
        DFS(A, 0, i);
        DFS(B, m - 1, i);
    }

    return ans;

    function DFS(V, i, j) {
        if (V[i][j]) {
            return;
        }
        V[i][j] = 1;
        if (A[i][j] && B[i][j]) {
            ans.push([i, j]);
        }
        if (i - 1 >= 0 && heights[i - 1][j] >= heights[i][j]) {
            DFS(V, i - 1, j)
        }
        if (i + 1 < m && heights[i + 1][j] >= heights[i][j]) {
            DFS(V, i + 1, j)
        }
        if (j - 1 >= 0 && heights[i][j - 1] >= heights[i][j]) {
            DFS(V, i, j - 1)
        }
        if (j + 1 < n && heights[i][j + 1] >= heights[i][j]) {
            DFS(V, i, j + 1)
        }
    }
};
// @lc code=end

