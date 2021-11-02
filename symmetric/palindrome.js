// 回文数
// “回文”是指正读反读都能读通的句子，它是古今中外都有的一种修辞方式和文字游戏，如“我为人人，人人为我”等。
// 在数学中也有这样一类数字有这样的特征，成为回文数（palindrome number）。
// 设n是一任意自然数。若将n的各位数字反向排列所得自然数n1与n相等，则称n为一回文数。
// 例如，若n=1234321，则称n为一回文数；但若n=1234567，则n不是回文数

function palindrome(arr) {
  let arr1 = arr;
  let len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] != arr1[len - 1 - i]) return false
  }
  return true;
}


let arr = [1, 2, 4, 3, 2, 1];
console.log(palindrome(arr));