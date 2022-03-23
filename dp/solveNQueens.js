// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。



// 示例 1：

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。

// 示例 2：

// 输入：n = 1
// 输出：[["Q"]]

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

  const board = new Array(n).fill().map(() => new Array(n).fill('.'))
  const res = []
  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] == 'Q' && (j == col || i + j == row + col || i - j == row - col)) return false
      }
    }
    return true
  }
  const helper = (row) => {
    if (row === n) {
      const stringsBoard = board.slice()
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('')
      }
      res.push(stringsBoard)
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        helper(row + 1)
        board[row][col] = "."
      }
    }
  }
  helper(0)
  console.log(res);
  return res
};



solveNQueens(5)