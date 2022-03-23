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


// const Heap = require('./heap')
// var findKthNumber = function (n, k) {
//   if (n < 10) return k
//   let len = 0
//   let num = n

//   const heap = new Heap((a, b) => {
//     let aStr = a.toString().split('')
//     let bStr = b.toString().split('')
//     while (aStr.length > 0 && bStr.length > 0) {
//       if (aStr[0] != bStr[0]) {
//         return aStr[0] > bStr[0]
//       } else {
//         aStr.shift()
//         bStr.shift()
//       }
//     }
//     return aStr.length > bStr.length
//   })
//   // heap.push(2)
//   // heap.push(22)
//   for (let i = 0; i < n; i++) {
//     heap.push(i + 1)
//   }
//   for (let i = 0; i < k - 1; i++) {
//     console.log(heap.pop());
//   }
//   console.log(heap.pop());
//   // return heap.pop()

// };

// 先计算比n小的以1开始的所有数字。

var findKthNumber = function (n, k) {
  let getCount = (prefix, n) => {
    let count = 0;
    for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10) {
      count += Math.min(next, n + 1) - cur
    }
    return count;
  }
  let p = 1;
  let prefix = 1;
  while (p < k) {
    let count = getCount(prefix, n)
    if (p + count > k) {
      prefix *= 10
      p++
    } else if (p + count <= k) {
      prefix++
      p += count;
    }
  }
  console.log(prefix);
  return prefix

};
findKthNumber(100, 90)
// findKthNumber(13, 2

let getCount = (prefix, n) => {
  let count = 0;
  for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10) {
    count += Math.min(next, n + 1) - cur
  }
  return count;
}