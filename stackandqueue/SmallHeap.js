// 堆与队列
// 自己实现一个小顶堆

class SmallHeap {

  constructor() {
    this.cmp = new Array();
    this.count = 0;
  }

  push (x) {
    let cmp = this.cmp
    cmp[this.count] = x;
    let index = this.count;
    this.count++;
    // index为x的下标，根据定义，需要将x向上进行调整
    // 假设当前节点的下标为i，其左孩子的下标为2i+1，右孩子的结点为2i+2；
    // ((2i+1)-1)/2=i,((2i+2)-1)/2=i，通过子结点寻找父节点
    // 下标从零还是从一开始，子结点的下标有区别
    let pre = Math.floor((index - 1) / 2);
    while (index != 0 && cmp[pre] > x) {
      [cmp[pre], cmp[index]] = [cmp[index], cmp[pre]]
      index = pre
      pre = Math.floor((index - 1) / 2);
    }
    this.cmp = cmp
    return;
  }

  pop () {
    // 弹出操作，将最后一位的元素值，提升到第一位
    if (this.size() == 0) return;
    let cmp = this.cmp;
    let num = cmp[0];
    [cmp[0], cmp[this.count - 1]] = [cmp[this.count - 1], cmp[0]];
    this.count--;
    let index = 0;
    let n = this.count - 1;
    while (index * 2 + 1 <= n) {
      let temp = index;
      if (cmp[temp] > cmp[index * 2 + 1]) temp = index * 2 + 1;
      if (index * 2 + 2 <= n && cmp[temp] > cmp[index * 2 + 2]) temp = index * 2 + 2;
      if (cmp[temp] == cmp[index]) break;
      [cmp[temp], cmp[index]] = [cmp[index], cmp[temp]];
      index = temp
    }
    this.cmp = cmp;
    return num;
  }

  // 获取堆顶元素
  top () {
    return this.cmp[0]
  }

  // 获取堆的大小
  size () {
    return this.count;
  }

}


module.exports = SmallHeap
