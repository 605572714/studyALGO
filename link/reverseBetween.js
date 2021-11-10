// 92. 反转链表 II
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
let {
  generateLink,
  generateArray
} = require('./link');
ListNode = function (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// var reverseBetween = function (head, left, right) {
//   // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
//   const dummyNode = new ListNode(-1);
//   dummyNode.next = head;

//   let pre = dummyNode;
//   // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
//   // 建议写在 for 循环里，语义清晰
//   for (let i = 0; i < left - 1; i++) {
//     pre = pre.next;
//   }

//   // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
//   let rightNode = pre;
//   for (let i = 0; i < right - left + 1; i++) {
//     rightNode = rightNode.next;
//   }

//   // 第 3 步：切断出一个子链表（截取链表）
//   let leftNode = pre.next;
//   let curr = rightNode.next;

//   // 注意：切断链接
//   pre.next = null;
//   rightNode.next = null;

//   // 第 4 步：同第 206 题，反转链表的子区间
//   reverseLinkedList(leftNode);

//   // 第 5 步：接回到原来的链表中
//   pre.next = rightNode;
//   leftNode.next = curr;
//   return dummyNode.next;
// };
// const reverseLinkedList = (head) => {
//   let pre = null;
//   let cur = head;

//   while (cur) {
//     const next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
// }
function reverseBetween(head, left, right) {
  let dummyNode = new ListNode(-1)
  dummyNode.next = head;
  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; i++) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next
  }
  console.log(dummyNode.next);
}
// var reverseBetween = function (head, left, right) {
//   if (left == 1) return reverseN(head, right);
//   // 这里也是递归的方式解决问题，其实可以for循环走到left节点处
//   // 注意需要对head.next重新赋值，否则链表就断开了。
//   head.next = reverseBetween(head.next, left - 1, right - 1);
//   console.log(head);
//   return head;
// };


// function reverseN(head, n) {
//   // 需要全局存下N+1个节点
//   if (n == 1) {
//     successor = head.next;
//     return head;
//   }
//   let last = reverseN(head.next, n - 1);
//   head.next.next = head;
//   // 和全部反转的区别就在这里，全部反转head就是最后一个节点，head.next=null
//   // 反转前N个节点，头结点的会连上N+1个节点，即head.next=successor
//   head.next = successor;
//   console.log(last);
//   return last;
// }

let arr = [1, 2, 3, 4, 5]
let link = generateLink(arr)

reverseBetween(link, 1, 4);