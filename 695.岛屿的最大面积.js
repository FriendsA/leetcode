/*
 * @lc app=leetcode.cn id=695 lang=javascript
 * 思路一: DFS 递归
 * 1.该点的面积n默认为1，该点的面积n等与n和四周的和，DFS返回该点的面积。
 * 2.遍历一个点就把该点置为0，防止重复遍历。
 * 思路二: DFS 栈
 * 1.利用栈来记录扫描的点，扫到的点进栈。当栈不为空时，出栈置为0，继续扫描，直到栈为空。
 * 2.出栈一个点就记录面积+1。
 * 思路三: BFS 队列
 * 1. 把栈换成队列，每次从队首弹出点继续扫描即是广度优先遍历。
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let m = grid.length, n = grid[0].length, max = 0;
    // 思路2，3使用的栈
    let stack = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            /**
             *  思路1: 深度遍历 递归
                max = Math.max(max, DFS(i, j));
             */
            /**
             *  思路2: 深度遍历 栈
             *  DFS2(i, j)
             */
            /**
             *  思路3: 广度遍历 队列
             */
            BFS(i, j)
        }
    }
    return max;

    function DFS2(i, j) {
        if (!grid[i][j]) {
            return;
        }
        stack.push({ i, j });
        grid[i][j] = 0;
        let num = 0;
        while (stack.length) {
            let { i, j } = stack.pop();
            num += 1;
            if (i - 1 >= 0 && grid[i - 1][j]) {
                stack.push({ i: i - 1, j });
                grid[i - 1][j] = 0;
            }
            if (i + 1 < m && grid[i + 1][j]) {
                stack.push({ i: i + 1, j });
                grid[i + 1][j] = 0;
            }
            if (j - 1 >= 0 && grid[i][j - 1]) {
                stack.push({ i, j: j - 1 });
                grid[i][j - 1] = 0;
            }
            if (j + 1 < n && grid[i][j + 1]) {
                stack.push({ i, j: j + 1 });
                grid[i][j + 1] = 0;
            }
        }
        max = Math.max(max, num);
    }

    function BFS(i, j) {
        if (!grid[i][j]) {
            return;
        }
        stack.push({ i, j });
        grid[i][j] = 0;
        let num = 0;
        while (stack.length) {
            let { i, j } = stack.shift();
            num += 1;
            if (i - 1 >= 0 && grid[i - 1][j]) {
                stack.push({ i: i - 1, j });
                grid[i - 1][j] = 0;
            }
            if (i + 1 < m && grid[i + 1][j]) {
                stack.push({ i: i + 1, j });
                grid[i + 1][j] = 0;
            }
            if (j - 1 >= 0 && grid[i][j - 1]) {
                stack.push({ i, j: j - 1 });
                grid[i][j - 1] = 0;
            }
            if (j + 1 < n && grid[i][j + 1]) {
                stack.push({ i, j: j + 1 });
                grid[i][j + 1] = 0;
            }
        }
        max = Math.max(max, num);
    }

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

let m = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
]

maxAreaOfIsland(m);