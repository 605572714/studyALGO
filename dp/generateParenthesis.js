// 22. 括号生成

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。



// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

// 示例 2：

// 输入：n = 1
// 输出：["()"]



// 提示：

//     1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []

  function dfs(l, r, s) {
    if (l === 0 && r === 0) {
      res.push(s)
      return
    }
    if (l > r) return
    if (l > 0) dfs(l - 1, r, s + '(')
    if (r > 0) dfs(l, r - 1, s + ')')
  }
  dfs(n, n, '')
  return res
};