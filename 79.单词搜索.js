/*
 * @lc app=leetcode.cn id=79 lang=javascript
 * 思路: 回溯 DFS
 * 1. 用一个相同大小的二维数组matrix保存遍历过的路径，遍历到的点设为0，遍历结束四周的就回溯为1
 * 2. 用depth保存一个遍历深度，用来比较字母是否正确
 * 3. 进一步优化，可以直接修改和回溯board。
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length, n = board[0].length, ans = false;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            DFS(0, i, j);
        }
    }

    function DFS(depth, i, j) {
        if (word[depth] != board[i][j]) {
            return;
        }
        if (depth === word.length - 1) {
            ans = true;
            return;
        }
        board[i][j] = 0;
        if (i - 1 >= 0 && board[i - 1][j]) {
            DFS(depth + 1, i - 1, j);
        }
        if (i + 1 < m && board[i + 1][j]) {
            DFS(depth + 1, i + 1, j);
        }
        if (j - 1 >= 0 && board[i][j - 1]) {
            DFS(depth + 1, i, j - 1);
        }
        if (j + 1 < n && board[i][j + 1]) {
            DFS(depth + 1, i, j + 1);
        }
        board[i][j] = word[depth];
    }
    return ans;
};
// @lc code=end