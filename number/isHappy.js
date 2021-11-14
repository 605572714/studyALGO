// 202. 快乐数

// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」定义为：

//     对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
//     然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
//     如果 可以变为  1，那么这个数就是快乐数。

// 如果 n 是快乐数就返回 true ；不是，则返回 false 。

// 这道题我们判断一个数是不是快乐数，我们只需要判断其是不是一个循环。
// 所以我们只需要建立一个hash数组，将当前数存入其中，如果发现新生成的数存在于hash数组中，则出现了循环，所以不是快乐数
// var isHappy = function (n) {
//   let set = new Set();
//   while (n != 1 && !set.has(n)) {
//     set.add(n);
//     n = getNext(n)
//   }

//   return n == 1
// };

// var getNext = function (n) {
//   let total = 0;

//   n = n.toString()
//   for (let i = 0; i < n.length; i++) {
//     total = total + n[i] * n[i]
//   }
//   return total * 1
// }
// var isHappy = function (n) {
//   let slow = n;
//   let fast = getNext(n);
//   while (fast != 1 && fast != slow) {
//     slow = getNext(slow);
//     fast = getNext(getNext(fast))
//   }
//   return fast == 1
// };


// var getNext = function (n) {
//   n = n.toString();
//   let total = 0;
//   for (let i = 0; i < n.length; i++) {
//     total = total + n[i] * n[i]
//   }
//   return total * 1
// }
// console.log(isHappy(19));

s = "anagram";
t = "nagaram";
let map = new Map();
for (var i = 0; i < s.length; i++) {
  if (!map.has(s[i])) {
    map.set(s[i], 1)
  } else {
    map.set(s[i], map.get(s[i]) + 1)
  }
}
map.forEach((key, value) => {
  console.log(key, value);
})
console.log(map);