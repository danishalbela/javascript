//  let a = [11,22,33]
// console.log(a);
// let b = ['A','B','C']
// console.log(b);
// let c = ['ant','bull','car']
// console.log(c);
// console.log('**************')

// let d=a+b
// console.log(d)
// console.log(typeof d)

// let e = [a,b,c]
// console.log(e)
// console.log(typeof e)
// console.log('**************')

// let f = a.concat(b).concat(c)
// console.log(f)
// console.log(typeof f)
// console.log('**************')

// // // spread operator = ... (on right hand side of equal to)
// let g = [...a,...b,'harry',...c]
// console.log(g)
// console.log(typeof g)
// console.log('**************')

// Destructing of Array
// let c = ['ant',80,'car',99]
// console.log(c)
// // console.log(typeof c)

// let x = c[0]
// console.log(x)

// let y = c[1]
// console.log(y)

// let z = c[2]
// console.log(z+10)
// console.log('**************')

// // //Destructuring
// let [e,f,g,h]  =  c  //['ant',80,'car',99]
// console.log(c)
// console.log(e)
// console.log(g)
// console.log(f)
// console.log('**************')

// Rest Operator  = ...(on left hand side(LHS))
// let[i,...k] = ['dan',50,'car',654,'hen','tiger','true',567]
// console.log(i)
// // console.log(j);
// // console.log(k)
// console.log('**********');


//  let a = [11,22,33]
//  console.log(a);
//  let b = ['A','B','C']
//  console.log(b);

//  let c = [ ...a,7890,'GRANDMA' ]
//  console.log(c);

//  console.log('**********');

// let arr =  ['ant',80,'car',99,'hen','tiger',true,567]
//  console.log(arr);

//  let [ x,...y ] = arr
//  console.log(x);
//  console.log(y);

 //Method

// concat
// let a = [11,22,33]
// console.log(a);
// let b = ['A','B','C']
// console.log(b);

// let c = a.concat(b)
// console.log(c);

//indexof

// let b = ['A','B','C']
// console.log(b);
// console.log( b.indexOf('B') );
// console.log(b.length);

//includes
// let a = [11,22,33]
// console.log(a);
// console.log( a.includes(111) );

// foreach pop push shift unshift
// FIND = RETURNS THE FIRST VALUE ONLY
// let a = [11,55,,23,55,6548,96,5656]
// console.log(a)

// let b=a.find((ele,ind,Ofor)=>
// {
//     return ele > 11;
// })
// console.log(b)

//FILTER = return new array with filtered number of element
// let  a = [15,88,36,6995,66,5,66,8]
// console.log(a)
// let b = a.filter((x,y,z)=>
// {
// //   return x>15;
// //   return x%2===0
// })
// console.log(b)

// Map = return a new array of our choice , having same number
// of element as the array on which it is appeled upon
// let a=[11,55,22,4,86,665,66]
// console.log(a)
// let b = a.map((ele,ind,aOfOr)=>
// {
// //    return ele+"**"
//         return ele/100
// })
// console.log(b)

//filter vs map vs find

// let a = [11, 22, 33, 44, 55, 200, 255];
// console.log(a);

// let b = a.map((ele, ind, aOfOr) => 
// {
//   return ele > 33;
// });
// console.log(b);

// console.log("**********");

// let c = a.filter((ele, ind, aOfOr) => {
//     return ele > 33;
//   });
//   console.log(c);
  
//   console.log("**********");


// let d = a.find((ele, ind, aOfOr) => {
//     return ele > 33;
//   });
//   console.log(d);
  
//   console.log("**********");
  
//   foreach never returns and loops over an array
//   let e = a.forEach((ele, ind, aOfOr) => {
//   console.log(ele );
//   });
  
//   console.log("**********");
  
// flat
// let w  = [1,2,[3,4,[5,6,[7,8,[9,10,]]]]]   //Nesting Array
// console.log(w);

// console.log(w.flat(1))
// console.log(w.flat(2))
// console.log(w.flat(3))
// console.log(w.flat(4))

// console.log(w.flat(Infinity))

//reduce

// let a = [1,2,3,4]
// console.log(a);
// w= accumulator
//x = element
// y = index
// z= ele's Origin

// let b = a.reduce( (w,x,y,z)=>{
    // return w + x
    // return w
    // return x
    // return y
    // return z
// } )
// console.log(b);

///  w    x     return
//   0    1        1
//   1    2      3
//   3    3       6
//   6    4       10

// let a = ['Humpty',' Dumpty',' sat',' on',' a',' wall']
// console.log(a);

// let b = a.reduce((acc,ele)=>acc+ele)
// console.log(b);

// let c = [ 10,3,2,1]
// console.log(c);
// let d  = c.reduce((acc,ele)=>{
//     return acc-ele
// })
// console.log(d);

// chain method
// forEach can not be chained

// let arr = [1,[2,[3,[4,[5,[6,[7,8]]]]]]]
// console.log(arr)
// // flat filter map
// let result = arr
// .flat(Infinity)

// .filter(ele=>ele>3)
// .map(ele=>ele*2)
// .reduce((acc,ele)=>acc+ele)
// console.log(result)

// sort

// let a = ['r','S','y','W','R','a','C']
// console.log(a);

// let b = a.sort()
// console.log(b);

// let a = [50,34,78,21,19,30]
// console.log(a);

// let b = a.sort()
// console.log(b);


// let a = [950,3004,221,178,221,10019,3000]
// console.log(a);

// let b = a.sort()
// console.log(b);

// //  x-y   -ve     return  x then y
// //  x-y   +ve     return  y then x
// //  x-y   0       return  no change

// // x     y    result   return
// // 950  3004    -ve      950, 3004
// // 3004 178     +ve        178, 3004  
// //221    221     0         221, 221 


// let a = [50,34,78,21,19,30]
// console.log(a)
// let c = a.sort((x,y)=>{
//     return x-y
// })
// console.log(c);

// let d = a.sort((x,y)=>{
//         return y-x
//     })
//     console.log(d);

    let a = [950,3004,221,178,221,10019,3000]
console.log(a);

let b = Math.max.apply(null,a)
console.log(b);

let c = Math.min.apply(null,a)
console.log(c);