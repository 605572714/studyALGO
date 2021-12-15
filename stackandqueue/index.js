// 堆与队列
// 自己实现一个大顶堆

class stack {

  constructor() {
    this.data = new Array();
    this.count = 0;
  }

  push (x) {
    let data = this.data
    data[this.count] = x;
    let index = this.count;
    this.count++;
    // index为x的下标，根据定义，需要将x向上进行调整
    // 假设当前节点的下标为i，其左孩子的下标为2i+1，右孩子的结点为2i+2；
    // ((2i+1)-1)/2=i,((2i+2)-1)/2=i，通过子结点寻找父节点
    // 下标从零还是从一开始，子结点的下标有区别
    let pre = Math.floor((index - 1) / 2);
    while (index != 0 && data[pre] < x) {
      [data[pre], data[index]] = [data[index], data[pre]]
      index = pre
      pre = Math.floor((index - 1) / 2);
    }
    this.data = data
    return;
  }

  pop () {
    // 弹出操作，将最后一位的元素值，提升到第一位
    if (this.size() == 0) return;
    let data = this.data;
    let num = data[0];
    [data[0], data[this.count - 1]] = [data[this.count - 1], data[0]];
    this.count--;
    let index = 0;
    let n = this.count - 1;
    while (index * 2 + 1 <= n) {
      let temp = index;
      if (data[temp] < data[index * 2 + 1]) temp = index * 2 + 1;
      if (index * 2 + 2 <= n && data[temp] < data[index * 2 + 2]) temp = index * 2 + 2;
      if (temp == index) break;
      [data[temp], data[index]] = [data[index], data[temp]]
    }
    this.data = data;
    return num;
  }

  // 获取堆顶元素
  top () {
    return data[0]
  }

  // 获取堆的大小
  size () {
    return this.count;
  }

}

let res = new stack()
res.push(1)
res.push(5)
res.push(3)
res.push(9)
res.push(7)
res.push(6)
res.push(4)
res.pop()
res.pop()
res.pop()
res.pop()
res.pop()
res.pop()
res.pop()
console.log(res.data);