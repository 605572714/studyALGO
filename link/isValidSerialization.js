// 331. 验证二叉树的前序序列化

// 序列化二叉树的一种方法是使用前序遍历。 当我们遇到一个非空节点时， 我们可以记录下这个节点的值。 如果它是一个空节点， 我们可以使用一个标记值记录， 例如#。

//          _9_
//        /     \
//       3        2
//     /  \     /   \
//   4     1   #      6
//  / \   /\         / \
// #  #  #  #       #   #

// 例如， 上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，
// 其中# 代表一个空节点。

// 给定一串以逗号分隔的序列， 验证它是否是正确的二叉树的前序序列化。 编写一个在不重构树的条件下的可行算法。

// 每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#'。

// 你可以认为输入格式总是有效的， 例如它永远不会包含两个连续的逗号， 比如 "1,,3"。

// 示例 1:

//   输入: "9,3,4,#,#,1,#,#,2,#,6,#,#"
// 输出: true

// 示例 2:

//   输入: "1,#"
// 输出: false

// 示例 3:

//   输入: "9,#,#,1"
// 输出: false

// 槽位保留法
// var isValidSerialization = function (preorder) {
//   let arr = preorder.split(',');
//   let stack = [1];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (!stack.length) return false;
//     const len = stack.length;
//     if (item == "#") {
//       stack[len - 1]--;
//       if (stack[len - 1] == 0) stack.pop()
//     } else {
//       stack[len - 1]--;
//       if (stack[len - 1] == 0) stack.pop()
//       stack.push(2)
//     }
//   }
//   return stack.length == 0
// };
// 升级版本
// var isValidSerialization = function (preorder) {
//   const arr = preorder.split(",");
//   const len = arr.length;
//   let slots = 1;
//   for (let i = 0; i < len; i++) {
//     if (slots == 0) return false;
//     if (arr[i] == "#") {
//       slots--
//     } else {
//       slots++
//     }
//   }
//   return slots === 0
// };
// 如果一个数字后面出现连续两个#,则证明这个节点完整
// var isValidSerialization = function (preorder) {
//   const arr = preorder.split(",");
//   const len = arr.length;
//   let stack = [];
//   for (let i = 0; i < len; i++) {
//     stack.push(arr[i])
//     while (stack.length >= 3 && stack[stack.length - 1] == "#" && stack[stack.length - 2] == "#" && stack[stack.length - 3] != "#") {
//       stack.pop(), stack.pop(), stack.pop()
//       stack.push('#')
//     }
//   }
//   return stack.length == 1 && stack[0] == "#"
// };
// 递归方法
// var isValidSerialization = function (preorder) {
//   const arr = preorder.split(",");
//   let isValid = true;
//   let len = dfs(0, arr)
//   return isValid && len == arr.length

//   function dfs(index, arr) {
//     if (index >= arr.length) {
//       isValid = false;
//       return 0
//     }
//     if (arr[index] == "#") return 1;
//     let leftLen = dfs(index + 1, arr);
//     let rightLen = dfs(index + 1 + leftLen, arr)
//     return 1 + leftLen + rightLen
//   }
// };
// 二叉树规律解法
var isValidSerialization = function (preorder) {
  const arr = preorder.split(",");
  const len = arr.length;
  let enter = 0,
    out = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] != "#") out += 2;
    if (i != 0) enter++;
    if (i != (len - 1) && out <= enter) return false
  }
  return enter == out
};
// console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
console.log(isValidSerialization("1,#,#,#,#"));