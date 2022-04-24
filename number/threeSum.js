// 三数之和

function threeSum (nums) {
  let ans = []
  const n = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n && nums[i] <= 0; i++) {
    const num = nums[i];
    if (nums[i] == nums[i - 1]) continue
    let l = i + 1, r = n - 1
    while (l < r) {
      let sum = num + nums[l] + nums[r]
      if (sum > 0) r--
      else if (sum < 0) l++
      else {
        ans.push([num, nums[l], nums[r]])
        break
        l++, r--
        while (l < r && nums[l] == nums[l - 1]) l++
        while (l < r && nums[r] == nums[r + 1]) r--
      }
    }
  }
  console.log(ans);
}

threeSum([0, 0, 0])

