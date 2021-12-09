let {
  convertBinaryTree
} = require('./tree');

let arr = [0, 0, null, 0, null, 0, null, null, 0]
let tree = convertBinaryTree(arr)

var minCameraCover = function (root) {
  let dp = new Array(2).fill().map(item => new Array(2));
  getDp(root, dp);
  return Math.min(dp[0][1], dp[0][0])
}

function getDp (root, dp) {
  if (!root) {
    dp[0][0] = 0;
    dp[0][1] = 1000;
    dp[1][0] = 0;
    dp[1][1] = 1000;
    return
  }
  if (!root.left && !root.right) {
    dp[0][0] = 1000;
    dp[1][0] = 0;
    dp[1][1] = 1;
    dp[0][1] = 1;
    return
  }
  let l = new Array(2).fill().map(item => new Array(2));
  let r = new Array(2).fill().map(item => new Array(2));
  getDp(root.left, l);
  getDp(root.right, r);
  console.log(dp, 1);
  dp[0][0] = Math.min(l[0][1] + r[0][0], l[0][0] + r[0][1], l[0][1] + r[0][1]);
  console.log(dp, 2);
  dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0])
  console.log(dp, 3);
  dp[0][1] = Math.min(l[1][0] + r[1][0], l[1][1] + r[1][1], l[1][0] + r[1][1], l[1][1] + r[1][0]) + 1
  console.log(dp, 4);
  dp[1][1] = dp[0][1]
  console.log(dp, 5);
  return
};


console.log(minCameraCover(tree));