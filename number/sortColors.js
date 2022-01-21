// 75. 颜色分类

// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。



// 示例 1：

// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]

// 示例 2：

// 输入：nums = [2,0,1]
// 输出：[0,1,2]

// 示例 3：

// 输入：nums = [0]
// 输出：[0]

// 示例 4：

// 输入：nums = [1]
// 输出：[1]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length
  let pre = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      swap(i, pre)
      pre++
    }
  }
  for (let i = pre; i < n; i++) {
    if (nums[i] == 1) {
      swap(i, pre)
      pre++
    }
  }
  function swap (i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
};
var sortColors = function (nums) {
  const n = nums.length
  let p0 = 0, p2 = n - 1
  for (let i = 0; i <= p2; i++) {
    while (i <= p2 && nums[i] == 2) {
      swap(i, p2)
      p2--
    }
    if (nums[i] == 0) {
      swap(i, p0)
      p0++
    }
  }

  function swap (i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
};
sortColors()