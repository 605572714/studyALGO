

exports.convertBinaryTree = function (arr) {
  let root;

  let insertNode = function (parentNode, childNode) {
    if (!childNode || childNode.val == '') return;
    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) parentNode.left = childNode;
      else insertNode(parentNode.left, childNode)
    } else {
      if (parentNode.right === null) parentNode.right = childNode;
      else insertNode(parentNode.right, childNode)
    }
  }

  arr.forEach(val => {
    let node = {
      val: val,
      left: null,
      right: null
    }
    if (root) insertNode(root, node);
    else root = node
  })
  return root
}

// let res = []

// function preOrderTraversal (tree) {
//   res.push(tree.val)
//   if (tree.left) preOrderTraversal(tree.left);
//   if (tree.right) preOrderTraversal(tree.right)
// }
// preOrderTraversal(tree)
// console.log(res);
