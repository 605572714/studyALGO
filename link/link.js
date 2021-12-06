ListNode = function (val, next) {
  this.val = val || null;
  this.next = next || null;
}
exports.ListNode = function (val, next) {
  this.val = val || null;
  this.next = next || null;
}

// array->link
exports.generateLink = function (array) {
  const fakeHead = new ListNode(0);
  let current = fakeHead;

  for (let i = 0; i < array.length; i++) {
    current.next = {
      val: array[i],
      next: null
    };
    current = current.next
  }
  return fakeHead.next
}

exports.generateArray = function (link) {
  let arr = [];
  while (link) {
    arr.push(link.val);
    link = link.next;
  }
  return arr;
}