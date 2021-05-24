/*
 * @lc app=leetcode.cn id=347 lang=javascript
 * 思路一:map+冒泡排序
 * 1. 利用map记录每个元素出现的次数
 * 2. 存到数组里，排序，只拍最大的k个，返回最大的k个即可
 * 思路二:map+小顶堆
 * 1. 利用map记录每个元素出现的次数
 * 2. 利用小顶堆存储k个元素
 * 思路三:map+桶排序
 * 1. 利用map记录每个元素出现的次数
 * 2. 利用桶排序用出现次数作为桶，但是如果出现次数频率相差特别大空间可能会非常浪费
 * 3. 注意：
 *      桶是个数组，可能有多个相同频率的
 *      如果map中元素个数小于等于k，则直接返回map中元素即可
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i of nums) {
        if (map.get(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    //思路一:
    /**
    let arr = [...map];
    for (let i = arr.length - 1; i >= arr.length - k; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j][1] > arr[j + 1][1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr.slice(arr.length - k).map(i => i[0]);
     */
    //思路二:
    
    //思路三:
    if (map.size <= k) {
        return [...map.keys()];
    }
    let res = [];
    for (let [key, value] of map.entries()) {
        if (res[value]) {
            res[value].push(key);
        } else {
            res[value]=[key];
        }
    }
    let result = [];
    while (result.length < k) {
        let temp = res.pop();
        if (temp) {
           result = result.concat(temp);
        }
    }
    return result;
};
// @lc code=end

