// 剑指 Offer II 004. 只出现一次的数字
// 给你一个整数数组nums ，除某个元素仅出现一次外，其余每个元素都恰出现三次 。
// 请你找出并返回那个只出现了一次的元素。

// 输入：nums = [2,2,3,2]
// 输出：3

// 输入：nums = [0,1,0,1,0,1,100]
// 输出：100


var singleNumber = function (nums) {
  // 数组排序
  nums = nums.sort()
  // 数组长度
  let len = nums.length;
  // 如果只出现一次的数出现在了数组的最后，则它与前一个数不同
  if (nums[len - 1] != nums[len - 2]) return nums[len - 1]
  // 以3N+2的数（就是三个数中间的那一个）为基准，每三个数遍历一次，
  // 独一个的数一定会出现在3N+1的位置上，所以只需要判断3N+1==?3N+2
  for (let i = 1; i < len; i += 3) {
    if (nums[i - 1] != nums[i]) return nums[i - 1]
  }
};