// // 两个有序的链表合成一个依旧有序的链表
// // 也就是每次对比两个链表的val，小的那个加入到新的链表里，并等于它的next，再继续比较

let {
  generateLink,
  generateArray
} = require('./link');
ListNode = function (val) {
  this.val = val;
  this.next = null;
}
let lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6]
]

lists.map((v, i) => {
  lists[i] = generateLink(v)
})
let list = {
  val: null,
  next: null
}
let link = list
contrast(lists);
let arr = generateArray(list.next)
console.log(arr);

function contrast(lists) {
  if (lists.length == 0) return;
  let len = lists.length;
  let minVal = Infinity;
  let index = 0;
  for (let i = 0; i < len; i++) {
    if (lists[i] && lists[i].val < minVal) {
      minVal = lists[i].val;
      index = i;
    }
  }
  if (minVal != Infinity) {
    link.next = {
      val: minVal,
      next: null
    }
    link = link.next;
  }
  if (lists[index] == null) {
    lists.splice(index)
  } else {
    lists[index] = lists[index].next;
  }
  contrast(lists)
}