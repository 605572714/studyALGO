// 347. 前 K 个高频元素

// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。



// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

let Heap = require('./heap')

var topKFrequent = function (nums, k) {
  let map = new Map();
  let heap = new Heap((a, b) => a.val < b.val)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }
  map.forEach((val, key) => {
    heap.push({
      key, val
    })
  })
  for (let i = 0; i < k; i++) {
    res.push(heap.pop().key)
  }

  return res
};
topKFrequent([1, 1, 1, 2, 2, 3], 2)


