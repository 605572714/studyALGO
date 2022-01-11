// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？


// 示例 1：

// 输入：k = 1, n = 2
// 输出：2
// 解释：
// 鸡蛋从 1 楼掉落。如果它碎了，肯定能得出 f = 0 。
// 否则，鸡蛋从 2 楼掉落。如果它碎了，肯定能得出 f = 1 。
// 如果它没碎，那么肯定能得出 f = 2 。
// 因此，在最坏的情况下我们需要移动 2 次以确定 f 是多少。

// 示例 2：

// 输入：k = 2, n = 6
// 输出：3

// 示例 3：

// 输入：k = 3, n = 14
// 输出：4
// 第一版
// var superEggDrop = function (k, n) {
//   function dp (k, n) {
//     if (k === 0 || n === 0) return 0
//     if (k === 1) return n
//     if (n === 1) return 1
//     let ans = null
//     for (let x = 1; x <= n; x++) {
//       let tem = 1 + Math.max(dp(k - 1, x - 1), dp(k, n - x))
//       if (ans === null) ans = tem
//       else ans = Math.min(ans, tem)
//     }
//     return ans
//   }
//   console.log(dp(k, n))
// };
// // 第二版，加入map
// var superEggDrop = function (k, n) {
//   const memo = new Map()
//   function dp (k, n) {
//     if (!memo.has(n * 100 + k)) {
//       if (k === 0 || n === 0) return 0
//       if (k === 1) return n
//       if (n === 1) return 1
//       let ans = null
//       for (let x = 1; x <= n; x++) {
//         let tem = 1 + Math.max(dp(k - 1, x - 1), dp(k, n - x))
//         if (ans === null) ans = tem
//         else ans = Math.min(ans, tem)
//       }
//       memo.set(n * 100 + k, ans)
//     }
//     return memo.get(n * 100 + k)
//   }
//   console.log(dp(k, n))
// };
// 第三版，加入二分
var superEggDrop = function (k, n) {
  const memo = new Map()
  function dp (k, n) {
    if (!memo.has(n * 100 + k)) {
      if (k === 0 || n === 0) return 0
      if (k === 1) return n
      if (n === 1) return 1
      let ans = null
      // 二分查找
      let low = 1, high = n, ans1, ans2
      while (low + 1 < high) {
        let x = (low + high) >> 1
        ans1 = dp(k - 1, x - 1)
        ans2 = dp(k, n - x)
        if (ans1 < ans2) low = x
        else high = x
      }

      memo.set(n * 100 + k, ans)
    }
    return memo.get(n * 100 + k)
  }
  console.log(dp(k, n))
};
superEggDrop(3, 26)