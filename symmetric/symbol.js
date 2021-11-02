// 符号对称算法
// 这个算法顾名思义，就是如果所给符号是对称的就返回TRUE。否则就返回FALSE
// 什么事符号对称，给一个字符串"{}{}{}{}[][]()()","{{}([])[]}"
// 向上面两种，成对去掉之后字符串为空就可以
// 所以我们要怎么判断呢，我的理解是，先把它转换为数组，在从左往右依次遍历，
// 遇到左侧，填入新的数组，遇到右侧就判断上一个是不是对应的左侧
// 是就去掉上一个，不是就可以直接报错了，因为第一个右侧前面一定会是它的左侧，不然无法组队
// 最后数组为空则TRUE。反之FALSE

function symbol(str) {
  let arr = str.split(",");
  let res = [];
  let len = 0;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "}":
        if (res[len - 1] == '{') {
          res.pop()
          len--
        } else {
          return false
        }
        break;
      case "]":
        if (res[len - 1] == '[') {
          res.pop()
          len--
        } else {
          return false
        }
        break;
      case ")":
        if (res[len - 1] == '(') {
          res.pop()
          len--
        } else {
          return false
        }
        break;
      default:
        res.push(arr[i])
        len++
        break;
    }
  }
  if (res.length == 0) {
    return true
  } else {
    return false
  }
}


let str = "{,},{,},[,(,),],{,[,(,),],}"
console.log(symbol(str));