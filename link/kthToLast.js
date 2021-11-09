// 返回倒数第 k 个节点
// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
// 注意：本题相对原题稍作改动
// 输入： 1->2->3->4->5 和 k = 2
// 输出： 4

// 这是一道快慢指针的题，我们需要两个指针，一个快指针，一个慢指针，
// 快指针比慢指针多走k步，当快指针走完全程的时候，慢指针刚好走到指定位置

let {
  generateLink,
  generateArray
} = require('./link');

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