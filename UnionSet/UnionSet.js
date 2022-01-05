// class QuickFind {
//   constructor(num) {
//     this.num = num;
//     this.color = new Array(num + 1)
//     for (let i = 0; i <= num; i++) {
//       this.color[i] = i

//     }
//   }
//   find (x) {
//     return this.color[x]
//   }
//   merge (a, b) {
//     if (this.color[a] == this.color[b]) return;
//     let cb = this.color[b]
//     for (let i = 0; i <= this.num; i++) {
//       if (this.color[i] == cb) this.color[i] = this.color[a]
//     }
//   }
// }

// class QuickUnion {
//   constructor(n) {
//     this.father = new Array(n + 1)
//     this.n = n;
//     for (let i = 0; i <= this.n; i++) {
//       const element = n[i]
//     }
//   }
//   find (x) {
//     if (this.father[x] === x) return x
//     return this.find(this.father[x])
//   }
//   merge (a, b) {
//     let fa = find(a), fb = find(b)
//     if (fa === fb) return
//     this.father[fa] = fb
//     return
//   }
// }


// class UnionSet {
//   constructor(n) {
//     this.fa = new Array(n + 1)
//     this.size = new Array(n + 1)
//     this.n = n
//     for (let i = 0; i <= n; i++) {
//       this.fa[i] = i
//       this.size[i] = 1
//     }
//   }

//   find (x) {
//     if (this.fa[x] === x) return x
//     let root = find(this.fa[x])
//     fa[x] = root
//     return root
//   }

//   merge (a, b) {
//     let ra = find(a), rb = find(b)
//     if (ra == rb) return
//     if (this.size[ra] < this.size(rb)) {
//       this.fa[ra] = rb
//       this.size[rb] += this.size[ra]
//     } else {
//       this.fa[rb] = ra
//       this.size[ra] += this.size[rb]
//     }
//     return
//   }
// }

// finally
class UnionSet {
  constructor(n) {
    this.fa = new Array(n + 1)
    this.n = n
    this.cnt = new Array(n + 1)
    for (let i = 0; i < n; i++) {
      this.fa[i] = i
      this.cnt[i] = 1
    }
  }
  get (x) {
    return this.fa[x] = (this.fa[x] == x ? x : this.get(this.fa[x]))
  }
  merge (a, b) {
    if (this.get(a) == this.get(b)) return
    this.cnt[this.get(b)] += this.cnt[this.get(a)]
    this.fa[this.get(a)] = this.get(b)
    return
  }
}

module.exports = UnionSet