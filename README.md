# studyALGO 算法学习
## [从尾到头打印链表](link/reversePrint.js)（2021.11.9）

将每个值传入到数组最前面，递归遍历链表

```javascript
  function reversePrint(head){
  let arr = [];
  //  遍历链表
  while (head) {
    // 去除当前值，放置到数组头部
    arr.unshift(head.val);
    // 链表传递
    head = head.next
  }
  return arr
  }
```

## [返回倒数第 k 个节点](link/kthToLast.js)（2021.11.9）

实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

这是一道快慢指针的题，我们需要两个指针，一个快指针，一个慢指针，
快指针比慢指针多走k步，当快指针走完全程的时候，慢指针刚好走到指定位置

```
输入： 1->2->3->4->5 和 k = 2
输出： 4
```

```javascript
var kthToLast = function (head, k) {
  // 快指针
  let fast = 0;
  // 慢指针
  let slow = 0;
  快指针指向的链表
  let link = head;
  // 如果快指针指向的链表循环完成，则慢指针指向的链表为所求节点
  while (link) {
    // 如果快慢指针间距达到所需距离，慢指针移动
    if (fast - slow == k) {
      head = head.next;
      slow++
    }
    // 快指针移动
    link = link.next;
    fast++;
  }
  // 返回慢指针指向节点值
  return head.val
};
```

## [环形链表](link/hasCycle.js)（2021.11.9）

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

```javascript
var hasCycle = function (head) {
    // // 方法1 JavaScript属性
     try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
    // 方法2 hash表
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true
        } else {
            set.add(head)
        }
        head = head.next
    }
    return false
    // 方法3 快慢指针
    if(!head||!head.next) return false
    let fast = head.next.next;
    let slow = head.next;
    while(fast&&fast.next){
        if(fast==slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false
    // 方法4 污染链表
    while(head){
        if(head.sign) return true;
        head.sign = true;
        head = head.next
    }
    return false
};

```
##