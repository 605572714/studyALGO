// 398. 随机数索引

// 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。

// 注意：
// 数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。

// 示例:

// int[] nums = new int[] {1,2,3,3,3};
// Solution solution = new Solution(nums);

// // pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。
// solution.pick(3);

// // pick(1) 应该返回 0。因为只有nums[0]等于1。
// solution.pick(1);

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], [i])
    } else {
      map.get(nums[i]).push(i)
    }
  }
  this.map = map
};

/**
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function (target) {
  console.log(target, this.map);
  if (this.map.has(target)) {
    let list = this.map.get(target)
    console.log(list[Math.floor(Math.random() * list.length)]);
    return list[Math.floor(Math.random() * list.length)]
  }
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/

var solution = new Solution([1, 2, 3, 3, 3])
solution.pick(3);
