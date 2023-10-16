// (1)------------------------------------------
// high order function and call back

// function one()
// {
//     return function two()
//     {
//         return function three()
//         {
//             return 'Func three is Returned'
//         }
//     }
// }
// let a=one()
// console.log(a)

// let b=one()
// console.log(b)

// const c=b()
// console.log(c)

// const d=c()
// console.log(d)

// high order func = one
// Call Back Func = func returned/func in parameter/func passed in argument

// (2)------------------------------------------
// function one(x)
// {
//     return function two(y)
//     {
//         return function three(z)
//         {
//             return 'Func three is returns: '+(x+y+z)
//         }
//     }
// }
// let a=one(10)
// console.log(a)

// let b=a(20)
// console.log(b)

// const c = b(30)
// console.log(c)

// console.log('*********');

// // Currying
//  console.log(one(10)(20)(30))

// (3)------------------------------------------
// function one(para)
// {
//     return para
// }
// let a=one(()=>'Func Two Returned')
// console.log(a)

// let b = a()
// console.log(b)

// console.log('*********');
// console.log(one(()=>'Func Two Returned'))

// (4)------------------------------------------

// function one( a=()=> 'Func Two Returned')
// {
//     return a
// }
// let x=one()
// console.log(x)

// let y = x()
// console.log(y)

// console.log('*********');
// console.log(one()())

// (5)------------------------------------------
// let z=67
// function one()
// {
//     return function two()
//     {
//         return function three(z)
//         {
//             return 'Func Three is Returns'
//         }
//     }
// }
// let a=one()
// console.log(a)

// let b = three();
// console.log(b);

// (6)------------------------------------------
// Infinite Currying
// function sum(a)
// {
//     return function(b)
//     {
//         return function()
//         {
//            return a+b
//         }
//     }
// }

// console.log(sum(10)(20)())

// (7)------------------------------------------
//  x1=5        x2=7      x3=7*4
// function pen(x)
// {
//     // y1 = 2  y2 = nothing y3 = 3
//      return function(y)
//      {
//         if(y) return pen(x+y) // pen(7) pen(10)
//         else return x
//      }
// }
// console.log(pen(5)(2)(3)(4)(5)())