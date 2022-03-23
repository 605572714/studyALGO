// 440. 字典序的第K小数字

// 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。



// 示例 1:

// 输入: n = 13, k = 2
// 输出: 10
// 解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。

// 示例 2:

// 输入: n = 1, k = 1
// 输出: 1

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  if (n < 10) return k
  let len = 0
  let num = n

  while (num) {
    num = Math.floor(num / 10)
    len++
  }


};


findKthNumber(1533, 34)
