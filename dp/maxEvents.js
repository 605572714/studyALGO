// 1353. 最多可以参加的会议数目

// 给你一个数组 events，其中 events[i] = [startDayi, endDayi] ，表示会议 i 开始于 startDayi ，结束于 endDayi 。

// 你可以在满足 startDayi <= d <= endDayi 中的任意一天 d 参加会议 i 。注意，一天只能参加一个会议。

// 请你返回你可以参加的 最大 会议数目。



// 示例 1：

// 输入：events = [[1,2],[2,3],[3,4]]
// 输出：3
// 解释：你可以参加所有的三个会议。
// 安排会议的一种方案如上图。
// 第 1 天参加第一个会议。
// 第 2 天参加第二个会议。
// 第 3 天参加第三个会议。

// 示例 2：

// 输入：events= [[1,2],[2,3],[3,4],[1,2]]
// 输出：4
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  let res = 0
  let len = events.length
  const map = new Map()
  events.sort((a, b) => a[1] - b[1])
  let flag = true;
  for (let i = 1; i < len; i++) {
    if (events[i][1] == events[i - 1][1]) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    return events.length;
  }
  for (const [s, e] of events) {
    for (let i = s; i <= e; i++) {
      if (!map.has(i)) {
        map.set(i)
        res++
        break
      }
    }
  }
  console.log(res);
  return res
};


maxEvents([[1, 2], [3, 4], [5, 6], [2, 3]])
