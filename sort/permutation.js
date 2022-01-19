// 剑指 Offer 38. 字符串的排列

// 输入一个字符串，打印出该字符串中字符的所有排列。



// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。



// 示例:

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let len = s.length
  if (len === 0) return ['']
  if (len === 1) return [s]
  let res = []
  for (let i = 0; i < len; i++) {
    const char = s[i]
    let newStr = s.slice(0, i) + s.slice(i + 1)
    const next = permutation(newStr)
    next.forEach(item => {
      res.push(char + item)
    })
  }
  return [...new Set(res)]
};
console.log(permutation("dabc"));
