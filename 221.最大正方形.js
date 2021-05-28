/*
 * @lc app=leetcode.cn id=221 lang=javascript
 * 思路一:暴力破解
 * 1.遍历数组，遇到1则判断 右和下是否为1
 * 2.都为1 判断正方形内部是否都为1
 * 3.有0 则接着遍历
 * 4.保存最正方形的面积
 * 思路二:动态规划
 * 1.最优子结构：dp[i][j] 表示以该点为右下角的最大正方形的边长
 * 2.状态转移方程:如果 matrix[i][j]等于0为dp[i][j]为0
 * 3.matrix[i][j]等于1时 dp[i][j] = min(dp[i-1][j],dp[i][j],dp[i][j-1])+1
 * 4.边界条件:dp[0][j] dp[i][0] 为1都是1 0则是0
 * 5.优化一下可以使用dp[j]一维数组，注意保存dp[i-1][j-1]位置的值
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let max = 0;
    let width = matrix[0].length;
    let height = matrix.length;
    /**
     * 思路一:
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] == "1") {
                let w = i, h = j;
                while (w < height && h < width && matrix[w][j] == "1" && matrix[i][h] == "1") {
                    let flag = check(matrix, i, j, w, h);
                    if (flag) {
                        max = Math.max(max, (w - i + 1) ** 2);
                        w++;
                        h++;
                    } else {
                        break;
                    }
                }
            }
        }
    }
     */

    //思路二:
    let dp = Array.from({ length: height }).fill(0), temp, preTemp;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            temp = dp[j];
            if (i === 0 || j === 0) {
                dp[j] = matrix[i][j] == "1" ? 1 : 0;
            } else if (matrix[i][j] == "1") {
                dp[j] = Math.min(dp[j], dp[j - 1], preTemp) + 1;
            } else {
                dp[j] = 0;
            }
            max = Math.max(max, dp[j]);
            preTemp = temp;
        }
    }
    return max ** 2;
};
// 检查行列是否全部为1
function check(matrix, mini, minj, maxi, maxj) {
    for (let j = minj; j <= maxj; j++) {
        if (matrix[maxi][j] == "0") {
            return false;
        }
    }
    for (let i = mini; i <= maxi; i++) {
        if (matrix[i][maxj] == "0") {
            return false;
        }
    }
    return true;
}
// @lc code=end

