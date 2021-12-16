// 有一堆石头，每块石头的重量都是正整数。

// 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

//     如果 x == y，那么两块石头都会被完全粉碎；
//     如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。

// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
// 示例：

// 输入：[2,7,4,1,8,1]
// 输出：1
// 解释：
// 先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
// 再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
// 接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
// 最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。

class Heap {

  constructor() {
    this.cmp = new Array();
    this.count = 0;
  }

  push (x) {
    let cmp = this.cmp
    cmp[this.count] = x;
    let index = this.count;
    this.count++;
    let pre = Math.floor((index - 1) / 2);
    while (index != 0 && cmp[pre] < x) {
      [cmp[pre], cmp[index]] = [cmp[index], cmp[pre]]
      index = pre
      pre = Math.floor((index - 1) / 2);
    }
    this.cmp = cmp
    return;
  }

  pop () {
    if (this.size() == 0) return;
    let cmp = this.cmp;
    let num = cmp[0];
    [cmp[0], cmp[this.count - 1]] = [cmp[this.count - 1], cmp[0]];
    this.count--;
    let index = 0;
    let n = this.count - 1;
    while (index * 2 + 1 <= n) {
      let temp = index;
      if (cmp[temp] < cmp[index * 2 + 1]) temp = index * 2 + 1;
      if (index * 2 + 2 <= n && cmp[temp] < cmp[index * 2 + 2]) temp = index * 2 + 2;
      if (temp == index) break;
      [cmp[temp], cmp[index]] = [cmp[index], cmp[temp]]
      index = temp
    }
    this.cmp = cmp;
    return num;
  }

  // 获取堆顶元素
  top () {
    return cmp[0]
  }

  // 获取堆的大小
  size () {
    return this.count;
  }

}
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let heap = new Heap()
  for (let i = 0; i < stones.length; i++) {
    heap.push(stones[i]);
  }
  while (heap.size() > 1) {
    let y = heap.pop();
    let x = heap.pop();
    if (x != y) {
      heap.push(y - x)
    }
  }
  heap.pop()
  console.log(heap);
  return heap.size() == 1 ? heap.pop() : 0
};

lastStoneWeight([10, 5, 4, 10, 3, 1, 7, 8])