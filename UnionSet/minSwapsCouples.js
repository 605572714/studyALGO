// 765. 情侣牵手

// N 对情侣坐在连续排列的 2N 个座位上，想要牵到对方的手。 计算最少交换座位的次数，以便每对情侣可以并肩坐在一起。 一次交换可选择任意两人，让他们站起来交换座位。

// 人和座位用 0 到 2N-1 的整数表示，情侣们按顺序编号，第一对是 (0, 1)，第二对是 (2, 3)，以此类推，最后一对是 (2N-2, 2N-1)。

// 这些情侣的初始座位  row[i] 是由最初始坐在第 i 个座位上的人决定的。

// 示例 1:

// 输入: row = [0, 2, 1, 3]
// 输出: 1
// 解释: 我们只需要交换row[1]和row[2]的位置即可。

// 示例 2:

// 输入: row = [3, 2, 0, 1]
// 输出: 0
// 解释: 无需交换座位，所有的情侣都已经可以手牵手了。
// 如果只有一对情侣，那么不会坐错
// 如果有两对情侣，没有配对，需要换一次，有一个配对，那么不需要换，说明两个都配对了
// 如果有三对情侣，有一对坐对了，那么久有两对没坐对，如果一对都没坐对，则需要两次，即N-1次
// 如果替换一次，有两组可以重新配对，那么减少一次移动
const UnionSet = require('./UnionSet')
// var minSwapsCouples = function (row) {
//   let num = 0;
//   let len = row.length
//   let u = new UnionSet(len)
//   let map = new Map()
//   for (let i = 0; i < len; i++) {
//     map.set(row[i], i)
//   }
//   for (let i = 0; i < row.length; i = i + 2) {
//     if (row[i] % 2 == 0) {
//       if (row[i] + 1 != row[i + 1]) {
//         let j = map.get(row[i] + 1);
//         [row[i + 1], row[j]] = [row[j], row[i + 1]];
//         map.set(row[i + 1], i + 1)
//         map.set(row[j], j)
//         num++;
//       }
//     } else {
//       if (row[i + 1] != row[i] - 1) {
//         let j = map.get(row[i] - 1);
//         [row[i + 1], row[j]] = [row[j], row[i + 1]]
//         map.set(row[i + 1], i + 1)
//         map.set(row[j], j)
//         num++;
//       }
//     }
//   }
//   console.log(num);
//   return num > 0 ? num - 1 : num
// };


// var minSwapsCouples = function (row) {
//   const n = row.length;
//   const tot = n / 2;
//   console.log(row);
//   const graph = new Array(tot).fill(0).map(() => new Array());
//   for (let i = 0; i < n; i += 2) {
//     const l = Math.floor(row[i] / 2);
//     const r = Math.floor(row[i + 1] / 2);
//     if (l != r) {
//       graph[l].push(r);
//       graph[r].push(l);
//     }
//   }
//   console.log(graph);

//   const visited = new Array(tot).fill(false);
//   let ret = 0;
//   for (let i = 0; i < tot; i++) {
//     if (!visited[i]) {
//       const queue = [];
//       visited[i] = true;
//       queue.push(i);
//       let cnt = 0;

//       while (queue.length) {
//         const x = queue.shift();
//         cnt += 1;

//         for (const y of graph[x]) {
//           if (!visited[y]) {
//             visited[y] = true;
//             queue.push(y);
//           }
//         }
//       }
//       ret += cnt - 1;
//     }
//   }
//   return ret;
// };

var minSwapsCouples = function (row) {
  const len = row.length
  const n = len / 2
  const u = new UnionSet(n)
  for (let i = 0; i < len; i += 2) {
    const l = Math.floor(row[i] / 2)
    const r = Math.floor(row[i + 1] / 2)
    u.merge(l, r)
  }
  let cnt = 0
  for (let i = 0; i < n; i++) {
    if (u.get(i) == i) cnt++
  }
  console.log(n - cnt);
};

minSwapsCouples([1, 4, 0, 5, 8, 7, 6, 3, 2, 9])