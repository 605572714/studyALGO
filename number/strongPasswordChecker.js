// 420. 强密码检验器


// 如果一个密码满足下述所有条件，则认为这个密码是强密码：

//     由至少 6 个，至多 20 个字符组成。
//     至少包含 一个小写 字母，一个大写 字母，和 一个数字 。
//     同一字符 不能 连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 如果满足其他条件也可以算是强密码)。

// 给你一个字符串 password ，返回 将 password 修改到满足强密码条件需要的最少修改步数。如果 password 已经是强密码，则返回 0 。

// 在一步修改操作中，你可以：

//     插入一个字符到 password ，
//     从 password 中删除一个字符，或
//     用另一个字符来替换 password 中的某个字符。



// 示例 1：

// 输入：password = "a"
// 输出：5

// 示例 2：

// 输入：password = "aA1"
// 输出：3

// 示例 3：

// 输入：password = "1337C0d3"
// 输出：0



// 提示：

//     1 <= password.length <= 50
//     password 由字母、数字、点 '.' 或者感叹号 '!'

/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
  const n = password.length
  let needLowerCase = needUpperCase = needNumber = 1 // 需要小写字母，大写字母和数字
  for (let i = 0; i < n; i++) {
    const charCode = password.charCodeAt(i)
    if (charCode >= 97 && charCode <= 122) needLowerCase = 0 // 已有小写字母
    else if (charCode >= 65 && charCode <= 90) needUpperCase = 0 // 已有大写字母
    else if (charCode >= 48 && charCode <= 57) needNumber = 0 // 已有数字
  }
  const needLetter = needLowerCase + needUpperCase + needNumber // 缺少字符数
  let delOne = delTwo = replace = 0
  for (let i = 2; i < n; i++) { // 遍历找长度 >= 3 的连续字符串
    if (password[i - 2] === password[i - 1] && password[i - 1] === password[i]) {
      let len = 3
      while (i + 1 < n && password[i + 1] === password[i++]) len++ // 连续字符串长度
      replace += len / 3 | 0 // 每 3 个字符替换 1 个字符，即可中断 3 个字符的连续
      if (len % 3 === 0) delOne++ // 长度是 3 的倍数的字符串数（需删 1 字符）
      else if (len % 3 === 1) delTwo++ // 长度 / 3 余数 1 的连续字符串数（需删 2 字符）
    } // 长度是 3 倍数，删 1 字符 => 长度 / 3 余数 2 字符串
  }// 长度 / 3 余数 1, 删 2 字符 => 长度 / 3 余数 2 字符串，所以，剩下都是余数 2 字符串
  if (n < 6) return Math.max(6 - n, needLetter) // 不够 6，优先插入缺少字符
  if (n <= 20) return Math.max(replace, needLetter) // 长度合适，优先用缺少字符替换
  const needDel = n - 20 // 请参考上面的三轮删除的说明
  replace -= Math.min(needDel, delOne) // ↓ 如果还需要删除次数，不够删，按 2:1 置换
  if (needDel - delOne > 0) replace -= Math.min((needDel - delOne) / 2 | 0, delTwo)
  if (needDel - delOne - delTwo * 2 > 0) replace -= (needDel - delOne - delTwo * 2) / 3 | 0
  return needDel + Math.max(replace, needLetter)
};
