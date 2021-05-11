/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = [];
    let array = nums.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === array[j - 1]) {
                continue;
            }
            let k = j + 1, l = array.length - 1;
            while (k < l) {
                let sum = array[i] + array[j] + array[k] + array[l];
                if (sum === target) {
                    
                    while (array[k] === array[k + 1]) {
                        k++;
                    }
                    while (array[l] === array[l - 1]) {
                        l--;
                    }
                    result.push([array[i], array[j], array[k], array[l]])
                    k++;
                    l--;
                } else if (sum < 0) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }
    return result;
};
// @lc code=end