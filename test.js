// // let a = "A"
// // {
// //   console.log(a);
// // }
// // let b = "B"
// // {
// //   console.log(b); // Cannot access 'b' before initialization
// //   let b = "C"
// // }

// // function H () {
// //   let h = "韩梅梅"

// //   function L () {
// //     let l = "李雷"
// //     console.log(l + "he" + h);
// //   }
// // }



// // function L () {
// //   let l = "李雷"
// //   console.log(a + "和" + b);
// // }


// // function H () {
// //   let h = "韩梅梅"
// // }

// function f1 () {
//   var sum = 0
//   function f2 () {
//     sum++
//     return f2
//   }
//   f2.valueOf = function () {
//     return sum
//   }
//   f2.toString = function () {
//     return sum++
//   }
//   return f2
// }

// console.log(+f1());      // 0
// console.log(+f1()());    // 1
// console.log(+f1()()());  // 2


// // 父级函数
// function f1 () {
//   // 子参数一
//   var sum = 0
//   // 子函数一
//   function f2 () {
//     sum++
//     return f2
//   }
//   // 子函数一的函数一
//   f2.valueOf = function () {
//     return sum
//   }
//   // 子函数一的函数二
//   f2.toString = function () {
//     return sum++
//   }
//   return f2
// }
// console.log(f1()); // f2

// function f1 () {
//   // 子参数一
//   var sum = 0
//   // 返回值
//   return f2
// }

// console.log(+f2());


var lilei = {
  name: "Li Lei",
  intr: function () {
    console.log(`我是${this.name}`);
  }
}

lilei.intr()