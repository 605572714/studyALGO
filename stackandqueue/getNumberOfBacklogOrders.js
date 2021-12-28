// 1801. 积压订单中的订单总数

// 给你一个二维整数数组 orders ，其中每个 orders[i] = [pricei, amounti, orderTypei] 表示有 amounti 笔类型为 orderTypei 、价格为 pricei 的订单。

// 订单类型 orderTypei 可以分为两种：

//     0 表示这是一批采购订单 buy
//     1 表示这是一批销售订单 sell

// 注意，orders[i] 表示一批共计 amounti 笔的独立订单，这些订单的价格和类型相同。对于所有有效的 i ，由 orders[i] 表示的所有订单提交时间均早于 orders[i+1] 表示的所有订单。

// 存在由未执行订单组成的 积压订单 。积压订单最初是空的。提交订单时，会发生以下情况：

//     如果该订单是一笔采购订单 buy ，则可以查看积压订单中价格 最低 的销售订单 sell 。如果该销售订单 sell 的价格 低于或等于 当前采购订单 buy 的价格，则匹配并执行这两笔订单，并将销售订单 sell 从积压订单中删除。否则，采购订单 buy 将会添加到积压订单中。
//     反之亦然，如果该订单是一笔销售订单 sell ，则可以查看积压订单中价格 最高 的采购订单 buy 。如果该采购订单 buy 的价格 高于或等于 当前销售订单 sell 的价格，则匹配并执行这两笔订单，并将采购订单 buy 从积压订单中删除。否则，销售订单 sell 将会添加到积压订单中。

// 输入所有订单后，返回积压订单中的 订单总数 。由于数字可能很大，所以需要返回对 109 + 7 取余的结果。



// 示例 1：

// 输入：orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]
// 输出：6
// 解释：输入订单后会发生下述情况：
// - 提交 5 笔采购订单，价格为 10 。没有销售订单，所以这 5 笔订单添加到积压订单中。
// - 提交 2 笔销售订单，价格为 15 。没有采购订单的价格大于或等于 15 ，所以这 2 笔订单添加到积压订单中。
// - 提交 1 笔销售订单，价格为 25 。没有采购订单的价格大于或等于 25 ，所以这 1 笔订单添加到积压订单中。
// - 提交 4 笔采购订单，价格为 30 。前 2 笔采购订单与价格最低（价格为 15）的 2 笔销售订单匹配，从积压订单中删除这 2 笔销售订单。第 3 笔采购订单与价格最低的 1 笔销售订单匹配，销售订单价格为 25 ，从积压订单中删除这 1 笔销售订单。积压订单中不存在更多销售订单，所以第 4 笔采购订单需要添加到积压订单中。
// 最终，积压订单中有 5 笔价格为 10 的采购订单，和 1 笔价格为 30 的采购订单。所以积压订单中的订单总数为 6 。

// 示例 2：

// 输入：orders = [[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]
// 输出：999999984
// 解释：输入订单后会发生下述情况：
// - 提交 109 笔销售订单，价格为 7 。没有采购订单，所以这 109 笔订单添加到积压订单中。
// - 提交 3 笔采购订单，价格为 15 。这些采购订单与价格最低（价格为 7 ）的 3 笔销售订单匹配，从积压订单中删除这 3 笔销售订单。
// - 提交 999999995 笔采购订单，价格为 5 。销售订单的最低价为 7 ，所以这 999999995 笔订单添加到积压订单中。
// - 提交 1 笔销售订单，价格为 5 。这笔销售订单与价格最高（价格为 5 ）的 1 笔采购订单匹配，从积压订单中删除这 1 笔采购订单。
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  const mod = 1000000007
  const buyOrder = new Heap((a, b) => a.price < b.price);
  const sellOrder = new Heap((a, b) => a.price > b.price);
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    let [price, amount, orderType] = orders[i]
    if (orderType == 0) {
      while (!sellOrder.isEmpty() && sellOrder.top().price <= price && amount > 0) {
        let sell = sellOrder.pop();
        if (amount < sell.amount) {
          sellOrder.push({ price: sell.price, amount: sell.amount - amount })
          total -= amount
          amount = 0
        } else {
          amount -= sell.amount;
          total -= sell.amount
        }
      }
      if (amount > 0) {
        buyOrder.push({ price, amount })
        total += amount
      }
    } else {
      while (!buyOrder.isEmpty() && buyOrder.top().price >= price && amount > 0) {
        let buy = buyOrder.pop()
        if (amount < buy.amount) {
          buyOrder.push({ price: buy.price, amount: buy.amount - amount })
          total -= amount
          amount = 0
        } else {
          amount -= buy.amount
          total -= buy.amount
        }
      }
      if (amount > 0) {
        sellOrder.push({ price, amount })
        total += amount
      }
    }
  }
  console.log(total % mod);
  return total % mod
};
class Heap {
  constructor(cmp = "large") {
    if (cmp == "large") {
      this.cmp = this.large;
    } else if (cmp == "small") {
      this.cmp = this.small
    } else {
      this.cmp = cmp
    }
    this.res = [];
    this.cnt = 0;
  }

  push (val) {
    this.cnt++;
    this.res.push(val)
    this.shiftUp(this.cnt - 1)
  }

  pop () {
    this.cnt--;
    const res = this.res[0]
    const pop = this.res.pop()
    if (this.cnt) {
      this.res[0] = pop
      this.shiftDown(0)
    }
    return res
  }

  shiftUp (i) {
    if (i === 0) return
    const par = this.getParentIndex(i)
    if (this.cmp(this.res[par], this.res[i])) {
      this.swap(par, i)
      this.shiftUp(par)
    }
  }

  shiftDown (i) {
    const l = this.getLeftIndex(i)
    const r = this.getRightIndex(i)
    if (l < this.cnt && this.cmp(this.res[i], this.res[l])) {
      this.swap(i, l)
      this.shiftDown(l)
    }
    if (r < this.cnt && this.cmp(this.res[i], this.res[r])) {
      this.swap(i, r)
      this.shiftDown(r)
    }
  }

  getParentIndex (i) {
    return (i - 1) >> 1
  }

  getLeftIndex (i) {
    return i * 2 + 1
  }

  getRightIndex (i) {
    return i * 2 + 2
  }

  large = (a, b) => a < b

  small = (a, b) => a > b;

  swap = (i, j) => [this.res[i], this.res[j]] = [this.res[j], this.res[i]];

  top = () => this.res[0];

  size = () => this.cnt;

  isEmpty = () => this.cnt === 0

}



getNumberOfBacklogOrders([[27, 30, 0], [10, 10, 1], [28, 17, 1], [19, 28, 0], [16, 8, 1], [14, 22, 0], [12, 18, 1], [3, 15, 0], [25, 6, 1]])
// 82




