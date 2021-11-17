// 1721. 交换链表中的节点

// 给你链表的头节点 head 和一个整数 k 。

// 交换 链表正数第 k 个节点和倒数第 k 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。



// 示例 1：

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[1,4,3,2,5]

// 示例 2：

// 输入：head = [7,9,6,6,7,8,3,0,9,5], k = 5
// 输出：[7,9,6,6,8,7,3,0,9,5]

// 示例 3：

// 输入：head = [1], k = 1
// 输出：[1]

// 示例 4：

// 输入：head = [1,2], k = 1
// 输出：[2,1]

// 示例 5：

// 输入：head = [1,2,3], k = 2
// 输出：[1,2,3]
let {
  generateLink,
  generateArray
} = require('./link');


var swapNodes = function (head, k) {
  let dummy = head;
  let fast = head;
  let slow = head;
  let count = 1;
  while (dummy.next != null) {
    if (count < k) {
      fast = fast.next
    } else {
      slow = slow.next
    }
    count++
    dummy = dummy.next
  }
  const temp = fast.val;
  fast.val = slow.val;
  slow.val = temp;
  return head
};


let arr = [1, 2, 3, 4, 5]
let head = generateLink(arr);
head = swapNodes(head, 2)
console.log(generateArray(head));