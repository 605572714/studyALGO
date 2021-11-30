// 面试题 17.09. 第 k 个数

// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

// 示例 1:

// 输入: k = 5

// 输出: 9

var getKthMagicNumber = function (k) {
  let dp = new Array(k + 1).fill(1)
  let p3 = 1,
    p5 = 1,
    p7 = 1;
  for (let i = 2; i <= k; i++) {

    dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7)
    if (dp[i] == dp[p3] * 3) p3++
    if (dp[i] == dp[p5] * 5) p5++
    if (dp[i] == dp[p7] * 7) p7++
  }
  console.log(dp);
  return dp[k]
};


getKthMagicNumber(2)