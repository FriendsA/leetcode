/*
 * @lc app=leetcode.cn id=332 lang=javascript
 * 思路一: DFS遍历
 * 1. map存图，存的目的地按大小排序
 * 2. DFS遍历图，直到遍历到一种方式遍历了所有节点
 * 思路二: 欧拉路径
 * 1. map存图，存的目的地按大小排序
 * 2. hierholzer 算法 (递归存栈)
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let map = new Map();
    for (let i of tickets) {
        if (map.has(i[0])) {
            let arr = map.get(i[0]);
            arr = add(arr, i[1]);
            map.set(i[0], arr);
        } else {
            map.set(i[0], [i[1]]);
        }
    }
    function add(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (item < arr[i]) {
                arr.splice(i, 0, item);
                return arr;
            }
        }
        arr.push(item);
        return arr;
    }
    let res = [];
    /**
     * 思路1:
    //DFS
    res.push("JFK");
    function DFS(city, t) {
        if (t === tickets.length) {
            return true;
        }
        let array = map.get(city);
        if (!array || array.length === 0) {
            return false;
        }
        for (let i = 0; i < array.length; i++) {
            let nextCity = array[i];
            res.push(nextCity);
            array.splice(i, 1);
            if (DFS(nextCity, t + 1)) {
                return true;
            } else {
                res.pop();
                array.splice(i, 0, nextCity);
            }
        }

    }
    DFS("JFK", 0);
    */
    // 思路2:
    function HH(city) {
        let nextCity = map.get(city);
        while (nextCity && nextCity.length) {
            let next = nextCity.shift();
            HH(next);
        }
        res.unshift(city);
    }
    HH("JFK");
    return res;
};
// @lc code=end

