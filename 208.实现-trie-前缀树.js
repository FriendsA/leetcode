/*
 * @lc app=leetcode.cn id=208 lang=javascript
 * 思路:
 * 1. 用map或者对象存储树行结构,在单词的末尾的节点多加一个end节点标识单词的结尾
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.dictionary = new Map();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let m = this.dictionary;
    for (let i of word) {
        if (!m.has(i)) {
            m.set(i, new Map());
        }
        m = m.get(i);
    }
    m.set("EOF", true);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let m = this.dictionary;
    for (let i of word) {
        if (!m.has(i)) {
            return false;
        }
        m = m.get(i);
    }
    if (m.has("EOF")) {
        return true;
    } else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let m = this.dictionary;
    for (let i of prefix) {
        if (!m.has(i)) {
            return false;
        }
        m = m.get(i);
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

