let {
  generateLink,
  generateArray
} = require('./link');


var ListNode = function (val, next) {
  this.val = val || null;
  this.next = next || null
}

var MyLinkedList = function () {
  this.length = 0;
  this.head = new ListNode(0)
};



/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length) return -1;
  let newHead = this.head.next;
  for (let i = 0; i < index; i++) {
    newHead = newHead.next
  }
  return newHead.val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newHead = new ListNode(val);
  let temp = this.head.next;
  newHead.next = temp;
  this.head.next = newHead;
  this.length++
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newHead = this.head.next;
  if (this.length == 0) {
    this.head.next = new ListNode(val)
  } else {
    while (newHead.next) {
      newHead = newHead.next;
    }
    newHead.next = new ListNode(val);
  }
  this.length++

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) return null
  if (index == 0) this.addAtHead(val)
  else if (index == this.length) this.addAtTail(val);
  else {
    let newHead = this.head;
    for (let i = 0; i < index; i++) {
      newHead = newHead.next;
    }
    let temp = newHead.next;
    newHead.next = new ListNode(val)
    newHead.next.next = temp;
    this.length++
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.length - 1) return null;
  let newHead = this.head;
  for (let i = 0; i < index; i++) {
    newHead = newHead.next;
  }
  newHead.next = newHead.next.next
  this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(3, 2)
console.log(generateArray(obj.head.next), obj.length);