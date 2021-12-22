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
    let idx = 0, l = idx * 2 + 1, r = idx * 2 + 2;
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

module.exports = Heap;