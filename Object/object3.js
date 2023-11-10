// Date Object // Create Date,get date,set date
// let a = new Date()
// a = new Date('2023-10-23')

// console.log(a)
// a = new Date("May 10,2002 10:11:54")
// console.log(a)

// year month day hour minute second millisecond
// month = 0(jan)---->11(dec)

// a=new Date(2023,10,0,6,5,9,54545);
// console.log(a)

// year month day
// a=new Date(2024,4,20)
// console.log(a)
// a=new Date(2023,0)
// console.log(a)

// a=new Date(2022)
// console.log(a)

// millisecond 1sec = 1000ms
// a = new Date(48*60*60*1000)
// console.log(a)
// console.log(typeof a);

// let a = new Date()
// console.log(a)
// console.log(typeof a)

// let b = a.toString()
// console.log(b)
// console.log(typeof b)

// let a = new Date()
// // console.log(a);
// // console.log(typeof a)

// // let b = a.toUTCString()
// // console.log(b)
// // console.log(typeof b);

// let b = a.toISOString()
// console.log(b)
// console.log(typeof b)

// let c= new Date("2023-10-26T00:00-08:42")
// console.log(c)

// let a = new Date()
// a = new Date(2024,12);
// console.log(a)
// a = new Date("2024-04");   // month --> 0 to 11
// console.log(a)   // month = 1-12

// //    mm/dd/yyyy
// a = new Date("10/23/2023")
// console.log(a)

// date to millisecond

// let a = Date.parse("October 26,2023")
// console.log(a);
// let b = new Date(a)
// console.log(b)

// Get date

// let a = new Date()
// console.log(a)

// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMilliseconds())

// setDate

// let a = new Date()
// console.log(a)

// let b = a.setFullYear(2020)
// b=a.setMonth(1)
// b=a.setDate(6)
// b=a.setMinutes(45)

// console.log(b)
// console.log(new Date(b))


// Exercise
// let a =new Date()
// console.log(a)
 
// let hr = a.getHours()
// console.log(hr)
// let min = a.getMinutes()
// console.log(min)
// let sec = a.getSeconds()
// console.log(sec)
// let ms = a.getMilliseconds()
// console.log(ms);

// if(hr>=12 && min>0 && sec>0)
// {
//     console.log(`${hr} : ${min}:${ms} pm`);
// }else if(hr<=12 && min>0  && sec>0)
// {
//     console.log(`${hr}:${min}:${ms} am`);
// }

// let  a = new Date( 2023,9,26,13,25)
// console.log(a);

// let hr = a.getHours()
// console.log(hr);
// let min = a.getMinutes()
// console.log(min);

// if( hr>=12 && min>0 ){
//         console.log( `${hr} : ${min}   pm` );
//     }else if( hr<=12 && min>0  ){
//         console.log( `${hr} : ${min}   am`  );
//     }

