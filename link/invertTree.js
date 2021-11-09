let arr = [1, 2, 3, 4, 6, 7, 9]
const tree = convertBinaryTree(arr);


function convertBinaryTree(arr) {
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

console.log(tree);

var invertTree = function (root) {
  let newRoot = root;
  fn(root)
  return newRoot

  function fn(root) {
    newRoot.val = root.val;
    newRoot.left = root.right;
    newRoot.right = root.left;
    if (newRoot.left) fn(newRoot.left)
    if (newRoot.right) fn(newRoot.right)
  }
};


// console.log(invertTree(tree));