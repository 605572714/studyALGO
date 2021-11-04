// // 数据流中的第 K 大元素

// var KthLargest = function (k, nums) {
//   this.k = k
//   nums = nums.sort((a, b) => b - a);
//   if (nums.length > k) {
//     this.nums = nums.splice(0, k)
//   } else {
//     this.nums = nums
//   }
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {

//   if (this.nums.length < this.k) {
//     this.nums.push(val)
//     this.nums = this.nums.sort((a, b) => b - a)
//     console.log(this.nums);
//   } else if (val > this.nums[this.k - 1]) {
//     this.nums[this.k - 1] = val;
//     this.nums = this.nums.sort((a, b) => b - a)
//   }
// };




var KthLargest = function (k, nums) {
  this.stack = nums
  this.k = k
  this.sortArr = nums.concat().sort((a, b) => b - a)
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.stack.push(val)
  let low = 0
  let high = this.sortArr.length - 1
  while (high >= low) {
    const mid = Math.floor((low + high) / 2)
    const v = this.sortArr[mid]
    if (v === val) {
      this.sortArr.splice(mid, 0, val)
      break
    } else if (val > v) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  if (low > high) {
    this.sortArr.splice(low, 0, val)
  }
  return this.sortArr[this.k - 1]
};

let a = new KthLargest(5, [3, 6, 4])

console.log(a.add(10));