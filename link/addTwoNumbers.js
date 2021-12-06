// 445. 两数相加 II

// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。



// 示例1：

// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]

// 示例2：

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]

// 示例3：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
let {
  generateLink,
  generateArray,
  ListNode
} = require('./link');



var addTwoNumbers = function (l1, l2) {
  let num1 = "";
  let num2 = "";
  while (l1) {
    num1 += l1.val;
    l1 = l1.next;
  }
  while (l2) {
    num2 += l2.val;
    l2 = l2.next;
  }
  let num = new Number(parseInt(num1))
  console.log(num);
  let sum = (parseInt(num1) + parseInt(num2)).toString();
  console.log(sum);
  // let head = new ListNode(1);
  // let node = head
  // for (let i = 0; i < sum.length; i++) {
  //   node.next = new ListNode(sum[i])
  //   node = node.next
  // }
  // console.log(generateArray(head.next));
};


let arr1 = [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9];
let arr2 = [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9]
[5, 6, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9, 9, 9, 9]
  ;
let link1 = generateLink(arr1);
let link2 = generateLink(arr2);
addTwoNumbers(link1, link2)