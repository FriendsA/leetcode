/*
 * @lc app=leetcode.cn id=28 lang=javascript
 * 思路：
 * 1. 循环比较
 * 2. kmp
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    /**
     * 比较
     */
    // if (needle === "") {
    //     return 0;
    // }
    // for (let i = 0; i < haystack.length; i++) {
    //     if (haystack[i] === needle[0]) {
    //         let flag = true;
    //         for (let j = 0; j < needle.length; j++) {
    //             if (needle[j] !== haystack[i + j]) {
    //                 flag = false;
    //                 break;
    //             }
    //         }
    //         if (flag) {
    //             return i
    //         }
    //     }
    // }
    // return -1;

    /**
     * kmp
     */

    if (needle == "") {
        return 0;
    }
    let table = new Array(needle.length).fill(0);
    {
        let i = 1; j = 0;
        while (i < needle.length) {
            if (needle[i] == needle[j]) {
                j++;
                i++;
                table[i] = j;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    i++;
                }
            }
        }
    }
    console.log(table);
    {
        let i = 0; j = 0;
        while (i < haystack.length) {
            if (haystack[i] == needle[j]) {
                i++;
                j++;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    i++;
                }
            }

            if (j === needle.length) {
                return i - j;
            }
        }
    }
    return -1;

};
// @lc code=end

