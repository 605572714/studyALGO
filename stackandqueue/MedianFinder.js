// 面试题 17.20. 连续中值

// 随机产生数字并传递给一个方法。你能否完成这个方法，在每次产生新值时，寻找当前所有值的中间值（中位数）并保存。

// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

// 例如，

// [2,3,4] 的中位数是 3

// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：

//     void addNum(int num) - 从数据流中添加一个整数到数据结构中。
//     double findMedian() - 返回目前所有元素的中位数。

// 示例：

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.large = new Heap("large")
  this.small = new Heap("small")
};

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function (num) {
  let { large, small } = this
  if (large.isEmpty()) {
    large.push(num)
  } else {
    large.top() > num ? large.push(num) : small.push(num)
  }
  let max = large.size(), min = small.size()
  if (min > max) large.push(small.pop())
  else if (max - 1 > min) small.push(large.pop())
  if (num == 10) {
    console.log(large, small);
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function () {
  let { large, small } = this;
  let max = large.size(), min = small.size()
  if (max == min) return (large.top() + small.top()) / 2
  else return large.top()
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

class Heap {
  constructor(cmp = "large") {
    if (cmp == "large") {
      this.cmp = this.large;
    } else if (cmp == "small") {
      this.cmp = this.small
    } else {
      this.cmp = cmp
    }
    this.res = [];
    this.cnt = 0;
  }

  push (val) {
    let { res, cnt, cmp } = this;
    res[cnt] = val;
    this.cnt++;
    while (cnt) {
      let par = (cnt - 1) >> 1;
      if (!this.cmp(res[par], res[cnt])) return;
      this.swap(res, cnt, par)
      cnt = par;
      par = (cnt - 1) >> 1;
    }
  }

  pop () {
    if (this.size() == 0) return;
    this.cnt--;
    let { res, cnt, cmp } = this;
    const el = res[0];
    this.swap(res, 0, cnt);
    let idx = 0, l = idx * 2 + 1, r = idx * 2 + 2;
    while (l < cnt) {
      let temp = idx;
      if (cmp(res[idx], res[l])) temp = l;
      if (r < cnt && cmp(res[temp], res[r])) temp = r;
      else if (res[temp] == res[idx]) break;
      this.swap(res, temp, idx);
      idx = temp;
      l = idx * 2 + 1, r = idx * 2 + 2;
    }
    this.cmp = cmp
    return el;
  }

  large = (a, b) => a < b

  small = (a, b) => a > b;

  swap = (res, i, j) => [res[i], res[j]] = [res[j], res[i]];

  top = () => this.res[0];

  size = () => this.cnt;

  isEmpty = () => this.cnt == 0

}
// let fn = new MedianFinder()
// fn.addNum(1)
// fn.addNum(2)
// fn.addNum(3)
// fn.addNum(4)
// fn.addNum(5)
// fn.addNum(6)
// fn.addNum(7)
// fn.addNum(8)
// fn.addNum(9)
// fn.addNum(10)
// console.log(fn.findMedian());


function Fn (num) {
  this.small = new Heap("small")
  this.large = new Heap("large")
}
Fn.prototype.add = function (num) {
  let { large, small } = this
  if (large.isEmpty()) {
    large.push(num)
  } else {
    large.top() > num ? large.push(num) : small.push(num)
  }
  let max = large.size(), min = small.size()
  if (min > max) large.push(small.pop())
  else if (max - 1 > min) small.push(large.pop())
  // console.log(large, small);
}
let fn = new Fn()
fn.add(1)
fn.add(2)
fn.add(3)
fn.add(4)
fn.add(5)
fn.add(6)
fn.add(7)
fn.add(8)
// fn.add(9)


let small = new Heap('small')
small.push(5)
small.push(7)
small.push(6)
small.push(8)
small.pop()
// small.push(9)
console.log(small);