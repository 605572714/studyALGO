// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
let {
  generateLink,
  generateArray
} = require('./link');

let arrA = [1, 8, 4, 5]
let arrB = [1, 8, 4, 5]

let headA = generateLink(arrA)
let headB = generateLink(arrB)
var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  console.log(a == b, 111);
  while (a !== b) {
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }
  // return a
  console.log(a == b, 222);
}
// getIntersectionNode(headA, headB);