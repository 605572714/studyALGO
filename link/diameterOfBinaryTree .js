// 二叉树的直径
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

// 示例 :
// 给定二叉树

// ```
//       1
//      / \
//     2   3
//    / \
//   4   5

// ```

// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

var diameterOfBinaryTree = function (root) {
  // 定义一个深度
  let ans = 1;
  // 计算深度
  depth(root);
  return ans - 1;

  function depth(root) {
    // 当节点不存在时，深度为0
    if (root == null) return 0;
    // 记录左右子节点的深度
    let l = depth(root.left);
    let r = depth(root.right);
    // 深度比较
    ans = Math.max(ans, l + r + 1)
    // 返回最大值
    return Math.max(l, r) + 1
  }
};