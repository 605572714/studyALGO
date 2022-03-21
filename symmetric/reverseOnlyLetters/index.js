// 917. 仅仅反转字母

// 给你一个字符串 s ，根据下述规则反转字符串：

//     所有非英文字母保留在原有位置。
//     所有英文字母（小写或大写）位置反转。

// 返回反转后的 s 。



// 示例 1：

// 输入：s = "ab-cd"
// 输出："dc-ba"

// 示例 2：

// 输入：s = "a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"

// 示例 3：

// 输入：s = "Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const len = s.length
  const map = new Map()
  const arr = []
  const res = []
  for (let i = 0; i < len; i++) {
    if ((/^[a-zA-Z]$/.test(s[i]))) arr.unshift(s[i])
    else map.set(i, s[i])
  }
  while (map.size != 0 || arr.length != 0) {
    if (map.has(res.length)) {
      res.push(map.get(res.length))
      map.delete(res.length - 1)
    }
    else if (arr.length != 0) res.push(arr.shift())
  }
  console.log(res.join(""));
  // return res.join("")
};

reverseOnlyLetters("a-bC-dEf-ghIj")