// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 输入：head = [1,3,2]
// 输出：[2,3,1]
let {
  generateLink,
  generateArray
} = require('./link');

var reversePrint = function (head) {
  let arr = [];
  //  遍历链表
  while (head) {
    // 去除当前值，放置到数组头部
    arr.unshift(head.val);
    // 链表传递
    head = head.next
  }
  return arr
};

let arr = [1, 3, 2]

let head = generateLink(arr)

console.log(reversePrint(head));