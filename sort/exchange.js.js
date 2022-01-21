// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。



// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let len = nums.length
  let l = 0
  let r = len - 1
  while (l <= r) {
    if (nums[l] % 2 == 1) l++
    else {
      swap(l, r)
      r--
    }
    // console.log(l, r, nums);
  }
  function swap (i, j) { [nums[i], nums[j]] = [nums[j], nums[i]] }
  console.log(nums);
  return nums
};

exchange([1, 2, 3, 4])