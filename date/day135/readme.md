请定义一个队列并实现函数 `max_value` 得到队列里的最大值，要求函数`max_value`、`push_back` 和 `pop_front` 的**均摊**时间复杂度都是O(1)。

若队列为空，`pop_front` 和 `max_value` 需要返回 -1

示例 1：

```jsx
输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```

**示例 2：**

```
输入:
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```

限制：

- 1 <= `push_back,pop_front,max_value` 的总操作数 <= 10000
- 1 <= value <= 10^5

---

**单调递减的双端队列**

- 维护一个始终递减的队列，这样 `max_value` 的时间复杂度就优化到了 O(1)，直接取第一位即可
- 如何维护？ 我们只需要在插入每一个元素 value 时，从队列尾部依次取出比当前元素 value 小的元素，直到遇到一个比当前元素大的元素 value' 即可。
- `pop_front` 方面
    - 如果原队列要弹出的元素正好是单调队列中的队头，那也要弹出
    - 如果弹出的元素不是单调队列头部，那不用管了，因为 max_value 的 API 只跟队头有关，只要队头元素不要在已经被移出原队列的基础上，还存在单调队列里就行

上面的过程保证了只要在元素 value 被插入之前队列递减，那么在 value 被插入之后队列依然递减。

而队列的初始状态（空队列）符合单调递减的定义。

由数学归纳法可知队列将会始终保持单调递减。

```jsx
var MaxQueue = function() {
    this.queue = []; // 用一个正常数组存取每次 push 进来的元素
    this.maxQueue = []; // 该队列专门为了简化 max_value 这个 API，称它为单调递减队列
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.maxQueue.length ? this.maxQueue[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value); // 正常压入该队列，然后下面维护另一个单调递减队列
    console.log(this.queue);
    // 队尾开始遍历，遇到值比 value 小的就弹出，维护单调递减队列
    while(this.maxQueue.length && this.maxQueue[this.maxQueue.length - 1] < value) {
        this.maxQueue.pop();
    }
    this.maxQueue.push(value);
    console.log(this.maxQueue);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queue.length) return -1;

    const val = this.queue.shift(); // 该队列由于是正常存放所有压入数组的队列，正常弹出即可
    // 如果弹出的元素正好是单调队列中的队头，那也要弹出，如果弹出的元素不是单调队列头部，那不用管了hh，因为 max_value 的API 只跟队头有关，只要队头元素不要在已经被移出原队列的基础上，还存在单调队列里就行
    if(this.maxQueue[0] === val) {
        this.maxQueue.shift();
    }

    return val;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```

**复杂度**

- 时间复杂度：O(1)（插入，删除，求最大值）
    - 删除操作于求最大值操作显然只需要 O(1) 的时间。
    - 而插入操作虽然看起来有循环，做一个插入操作时最多可能会有 n 次出队操作。但要注意，由于每个数字只会出队一次，因此对于所有的 n 个数字的插入过程，对应的所有出队操作也不会大于 n 次。因此将出队的时间均摊到每个插入操作上，时间复杂度为 O(1)。
- 空间复杂度：O(n)，需要用队列存储所有插入的元素。