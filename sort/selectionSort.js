// 选择排序
// 百度百科：选择排序（Selection sort）是一种简单直观的排序算法。
// 它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，
// 存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，
// 然后放到已排序的序列的末尾。以此类推，直到全部待排序的数据元素的个数为零。
// 选择排序是不稳定的排序方法。
// 要想做好选择排序，拢共分几步？
// 第一步，选出数组中最小（大）的一个
// 第二步，把它放到最前（候）面
// 第三步，重复前两步，直到最后
// 那么我们就开始尝试一下
function selectionSort(arr) {
  // let minIndex = 0; // 假定一个最小值的位置，比如说首位
  // 第一步
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[minIndex] > arr[i]) minIndex = i
  // }
  // 第二步
  // [arr[0], arr[minIndex]] = [arr[minIndex], arr[0]];
  // 第三步
  // 每一次排出最小的一个数，所以需要排序的次数会比数组的长度少一位，
  // 因为倒数第二次排序就会把最后两个数排好，最后一个数不需要和自己进行比较
  for (let i = 0; i < arr.length - 1; i++) {
    // 假定一个最小值的位置，比如说首位，此时的首位就不是数组的首位，而是每次排序的首位
    let minIndex = i;
    // 此时就需要从已经排好序的下一位开始查找
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  console.log(arr);
}

let arr = [4, 2, 7, 1, 6, 8, 3]
selectionSort(arr)