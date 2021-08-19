/*
 * @lc app=leetcode.cn id=146 lang=javascript
 * 思路: map + 双链表
 * 1. 用map存储「key:node」
 * 2. 用双向链表存储node，前边的是使用频繁的。为了防止越界，先做一个伪头和伪尾节点
 * 4. 对于put操作：如果map中有则把node更新并移动到头部，
 *               如果没有，则在头部添加，如果map的size超出，则删除最后的node；
 * 5. 对于get操作：如果map中有则把node移动到头部，返回node的value
 *               如果没有，返回-1
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function LinkNode(key, value, next, prev) {
    this.key = key;
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.fakeHead = new LinkNode("Head", "Head");
    this.fakeTail = new LinkNode("Tail", "Tail");
    this.fakeHead.next = this.fakeTail;
    this.fakeTail.prev = this.fakeHead;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        node = this.map.get(key);
        this.remove(node);
        this.addToHead(node);
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.value = value;
        this.remove(node);
        this.addToHead(node);

    } else {
        let node = new LinkNode(key, value);
        this.addToHead(node);
        this.map.set(key, node);
        if (this.map.size > this.capacity) {
            let node = this.removeLast();
            this.map.delete(node.key);
        }
    }
};
// 节点插入到头部
LRUCache.prototype.addToHead = function (node) {
    this.fakeHead.next.prev = node;
    node.next = this.fakeHead.next;
    node.prev = this.fakeHead;
    this.fakeHead.next = node;
}
// 节点移除
LRUCache.prototype.remove = function (node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
}
LRUCache.prototype.removeLast = function () {
    let prevNode = this.fakeTail.prev;
    prevNode.prev.next = this.fakeTail;
    this.fakeTail.prev = prevNode.prev;
    return prevNode;
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

