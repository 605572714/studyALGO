// 141. 环形链表
// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 如果链表中存在环，则返回 true 。 否则，返回 false 。

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

var hasCycle = function (head) {
  // // 方法1 JavaScript属性
  //  try {
  //     JSON.stringify(head)
  // } catch{
  //     return true
  // }
  // return false
  // 方法2 hash表
  // let set = new Set();
  // while (head) {
  //     if (set.has(head)) {
  //         return true
  //     } else {
  //         set.add(head)
  //     }
  //     head = head.next
  // }
  // return false
  // 方法3 快慢指针
  if (!head || !head.next) return false
  let fast = head.next.next;
  let slow = head.next;
  while (fast && fast.next) {
    if (fast == slow) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false
  // 方法4 污染链表
  // while(head){
  //     if(head.sign) return true;
  //     head.sign = true;
  //     head = head.next
  // }
  // return false
};