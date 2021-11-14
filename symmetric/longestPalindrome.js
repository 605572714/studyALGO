// 最长回文串
// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

// ```jsx
// 输入:
// "abccccdd"

// 输出:
// 7

// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
// ```

const longestPalindrome = s => {
  // 统计各个字母出现的次数
  const map = new Map();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let res = 0;
  // 遍历map
  for (const item of map) {
    // res累加上 出现次数-次数对2取模
    res += item[1] - (item[1] % 2);
  }
  // 如果有奇数字母的，res加1
  if (res < len) res++;

  return res;
};