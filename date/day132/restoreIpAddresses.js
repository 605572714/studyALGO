// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是"0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
// 示例 1：
// 输入： s = "25525511135"
// 输出： ["255.255.11.135","255.255.111.35"]
// 示例 2：
// 输入： s = "0000"
// 输出： ["0.0.0.0"]
// 示例 3：
// 输入： s = "101023"
// 输出：
// ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

var restoreIpAddresses = function (s) {
  const SET_COUNT = 4
  const segments = new Array(SET_COUNT)
  const ans = []
  const dfs = (s, segId, segStart) => {
    // 如果找到了4段IP地址并且遍历完了字符串，为一种答案
    if (segId === SET_COUNT) {
      if (segStart === s.length) {
        ans.push(segments.join('.'))
      }
      return
    }
    // 如果没到4段IP地址遍历完了，提前返回
    if (segId === s.length) return
    // 因为不能有前置0.所以如果当前是0，那么这段IP只能是0
    if (s.charAt(segStart) === '0') {
      segments[segId] = 0
      dfs(s, segId + 1, segStart + 1)
    }
    // 一般情况，枚举递归
    let addr = 0
    for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
      addr = addr * 10 + (s.charAt(segEnd) - "0")
      if (addr > 0 && addr <= 255) {
        segments[segId] = addr
        dfs(s, segId + 1, segEnd + 1)
      } else {
        break
      }
    }
  }
  dfs(s, 0, 0)
  console.log(ans);
  return ans
}

restoreIpAddresses("25525511135")