/*
 * @lc app=leetcode.cn id=697 lang=javascript
 * 思路:
 * 1. 遍历数组，用map存储数字出现的次数，首次出现的位置，最后出现的位置
 * 2. 遍历map, 找到出现最多数字的记录位置差小的。
 * 3. 位置差加1则为最小的距离
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]].num += 1;
            if (map[nums[i]].max < i) {
                map[nums[i]].max = i;
            }
        } else {
            map[nums[i]] = {
                num: 1,
                min: i,
                max: i,
            };
        }
    }
    let max = 0, res = 1, temp;
    for (let item of Object.values(map)) {
        if (item.num > max) {
            max = item.num;
            res = item.max - item.min + 1;
        } else if (item.num === max) {
            temp = item.max - item.min + 1;
            if (temp < res) {
                res = temp;
            }
        }
    }
    return res;
};
// @lc code=end

