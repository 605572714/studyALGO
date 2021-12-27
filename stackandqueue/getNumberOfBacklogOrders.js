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
  // ---
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
    let { res, cnt, cmp } = this;
    res[cnt] = val;
    this.cnt++;
    console.log(cnt);
    while (cnt) {
      let par = (cnt - 1) >> 1;
      if (!this.cmp(res[par], res[cnt])) return;
      this.swap(res, cnt, par)
      cnt = par;
      par = (cnt - 1) >> 1;
    }
  }

  pop () {
    if (this.size() == 0) return;
    this.cnt--;
    let { res, cnt, cmp } = this;
    const el = res[0];
    this.swap(res, 0, cnt);
    let idx = 0, l = 1, r = 2;
    while (l < cnt) {
      let temp = idx;
      if (cmp(res[idx], res[l])) temp = l;
      else if (r < cnt && cmp(res[temp], res[r])) temp = r;
      else if (res[temp] == res[idx]) break;
      this.swap(res, temp, idx);
      idx = temp;
      l = idx * 2 + 1, r = idx * 2 + 2;
    }
    this.cmp = cmp
    return el;
  }

  large = (a, b) => a < b

  small = (a, b) => a > b;

  swap = (res, i, j) => [res[i], res[j]] = [res[j], res[i]];

  top = () => this.res[0];

  size = () => this.cnt;

  isEmpty = () => this.cnt == 0

}



getNumberOfBacklogOrders([[361358476, 417104487, 1], [862783832, 125101075, 1], [380637994, 155365340, 1], [159193302, 19502991, 0], [874082362, 279423112, 1], [921145968, 136492672, 1], [443360004, 276940131, 1], [794053327, 451780969, 1], [465469967, 360673537, 1], [231353007, 768224767, 1], [431541765, 768992353, 1], [98115561, 69193206, 0], [221340730, 160635367, 0], [784009204, 28063369, 0], [271896932, 167195373, 1], [831831846, 106249291, 1], [697567471, 776858211, 0], [895889943, 3216942, 0], [459224380, 657013980, 0], [590124178, 234373334, 1], [372269019, 50503221, 0], [788685815, 593600836, 1], [896477150, 721174573, 0], [284900527, 735034712, 1], [192244583, 515087841, 0], [844415960, 230016784, 0], [930286848, 418455523, 0], [718012902, 480277114, 1], [732248290, 545265852, 1], [971820494, 422069342, 0], [650807021, 916843078, 1], [113633750, 160130902, 1], [658886615, 972154472, 0], [179447414, 559143144, 1], [447325175, 797980285, 1], [933007522, 528792662, 0], [846872697, 815681197, 1], [924543260, 521811016, 0], [9193275, 813655937, 1], [994083976, 950433240, 1], [60600678, 580396084, 1], [321976731, 815888327, 0], [245414606, 545475655, 1], [290272852, 758342564, 0], [441998361, 159275467, 0], [275217377, 209713152, 1], [602207362, 676485310, 0], [572068117, 895979413, 0], [444316431, 290084468, 1], [515553868, 746704591, 1], [286750538, 527557772, 0], [535537489, 394798113, 1], [259483159, 363348839, 0], [650399949, 814880683, 0], [793717384, 944796481, 1], [574197634, 160448754, 0], [541108369, 350046965, 0], [692632493, 817555809, 0], [338622061, 668455470, 1], [515833047, 354379485, 0], [137355481, 952682491, 0], [749846261, 275381976, 0], [94520165, 682108071, 0], [604594598, 184773425, 0], [242931949, 604796198, 0], [540110156, 609428853, 1], [453403106, 351801804, 0], [830849806, 21530244, 1], [882839191, 660753052, 0], [90801442, 797844568, 0], [300833006, 730885919, 1], [288916292, 645468070, 1], [24830042, 130627521, 1], [372613361, 149723829, 0], [269317728, 964874768, 0], [731435700, 616336618, 0], [372590210, 83080911, 0], [778386822, 110820573, 1], [340397622, 267310403, 1], [568682633, 53436389, 1], [33468510, 84093035, 0], [994029194, 428774351, 1], [773148979, 685453290, 0], [100782778, 729762391, 1], [293811407, 8550044, 1], [120486825, 378346370, 0], [650859744, 995610677, 1], [435040447, 97788900, 1], [606062809, 449598339, 1], [323298518, 964563097, 0], [679388031, 324990992, 0], [57916619, 644343256, 0], [188062365, 258322413, 0], [963395373, 466661374, 1], [586216675, 21459925, 1], [578567465, 290913574, 1], [508131224, 135370114, 1], [761146345, 111404496, 1], [74168486, 702679478, 1]])
// 558895984
// 76793928
// let heap = new Heap()
// heap.push(6)
// heap.push(7)