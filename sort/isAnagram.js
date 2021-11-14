// 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// ```jsx
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false
// ```

var isAnagram = function (s, t) {
  let n = s.length;
  let m = t.length;
  if (s.length !== t.length) return false;
  let map = new Map();
  // 对S进行遍历
  for (var i = 0; i < m; i++) {
    // Map 中有的数量+1，不存在的储存
    if (!map.has(s[i])) {
      map.set(s[i], 1)
    } else {
      map.set(s[i], map.get(s[i]) + 1)
    }
  }
  // 对T进行遍历，从map中减去已经遍历的。如果map中不存在或者map中最后有剩余，则返回FALSE
  for (var i = 0; i < n; i++) {
    if (!map.has(t[i])) return false
    else {
      map.set(t[i], map.get(t[i]) - 1)
    }
    if (map.get(t[i]) < 0) return false
  }
  return true
};