// 有数目不限的1分，2分，5分的硬币，现要凑齐1元钱，有多少种凑法。
// 1
// function coin100() {
//   let r = 0;
//   for (let i = 0; i <= 100; i++)
//     for (let j = 0; j <= 50; j++)
//       for (let k = 0; k <= 20; k++)
//         if (i + 2 * j + 5 * k === 100) r++
//   return r
// }
// console.log(coin100()); // 541;
// 2
// function coin100() {
//   let r = 0;
//   for (let j = 0; j <= 50; j++)
//     for (let k = 0; k <= (100 - 2 * j) / 5; k++)
//       r++
//   return r
// }

// console.log(coin100()); // 541;
// 3
// function coin100() {
//   let r = 0;
//   for (let j = 0; j <= 50; j++)
//     r += Math.floor((100 - 2 * j) / 5) + 1
//   return r
// }

// console.log(coin100()); // 541;

// 自定义硬币面额
// function countCoins(values, n) {
//   let table = new Array(n + 1).fill(0)
//   table[0] = values[0];
//   for (const value of values) {
//     for (let i = value; i <= n; i++) {
//       table[i] += table[i - value]
//     }
//   }

//   return table[n]
// }

// console.log(countCoin([1, 2, 5], 100)); // 541

// 自定义硬币面额和硬币数量有限

// function countCoins(coins, n) {
//   let table = new Array(n + 1).fill(0);
//   table[0] = 1;
//   for (const coin of coins) {
//     let {
//       value,
//       count
//     } = coin;
//     for (let i = n; i >= 0; i--) {
//       console.log(i, table[i], value);
//       if (table[i] > 0) {
//         for (let j = 1; j <= count && i + value * j <= n; j++) {
//           table[i + value * j] += table[i]
//         }
//       }
//     }
//   }
//   return table[n]
// }
// console.log(countCoins([{
//     value: 1,
//     count: 100
//   },
//   {
//     value: 2,
//     count: 50
//   },
//   {
//     value: 5,
//     count: 20
//   }
// ], 100));

// 变体
// 现有一堆硬币，欲将其分为两堆，使得两堆的差值尽量小，求其最小差值。

function countCoins(coins) {
  let total = ((coins) => {
    let r = 0;
    for (const coin of coins) {
      let {
        value,
        count
      } = coin;
      r += value * count
    }
    return r
  })(coins)
  let n = Math.floor(total / 2)
  let table = new Array(n + 1).fill(false);
  table[0] = true;
  for (const coin of coins) {
    let {
      value,
      count
    } = coin;
    for (let i = n; i >= 0; i--) {
      if (table[i] > 0) {
        for (let j = 1; j <= count && i + value * j <= n; j++) {
          table[i + value * j] = true;
        }
      }
    }
  }
  for (let i = n; i >= 0; i--) {
    if (table[i]) return total - 2 * i
  }
}

console.log(countCoins([{
    value: 2,
    count: 1
  },
  {
    value: 5,
    count: 5
  }
])); //3