// 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
let {
  generateLink,
  generateArray
} = require('./link');

let arr = [];
let list = generateLink(arr)

var reverseList = function (head) {
  let link = null
  while (head) {
    let next = head.next;
    head.next = link;
    link = head;
    head = next
  }
  return link
};


reverseList(list)