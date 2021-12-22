// 692. 前K个高频单词

// 给一非空的单词列表，返回前 k 个出现次数最多的单词。

// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

// 示例 1：

// 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// 输出: ["i", "love"]
// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//     注意，按字母顺序 "i" 在 "love" 之前。



// 示例 2：

// 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// 输出: ["the", "is", "sunny", "day"]
// 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
//     出现次数依次为 4, 3, 2 和 1 次。
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let map = new Map();
  let res = []
  for (let i = 0; i < words.length; i++) {
    if (!map.has(words[i])) {
      map.set(words[i], 1)
    } else {
      map.set(words[i], map.get(words[i]) + 1)
    }
  }
  let heap = new Heap((a, b) => {
    return map.get(a) > map.get(b)
  });
  map.forEach(function (value, key) {
    heap.push(key);
    if (heap.size() > k) {
      heap.pop();
    }
  });
  while (heap.size()) res.unshift(heap.pop())
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
      else if (r < cnt && cmp(res[temp], res[r])) temp = r;
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

}

topKFrequent(["coding", "coding", "i", "i", "i", "love", "leetcode", "i", "love", "coding"], 2);