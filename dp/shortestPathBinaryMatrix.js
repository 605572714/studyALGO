// 给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

// 二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：

//     路径途经的所有单元格都的值都是 0 。
//     路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。

// 畅通路径的长度 是该路径途经的单元格总数。



// 示例 1：

// 输入：grid = [[0,1],[1,0]]
// 输出：2

// 示例 2：

// 输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
// 输出：4

// 示例 3：

// 输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
// 输出：-1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const m = grid.length
  if (grid[0][0] == 1 || grid[m - 1][m - 1] == 1) return -1;
  const arr = new Array(m).fill(0).map(() => new Array(m).fill(Infinity))
  const directions = [
    // 垂直向上
    [0, -1],
    // 垂直向下
    [0, 1],
    // 向左
    [-1, 0],
    // 向右
    [1, 0],
    // 左上
    [-1, -1],
    // 左下
    [-1, 1],
    // 右上
    [1, -1],
    // 右下
    [1, 1],
  ]
  dfs(0, 0, 1)

  function dfs (x, y, s) {
    if (x < 0 || y < 0 || x >= m || y >= m || grid[x][y] == 1) return
    if (x == m && y == m) return
    for (const dir of directions) {
      let curX = x + dir[0],
        curY = y + dir[1];
      // 超出边界或者已经访问过了
      if (
        curX > m ||
        curY > m ||
        curX < 0 ||
        curY < 0 ||
        grid[curX][curY] == 1
      )
        continue;
      grid[curX][curY] = 1;
      arr[curX][curY] = Math.min(arr[curX][curX], s)

    }

    // dfs(x + 1, y - 1, arr[x][y] + 1)
    // dfs(x + 1, y + 1, arr[x][y] + 1)
    // dfs(x - 1, y + 1, arr[x][y] + 1)
    // dfs(x - 1, y - 1, arr[x][y] + 1)
    // dfs(x + 1, y, arr[x][y] + 1)
    // dfs(x, y + 1, arr[x][y] + 1)
    // dfs(x - 1, y, arr[x][y] + 1)
    // dfs(x, y - 1, arr[x][y] + 1)
  }
  console.log(arr);
  return arr[m - 1][m - 1]
};

shortestPathBinaryMatrix(
  [[0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]])