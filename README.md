# studyALGO 算法学习
## [从尾到头打印链表](link/reversePrint.js)（2021.11.9）

将每个值传入到数组最前面，递归遍历链表

```javascript
  function reversePrint(head){
  let arr = [];
  //  遍历链表
  while (head) {
    // 去除当前值，放置到数组头部
    arr.unshift(head.val);
    // 链表传递
    head = head.next
  }
  return arr
  }
```

## [返回倒数第 k 个节点](link/kthToLast.js)（2021.11.9）

实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

这是一道快慢指针的题，我们需要两个指针，一个快指针，一个慢指针，
快指针比慢指针多走k步，当快指针走完全程的时候，慢指针刚好走到指定位置

```
输入： 1->2->3->4->5 和 k = 2
输出： 4
```

```javascript
var kthToLast = function (head, k) {
  // 快指针
  let fast = 0;
  // 慢指针
  let slow = 0;
  快指针指向的链表
  let link = head;
  // 如果快指针指向的链表循环完成，则慢指针指向的链表为所求节点
  while (link) {
    // 如果快慢指针间距达到所需距离，慢指针移动
    if (fast - slow == k) {
      head = head.next;
      slow++
    }
    // 快指针移动
    link = link.next;
    fast++;
  }
  // 返回慢指针指向节点值
  return head.val
};
```

## [环形链表](link/hasCycle.js)（2021.11.9）

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

