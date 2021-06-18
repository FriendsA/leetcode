/*
 * @lc app=leetcode.cn id=1095 lang=javascript
 * 思路:
 * 1.先二分法找顶点
 * 2.二分法从左边找，找到返回
 * 3.二分法从右边找，找到返回
 * 4.都找不到返回-1
 * [1095] 山脉数组中查找目标值
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    function findTop() {
        let p1 = 0, p2 = mountainArr.length() - 1, m = (p1 + p2) / 2 | 0, ln, mn, rn;
        while (m >= 0 && m <= mountainArr.length() - 1) {
            ln = mountainArr.get(m - 1), mn = mountainArr.get(m), rn = mountainArr.get(m + 1);
            if (mn > ln && mn > rn) {
                return m;
            }
            if (ln < mn) {
                p1 = m + 1;
            } else {
                p2 = m;
            }
            m = m = (p1 + p2) / 2 | 0;
        }
    }
    // 顶点
    let index = findTop(), leftNode = mountainArr.get(0), rightNode = mountainArr.get(mountainArr.length() - 1), topNode = mountainArr.get(index);
    if (target > topNode) { return -1; }
    if (target < leftNode && target < rightNode) { return -1; }
    let l = 0; r = index; m = (l + r) / 2 | 0;
    //找左边
    while (l <= r) {
        if (mountainArr.get(m) == target) {
            return m;
        }
        if (mountainArr.get(m) > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
        m = (l + r) / 2 | 0;
    }
    l = index; r = mountainArr.length() - 1; m = (l + r) / 2 | 0;
    //找右边
    while (l <= r) {
        if (mountainArr.get(m) == target) {
            return m;
        }
        if (mountainArr.get(m) < target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
        m = (l + r) / 2 | 0;
    }
    return -1;
};
// @lc code=end

