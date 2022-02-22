// 658. 找到 K 个最接近的元素

// 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

// 整数 a 比整数 b 更接近 x 需要满足：

//     |a - x| < |b - x| 或者
//     |a - x| == |b - x| 且 a < b



// 示例 1：

// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1,2,3,4]

// 示例 2：

// 输入：arr = [1,2,3,4,5], k = 4, x = -1
// 输出：[1,2,3,4]
const Heap = require('../heap.js')
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// var findClosestElements = function (arr, k, x) {
//   arr.sort((a, b) => (Math.abs(a - x) - Math.abs(b - x) == 0 ? a - b : Math.abs(a - x) - Math.abs(b - x)))
//   console.log(arr);
//   let res = arr.splice(0, k).sort((a, b) => a - b)
//   console.log(res);
//   // const heap = new Heap((a, b) => (Math.abs(a - x) > Math.abs(b - x)))
//   // for (let i = 0; i < arr.length; i++) {
//   //   heap.push(arr[i])
//   // }
//   // console.log(heap);
//   // let res = []
//   // for (let i = 0; i < arr.length; i++) {
//   //   res.push(heap.pop())
//   // }
//   // console.log(res);
//   // return res
// };
// var findClosestElements = function (arr, k, x) {
//   const heap = new Heap((a, b) => Math.abs(a - x) == Math.abs(b - x) ? a > b : Math.abs(a - x) > Math.abs(b - x))
//   for (let i = 0; i < arr.length; i++) {
//     heap.push(arr[i])
//   }
//   let res = []
//   for (let i = 0; i < k; i++) {
//     res.push(heap.pop())
//   }
//   return res.sort((a, b) => a - b)
// };
var findClosestElements = function (arr, k, x) {
  let low = 0, high = arr.length - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    x - arr[mid] > arr[mid + k] - x ? low = mid + 1 : high = mid;
  }
  return arr.slice(low, low + k);
};

findClosestElements([-2, -1, 1, 2, 3, 4, 5]
  , 7
  , 3
)