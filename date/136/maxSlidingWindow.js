// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。



// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]



// 提示：

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let len = nums.length;
  if (k >= len) return [Math.max(...nums)]
  if (k == 1) return nums
  let ans = []
  let temp = 0
  ans.push(getMax(temp, k))
  while (temp + k < len) {
    // console.log(nums[temp], ans[temp]);
    if (nums[temp + k] > ans[temp]) ans.push(nums[temp + k])
    else if (nums[temp] == ans[temp]) {
      if (nums[temp + k] >= nums[temp]) ans.push(nums[temp + k])
      else ans.push(getMax(temp + 1, k))
    } else {
      ans.push(ans[temp])
    }
    console.log(ans, temp);
    temp++
  }
  console.log(ans);
  return ans
  function getMax (temp, k) {
    let max = -Infinity
    for (let i = temp; i < temp + k; i++) {
      if (nums[i] > max) max = nums[i]
    }
    return max
  }
};


// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
maxSlidingWindow([7, 2, 4], 2)