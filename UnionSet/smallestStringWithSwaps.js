// 1202. 交换字符串中的元素

// 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。

// 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。

// 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。



// 示例 1:

// 输入：s = "dcab", pairs = [[0,3],[1,2]]
// 输出："bacd"
// 解释：
// 交换 s[0] 和 s[3], s = "bcad"
// 交换 s[1] 和 s[2], s = "bacd"

// 示例 2：

// 输入：s = "dcab", pairs = [[0,3],[1,2],[0,2]]
// 输出："abcd"
// 解释：
// 交换 s[0] 和 s[3], s = "bcad"
// 交换 s[0] 和 s[2], s = "acbd"
// 交换 s[1] 和 s[2], s = "abcd"

// 示例 3：

// 输入：s = "cba", pairs = [[0,1],[1,2]]
// 输出："abc"
// 解释：
// 交换 s[0] 和 s[1], s = "bca"
// 交换 s[1] 和 s[2], s = "bac"
// 交换 s[0] 和 s[1], s = "abc"
class UnionSet {
  constructor(n) {
    this.fa = new Array(n + 1)
    this.n = n
    for (let i = 0; i < n; i++) {
      this.fa[i] = i
    }
  }
  get (x) {
    return this.fa[x] = (this.fa[x] == x ? x : this.get(this.fa[x]))
  }
  merge (a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
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


var smallestStringWithSwaps = function (s, pairs) {
  const slen = s.length
  const plen = pairs.length
  const u = new UnionSet(slen)
  let str = ""
  let h = []
  for (let i = 0; i < plen; i++) {
    const p = pairs[i]
    u.merge(p[0], p[1])
  }
  for (let i = 0; i < slen; i++) {
    if (u.get(i) == i) h[i] = new Heap("small")
  }
  for (let i = 0; i < slen; i++) {
    h[u.get(i)].push(s[i])
  }
  for (let i = 0; i < slen; i++) {
    str = str + h[u.get(i)].pop()
  }
  console.log(str);
  return str
};

smallestStringWithSwaps("dcab", [[0, 3], [1, 2]])