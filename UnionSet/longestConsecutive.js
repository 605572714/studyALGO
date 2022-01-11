// 128. 最长连续序列

// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。



// 示例 1：

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 示例 2：

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let len = nums.length
  let u = new UnionSet(len)
  let map = new Map()
  // for (let i = 0; i < len; i++) {
  //   let n = nums[i]
  //   if (map.has(n)) continue
  //   if (map.has(n - 1)) u.merge(i, map.get(n - 1))
  //   if (map.has(n + 1)) u.merge(i, map.get(n + 1))
  //   map.set(n, i)
  // }
  // let ans = 0
  // for (let i = 0; i < len; i++) {
  //   if (u.get(i) == i && u.cnt[i] > ans) ans = u.cnt[i]
  // }
  // return ans
};


class UnionSet {
  constructor(n) {
    this.fa = new Array(n + 1)
    this.n = n
    this.cnt = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
      this.fa[i] = i
      this.cnt[i] = 1
    }
  }
  get (x) {
    return this.fa[x] = (this.fa[x] == x ? x : this.get(this.fa[x]))
  }
  merge (a, b) {
    if (this.get(a) == this.get(b)) return
    this.cnt[this.get(b)] += this.cnt[this.get(a)]
    this.fa[this.get(a)] = this.get(b)
    return
  }
}