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


module.exports = Heap;
