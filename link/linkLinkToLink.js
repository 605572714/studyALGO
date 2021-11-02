// 两个有序的链表合成一个依旧有序的链表
// 也就是每次对比两个链表的val，小的那个加入到新的链表里，并等于它的next，再继续比较

let {
  generateLink,
  generateArray
} = require('./link');
ListNode = function (val) {
  this.val = val;
  this.next = null;
}

let a1 = [1, 3, 5];
let a2 = [2, 4, 6];

let l1 = generateLink(a1);
let l2 = generateLink(a2);
let list = {
  val: null,
  next: null
}
let link = list
contrast(l1, l2);
let arr = generateArray(list.next)
console.log(arr);
// 第一步
// 找到l1和l2中小的那一个。将值传入link.next
// 第二步
// l1,l2中小的那个向后排，再对比

function contrast(l1, l2) {
  if (l1.val <= l2.val) {
    link.next = {
      val: l1.val,
      next: null
    };
    link = link.next;
    l1 = l1.next
  } else {
    link.next = {
      val: l2.val,
      next: null
    };
    link = link.next;
    l2 = l2.next
  }
  if (l1 == null) {
    link.next = {
      val: l2.val,
      next: l2.next
    }
  } else if (l2 == null) {
    link.next = {
      val: l1.val,
      next: l1.next
    }
  } else {
    contrast(l1, l2)
  }
}