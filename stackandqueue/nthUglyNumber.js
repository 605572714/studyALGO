// 264. 丑数 II

// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。

// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。



// 示例 1：

// 输入：n = 10
// 输出：12
// 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。

// 示例 2：

// 输入：n = 1
// 输出：1
// 解释：1 通常被视为丑数。
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const factors = [2, 3, 5];
  const seen = new Set();
  const heap = new Heap("small");
  seen.add(1);
  heap.push(1);
  let ugly = 0;
  for (let i = 1; i < n; i++) {
    ugly = heap.pop();
    for (const factor of factors) {
      const next = ugly * factor;
      if (!seen.has(next)) {
        seen.add(next);
        heap.push(next);
      }
    }
  }

  return ugly;
};

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
    this.cnt++;
    this.res.push(val)
    this.shiftUp(this.cnt - 1)
  }

  pop () {
    this.cnt--;
    const res = this.res[0]
    const pop = this.res.pop()
    if (this.cnt) {
      this.res[0] = pop
      this.shiftDown(0)
    }
    return res
  }

  shiftUp (i) {
    if (i === 0) return
    const par = this.getParentIndex(i)
    if (this.cmp(this.res[par], this.res[i])) {
      this.swap(par, i)
      this.shiftUp(par)
    }
  }

  shiftDown (i) {
    const l = this.getLeftIndex(i)
    const r = this.getRightIndex(i)
    if (l < this.cnt && this.cmp(this.res[i], this.res[l])) {
      this.swap(i, l)
      this.shiftDown(l)
    }
    if (r < this.cnt && this.cmp(this.res[i], this.res[r])) {
      this.swap(i, r)
      this.shiftDown(r)
    }
  }

  getParentIndex (i) {
    return (i - 1) >> 1
  }

  getLeftIndex (i) {
    return i * 2 + 1
  }

  getRightIndex (i) {
    return i * 2 + 2
  }

  large = (a, b) => a < b

  small = (a, b) => a > b;

  swap = (i, j) => [this.res[i], this.res[j]] = [this.res[j], this.res[i]];

  top = () => this.res[0];

  size = () => this.cnt;

  isEmpty = () => this.cnt === 0

}


nthUglyNumber(10)