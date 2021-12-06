// 143. 重排链表

// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

// L0 → L1 → … → Ln - 1 → Ln

// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。



// 示例 1：

// 输入：head = [1,2,3,4]
// 输出：[1,4,2,3]

// 示例 2：

// 输入：head = [1,2,3,4,5]
// 输出：[1,5,2,4,3]

let {
  generateLink,
  generateArray,
  ListNode
} = require('./link');


// var reorderList = function (head) {
//   let node = head;
//   let reverseList = null;
//   let len = 0;
//   while (node) {
//     let temp = new ListNode(node.val);
//     temp.next = reverseList;
//     reverseList = temp;
//     node = node.next
//     len++
//   }

//   let newHead = new ListNode(0);
//   let newNode = newHead;
//   for (let i = 0; i < Math.floor(len / 2) + len % 2; i++) {
//     newNode.next = new ListNode(head.val);
//     newNode = newNode.next;
//     if (i != Math.floor(len / 2)) {
//       newNode.next = new ListNode(reverseList.val)
//       newNode = newNode.next;
//       head = head.next;
//       reverseList = reverseList.next
//     }

//   }
//   console.log(generateArray(newHead.next));
//   return newHead.next
// };

// var reorderList = function () {
//   const arr = [];
//   let p;
//   // 将链表的连接断开
//   // 并将链表节点存入数组
//   while (head) {
//     p = head.next;
//     head.next = null;
//     arr.push(head);
//     head = p;
//   }
//   // 定义左右指针
//   let [left, right] = [0, arr.length - 1];
//   while (left < right) {
//     arr[left].next = arr[right];
//     // 防止中间的两个节点成环，加一个判断
//     if (left + 1 !== right) arr[right].next = arr[left + 1];
//     left++;
//     right--;
//   }
//   console.log(arr);
//   return arr[0]
// }
var reorderList = function (head) {
  reorder(head, head)

  function reorder(head, tail) {
    if (!tail) return head;
    let returnNode = new ListNode(reorder(head, tail.next));
    if (!returnNode) return null;
    if (returnNode == tail || returnNode.next == tail) {
      tail.next == null;
      return null
    }
    tail.next = returnNode.next;
    returnNode.next = tail
    return tail.next
  }

}


let arr = [1, 2, 3, 4];
let head = generateLink(arr);
console.log(reorderList(head));