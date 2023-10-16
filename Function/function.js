 // odd even
//  let a=20
// if(a%2===0)
// console.log('Even');
// else console.log('odd');
// console.log("********************************")
// function one()
// {
//     if(b%2===0)
//     {
//         return 'even';25

//     }
//     else return 'odd';
// }
// let x=+prompt('Enter a number')
// // let x=('Enter a number')
// console.log(one(x));
// console.log(23);
// console.log("********************************")
// check if typeof is number

// function one(a)
// {
//     if(typeof a===typeof 2)
//     {
//         return 'Number'
//     }else
//     {
//         return 'Not a number'
//     }
// }
// // console.log(one("hgdbokcs"))
// console.log(one(26543))

// let one = function(a,b)
// {
//     console.log(b);

//     if(a>b)
//     {
//         return 'A is greater'
//     }
//     else
//     {
//         return 'B is greater'
//     }
// }
// // console.log(one(10 , 5));
//    console.log(one(10));

// const one = (a,b,c) =>
// {
//    if(a>b && a>c)
//    {
//       return 'A is greater'
//     //   (true && false)=false
//    }
// else if(b>a && b>c)
//    {
//      return 'B is greater'
//    }
//    else
//    {
//     return 'C is greater'
//    }
// }
// console.log(one(50,20,30))

// Triangle

// function one (p,b,h)
// {    
// //      f  &&  f    &&  t = false   
//   if(p===h && h===b && p===b)
//   {
//     return 'Equilateral'
//   }
//             // f   ||    f  ||   t = t  
//   else if(p===h || h===b || p===b)
//   {
//     return 'Isocels'
//   }
//   else{
//     return 'Scalene'
//   }
// }
// console.log(one(50,50,35));

//  range  100>=num>=50
// (true && true && true && true) = last true

// const one = (a,b) => {
//     if(a>=50 && a<=100 && b>=50 && b<=100)
//     {
// return 'In range'
//     }else{
//         return 'Not In range'
//     }
// }
// console.log(one(49,100))

// function one(marks)
// {
//     if(marks>=40 && marks<=70)
//     {
//        return 'Passed and Grade C' 
//     }else if(marks>=40 && marks<=80)
//     {
//        return 'Passed and Grade B' 
//     }else if(marks>=40 && marks<=90)
//     {
//         return 'Passed and Grade A' 
//     }else if(marks>=40 && marks<=100)
//     {
//         return 'Passed and Grade A++'
//     }else{
//         return 'Faild'
//     }
// }
// let num = +prompt('Enter number')
// console.log(num)
// console.log(typeof num)
// console.log('Prompt Says: '+num)
// console.log(one(num))

function one(){
    return 'Orange'
    return 'Kiwi'
}
function two(){
    if( false) return 'pen'
    else return 'Jam'
}
console.log( one() );
console.log('******');
console.log(two());