```javascript
var hasCycle = function (head) {
    // // 方法1 JavaScript属性
     try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
    // 方法2 hash表
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true
        } else {
            set.add(head)
        }
        head = head.next
    }
    return false
    // 方法3 快慢指针
    if(!head||!head.next) return false
    let fast = head.next.next;
    let slow = head.next;
    while(fast&&fast.next){
        if(fast==slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false
    // 方法4 污染链表
    while(head){
        if(head.sign) return true;
        head.sign = true;
        head = head.next
    }
    return false
};

```
##
第二周第1套：[排序算法](https://www.notion.so/d608f93254ea4c478ed32870b797b9d4)：[https://juejin.cn/post/7025641610079633439](https://juejin.cn/post/7025641610079633439)

---

第二周第2套算法题来啦~依旧限时两天！
[好的]话不多说开始吧！
[反转链表](https://www.notion.so/be3c2337fef94408be9698b960535dcd)：[https://juejin.cn/post/7026777904570712095](https://juejin.cn/post/7026777904570712095)

[链表相交](https://www.notion.so/be3c2337fef94408be9698b960535dcd)：[https://juejin.cn/post/7026777904570712095](https://juejin.cn/post/7026777904570712095)

[旋转链表](https://www.notion.so/be3c2337fef94408be9698b960535dcd)：[https://juejin.cn/post/7026777904570712095](https://juejin.cn/post/7026777904570712095)

[数据流中的第 K 大元素](https://www.notion.so/be3c2337fef94408be9698b960535dcd)：[https://juejin.cn/post/7026777904570712095](https://juejin.cn/post/7026777904570712095)

[翻转二叉树](https://www.notion.so/be3c2337fef94408be9698b960535dcd)：[https://juejin.cn/post/7026777904570712095](https://juejin.cn/post/7026777904570712095)

这次咱们直接LeetCode刷啦
收到小小回复个1，就开始刷题8⃣️！

---

本周的第三套题提前给到咱们啦，前两套做完就开刷吧
周一记得分享你的产出哦[奸笑]

1. [平衡二叉树](https://www.notion.so/4fa9d7b1cdeb48f695d1427a0ed5ed48)：[https://juejin.cn/post/7028128074382180365](https://juejin.cn/post/7028128074382180365)
2. [二叉树的深度](https://www.notion.so/98c33ab292124c14b4f07c2fac5687d4)：[https://juejin.cn/post/7028194493606297636](https://juejin.cn/post/7028194493606297636)
3. [搜索插入位置](https://www.notion.so/6bb145114b164f31ab47ede0b6ef7e15)：[https://juejin.cn/post/7028221352305754143](https://juejin.cn/post/7028221352305754143)
4. [罗马数字转整数](https://www.notion.so/13-6fe0fe8d9cad47e29ab9d6b3f3e25712) [https://juejin.cn/post/7035877983638257672/](https://juejin.cn/post/7035877983638257672/)
5. [反转字符串](https://www.notion.so/344-78e6ecec427343e1bed7a764cf89638d) [https://juejin.cn/post/7035879753970089998/](https://juejin.cn/post/7035879753970089998/)

---

本周第一套题可以开始刷啦[OK]

1. [从尾到头打印链表](https://www.notion.so/Offer-06-5a0a3dc0ccb34dc18389faae98ce4c8f) [https://juejin.cn/post/7035883181148471333/](https://juejin.cn/post/7035883181148471333/)
2. [返回倒数第 k 个节点](https://www.notion.so/ddc018dcb7e04e1380747c0e5726aaae) [](https://juejin.cn/post/7028457380941660168)：[https://juejin.cn/post/7028457380941660168](https://juejin.cn/post/7028457380941660168)
3. [环形链表](https://www.notion.so/ddc018dcb7e04e1380747c0e5726aaae) [https://juejin.cn/post/7028457380941660168](https://juejin.cn/post/7028457380941660168)
4. [K 个一组翻转链表](https://www.notion.so/K-00cdd610205341f884a3efd5e34452db) [https://juejin.cn/post/7028831612133457950](https://juejin.cn/post/7028831612133457950)
5. [只出现一次的数字](https://www.notion.so/Offer-II-004-66cec4425bac491eb6f3948482655f18) [https://juejin.cn/post/7035900731018182664/](https://juejin.cn/post/7035900731018182664/)

---

滴滴，本周第二套算法题已出！
第6期算法题：
两数平方和：[https://leetcode-cn.com/problems/sum-of-square-numbers/description/](https://leetcode-cn.com/problems/sum-of-square-numbers/description/)
二路归并排序：[https://leetcode-cn.com/problems/sort-an-array/](https://leetcode-cn.com/problems/sort-an-array/)
二分查找：[https://leetcode-cn.com/problems/binary-search](https://leetcode-cn.com/problems/binary-search)
哈希_两数之和：[https://leetcode-cn.com/problems/two-sum/](https://leetcode-cn.com/problems/two-sum/)
最长递增子序列：[https://leetcode-cn.com/problems/longest-increasing-subsequence](https://leetcode-cn.com/problems/longest-increasing-subsequence)

两天一套，持续输出👍

---

本周第三套算法题出炉！
第7期：
桶排序：[https://leetcode-cn.com/problems/top-k-frequent-elements/description/](https://leetcode-cn.com/problems/top-k-frequent-elements/description/)
快乐数：[https://leetcode-cn.com/problems/happy-number/](https://leetcode-cn.com/problems/happy-number/)
两节点的最长路径：[https://leetcode.com/problems/diameter-of-binary-tree/description/](https://leetcode.com/problems/diameter-of-binary-tree/description/)
两个字符串包含的字符是否完全相同：[https://leetcode-cn.com/problems/valid-anagram/description/](https://leetcode-cn.com/problems/valid-anagram/description/)
计算一组字符集合可以组成的回文字符串的最大长度：[https://leetcode-cn.com/problems/longest-palindrome/description/](https://leetcode-cn.com/problems/longest-palindrome/description/)

---

晚好~本周第一套算法，它来了~
第8套算法题：
最长公共子序列：[https://leetcode-cn.com/problems/qJnOS7/](https://leetcode-cn.com/problems/qJnOS7/)
买卖股票的最佳时机：[https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock)
使用最小花费爬楼梯：[https://leetcode-cn.com/problems/min-cost-climbing-stairs/](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)
翻转树：[https://leetcode.com/problems/invert-binary-tree/description/](https://leetcode.com/problems/invert-binary-tree/description/)
回文子字符串个数：[https://leetcode-cn.com/problems/palindromic-substrings/description/](https://leetcode-cn.com/problems/palindromic-substrings/description/)

---

一三五算法刷题日！
今日更新第九套：
[链表中倒数第k个节点](https://www.notion.so/Offer-22-k-ef4f19cd04ea43b3ad3bae311eb088da)：[https://juejin.cn/post/7031536777353510943](https://juejin.cn/post/7031536777353510943)
[复制带随机指针的链表](https://www.notion.so/138-8a716e48afc749e39f7f9a74fb74f613)：
[交换链表中的节点](https://www.notion.so/1721-f09be826843745e68e8cc02fea33cdb7)：
[两两交换链表中的节点](https://www.notion.so/24-c0f7ef636b3f4b8397926642f7d4476c)：
合并 k 个升序链表 ：[https://leetcode-cn.com/problems/merge-k-sorted-lists/](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

---

久等啦，第十套算法题，开肝！
[二叉树的后序遍历](https://www.notion.so/145-41c41bb5eff948cf9e758e42d03df089) [https://juejin.cn/post/7033686144936050695](https://juejin.cn/post/7033686144936050695)
[验证二叉树的前序序列化](https://www.notion.so/331-4c511c03dfa041408958d83a01c93094) [https://juejin.cn/post/7034424090647592967](https://juejin.cn/post/7034424090647592967)
[基本计算器 II](https://www.notion.so/227-II-59dea823fb7d41dc8d01fad5d7200ff8) [https://juejin.cn/post/7031924850499584037](https://juejin.cn/post/7031924850499584037)
[函数的独占时间](https://www.notion.so/636-7c8b91c27a3d4d599fd09deaab1ce371) [https://juejin.cn/post/7034146195601801229](https://juejin.cn/post/7034146195601801229)
表现良好的最长时间段 [https://leetcode-cn.com/problems/longest-well-performing-interval](https://leetcode-cn.com/problems/longest-well-performing-interval)”

---

第十一套算法题，坚持！（这次加了一道题哦）
环形链表 II [https://leetcode-cn.com/problems/linked-list-cycle-ii](https://leetcode-cn.com/problems/linked-list-cycle-ii)
反转链表 [https://leetcode-cn.com/problems/reverse-linked-list](https://leetcode-cn.com/problems/reverse-linked-list)
反转链表 II [https://leetcode-cn.com/problems/reverse-linked-list-ii](https://leetcode-cn.com/problems/reverse-linked-list-ii)
删除链表的倒数第 N 个结点 [https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list)
删除排序链表中的重复元素 [https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list)
删除排序链表中的重复元素 II [https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii)

---

周五来活啦！
五道算法，LeetCode开整
1、[分隔链表](https://www.notion.so/86-d217e4ccca4741a6bc24c4ca5c836a55) [https://juejin.cn/post/7035599878088556557](https://juejin.cn/post/7035599878088556557)
2、[设计循环队列](https://www.notion.so/622-81605a41f7c94234adabf85846aef30a) [https://juejin.cn/post/7035617154338652196/](https://juejin.cn/post/7035617154338652196/)
3、设计循环双端队列 [https://leetcode-cn.com/problems/design-circular-deque](https://leetcode-cn.com/problems/design-circular-deque)
4、设计前中后队列 [https://leetcode-cn.com/problems/design-front-middle-back-queue](https://leetcode-cn.com/problems/design-front-middle-back-queue)
5、最近的请求次数 [https://leetcode-cn.com/problems/number-of-recent-calls](https://leetcode-cn.com/problems/number-of-recent-calls)