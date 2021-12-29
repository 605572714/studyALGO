// 124. 二叉树中的最大路径和

// 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

// 路径和 是路径中各节点值的总和。

// 给你一个二叉树的根节点 root ，返回其 最大路径和 。



// 示例 1：

// 输入：root = [1,2,3]
// 输出：6
// 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

// 示例 2：

// 输入：root = [-10,9,20,null,null,15,7]
// 输出：42
// 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

function maxPathSum (root) {
  let max = Number.MIN_SAFE_INTEGER
  maxGain(root)
  return max
  function maxGain (root) {
    if (!root) return 0
    let l = Math.max(maxGain(root.left), 0)
    let r = Math.max(maxGain(root.right), 0)
    let price = root.val + l + r
    max = Math.max(max, price)
    return root.val + Math.max(l, r)
  }
}