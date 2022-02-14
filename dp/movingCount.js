// 剑指 Offer 13. 机器人的运动范围

// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？



// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3

// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let sum = 0
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  console.log(dp(0, 0));
  function dp (x, y) {
    if (total(x) + total(y) > k || x >= m || y >= n || visited[x][y]) return 0;
    visited[x][y] = true
    return 1 + dp(x + 1, y) + dp(x, y + 1)
  }
  function total (n) {
    let res = 0
    while (n) {
      res += n % 10
      n = parseInt(n / 10)
    }
  }

};
movingCount(1, 2, 1)