let {
  generateLink,
  generateArray
} = require('./link');

let arr = [1, 2, 3, 4, 5];
let head = generateLink(arr);

var rotateRight = function (head, k) {
  let link = head
  let n = 1
  while (link.next) {
    n++
    link = link.next
  }
  let len = n - k % n

  if (len == n) return head;
  link.next = head
  while (len) {
    link = link.next
    len--
  }
  const res = link.next
  link.next = null
  return res
};

rotateRight(head, 2)