// 25. K 个一组翻转链表
// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：

//     你可以设计一个只使用常数额外空间的算法来解决此问题吗？
//     你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

// 输入：head = [1,2,3,4,5], k = 2
// // 输出：[2,1,4,3,5]

// 输入：head = [1,2,3,4,5], k = 3
// 输出：[3,2,1,4,5]
let {
  generateLink,
  generateArray
} = require('./link');
ListNode = function (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var reverseKGroup = function (head, k) {
  // 按节点数为k把链表分段，每段翻转，最后一段判断节点长度
  let link = head;
  let n = 0;
  while (link) {
    link = link.next;
    n++
  }
  let m = Math.floor(n / k);
  for (let i = 0; i < m; i++) {
    head = reverseBetween(head, i * k + 1, k)
  }
  console.log(generateArray(head));
  return head
};


var reverseBetween = function (head, left, k) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let prev = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let curr = prev.next;
  for (let i = 0; i < k - 1; i++) {
    const next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next
  }
  return dummyNode.next
}

let arr = [1, 2, 3, 4, 5]
let link = generateLink(arr)


reverseKGroup(link, 2)