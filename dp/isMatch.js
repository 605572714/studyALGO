// 10. 正则表达式匹配

// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

//     '.' 匹配任意单个字符
//     '*' 匹配零个或多个前面的那一个元素

// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。


// 示例 1：

// 输入：s = "aa", p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。

// 示例 2:

// 输入：s = "aa", p = "a*"
// 输出：true
// 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

// 示例 3：

// 输入：s = "ab", p = ".*"
// 输出：true
// 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。



// 提示：

//     1 <= s.length <= 20
//     1 <= p.length <= 30
//     s 只包含从 a-z 的小写字母。
//     p 只包含从 a-z 的小写字母，以及字符 . 和 *。
//     保证每次出现字符 * 时，前面都匹配到有效的字符

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 每次从p中取出一个字符或者一个字符+符号
// 在s中进行匹配
// p是一个字符，只能匹配一个S字符
// p字符加符号，可以匹配多个字符

// var isMatch = function (s, p) {
//   const m = s.length
//   const n = p.length
//   const f = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))
//   f[0][0] = true
//   for (let i = 0; i <= m; ++i) {
//     for (let j = 1; j <= n; j++) {
//       if (p[j - 1] == "*") {
//         f[i][j] = f[i][j - 2]
//         if (strMatch(s, p, i, j - 1)) {
//           f[i][j] = f[i][j] || f[i - 1][j]
//         }
//       } else {
//         if (strMatch(s, p, i, j)) {
//           f[i][j] = f[i - 1][j - 1]
//         }
//       }
//     }
//   }
//   console.log(f);
//   return f[m][n];
// }
// var strMatch = function (s, p, i, j) {
//   if (i == 0) return false
//   if (p[j - 1] == '.') return true
//   return s[i - 1] == p[j - 1]
// }
var isMatch = function (s, p) {
  if (p == "") return s == ""
  let first_match = s.length > 0 && (s[0] == p[0] || p[0] == ".")
  if (p.length >= 2 && p[1] == "*") {
    return (isMatch(s, p.substr(2))) || (first_match && isMatch(s.substr(1), p))
  } else {
    return (first_match && isMatch(s.substr(1), p.substr(1)))
  }
}
var isMatch = function (s, p) {
  let dp = new Array(s.length + 1);
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = new Array(p.length + 1).fill(false)
  }
  dp[0][0] = true;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      dp[0][i + 1] = dp[0][i - 1]
    }
  }
  console.log(dp);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (s[i] === p[j] || p[j] === '.') {
        dp[i + 1][j + 1] = dp[i][j]
      } else if (p[j] === '*') {
        if (s[i] !== p[j - 1] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1]
        } else {
          dp[i + 1][j + 1] = (dp[i + 1][j - 1] || dp[i + 1][j] || dp[i][j + 1])
        }
      }
    }
  }

  return dp[s.length][p.length]
};
console.log(isMatch("ab", ".*"));
