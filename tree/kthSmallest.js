// 230. 二叉搜索树中第K小的元素

// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。



// 示例 1：

// 输入：root = [3,1,4,null,2], k = 1
// 输出：1

// 示例 2：

// 输入：root = [5,3,6,2,4,null,null,1], k = 3
// 输出：3
// 根据二叉搜索树的性质，对其中序遍历的话，会得到一个排序数组，找到其第k小的元素，只需找到排序数组中的第k个元素即可

var kthSmallest = function (root, k) {
  let res = [];
  dfs(root)
  function dfs (root) {
    if (!root) return null
    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  }
  return res[k - 1]
};
