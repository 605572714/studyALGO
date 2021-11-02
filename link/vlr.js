// 前序遍历
// 前序遍历（VLR)，是二叉树遍历的一种，也叫做先根遍历、先序遍历、前序周游，可记做根左右。
// 前序遍历首先访问根结点然后遍历左子树，最后遍历右子树。

// 也就是说，先写根，再写左，左有树就再遍历，左没树就写右

let {
  generateLink,
  generateArray
} = require('./link');

let link = {
  val: null,
  next: null
};

function preOrderTraversal(root) {
  const res = [];
  if (root === null) return res;
  order(node)
  const order = (node) => {
    res.push(node.val);
    if (node.left !== null) {
      order(node.left)
    }
    if (node.right !== null) {
      order(node.right)
    }
  }
  console.log(res);
}