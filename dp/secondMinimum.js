// 给你 n、edges、time 和 change ，返回从节点 1 到节点 n 需要的 第二短时间 。

// 注意：

//     你可以 任意次 穿过任意顶点，包括 1 和 n 。
//     你可以假设在 启程时 ，所有信号灯刚刚变成 绿色 。



// 示例 1：

//        

// 输入：n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5
// 输出：13
// 解释：
// 上面的左图展现了给出的城市交通图。
// 右图中的蓝色路径是最短时间路径。
// 花费的时间是：
// - 从节点 1 开始，总花费时间=0
// - 1 -> 4：3 分钟，总花费时间=3
// - 4 -> 5：3 分钟，总花费时间=6
// 因此需要的最小时间是 6 分钟。

// 右图中的红色路径是第二短时间路径。
// - 从节点 1 开始，总花费时间=0
// - 1 -> 3：3 分钟，总花费时间=3
// - 3 -> 4：3 分钟，总花费时间=6
// - 在节点 4 等待 4 分钟，总花费时间=10
// - 4 -> 5：3 分钟，总花费时间=13
// 因此第二短时间是 13 分钟。

// 示例 2：

// 输入：n = 2, edges = [[1,2]], time = 3, change = 2
// 输出：11
// 解释：
// 最短时间路径是 1 -> 2 ，总花费时间 = 3 分钟
// 最短时间路径是 1 -> 2 -> 1 -> 2 ，总花费时间 = 11 分钟

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/second-minimum-time-to-reach-destination
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  // 表示每一个节点与哪些节点相连
  const graph = new Array(n + 1).fill().map(() => new Array())
  for (const edge of edges) {
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  }
  // path[i][0]表示1~i最短路径，path[i][1]表示1~i第二短路径
  const path = new Array(n + 1).fill().map(() => new Array(2).fill(Number.MAX_VALUE))
  path[1][0] = 0
  const queue = []
  queue.push([1, 0])
  while (path[n][1] === Number.MAX_VALUE) {
    const [cur, len] = queue.shift()
    for (const next of graph[cur]) {
      if (len + 1 < path[next][0]) {
        path[next][0] = len + 1
        queue.push([next, len + 1])
      } else if (len + 1 > path[next][0] && len + 1 < path[next][1]) {
        path[next][1] = len + 1
        queue.push([next, len + 1])
      }
    }
  }
  let ret = 0
  for (let i = 0; i < path[n][1]; i++) {
    if (ret % (2 * change) >= change) {
      ret = ret + (2 * change - ret % (2 * change))
    }
    ret = ret + time
  }
  console.log(ret);
  return ret
};

secondMinimum(5, [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]], 3, 5)



