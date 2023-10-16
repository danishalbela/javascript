//Arrays
// let a=45
// let b =true
// let c = 'Dark'

// let d = [45,true,'Dark']
// console.log(d)
// console.log(a)
// console.log(b)
// console.log(c)

// Creating an instance
// let e = new Array(45,true,'Dark')
// console.log(e);

// let d=[45,true,'Dark']
// console.log(d)

// for(let i = 0; i<d.length; i++)
// {
//     // console.log(i +" ("+  d[i]+" )");
//     console.log( `The element ${d[i]} has index value of ${i}` );
// }
// console.log("*****************************************");

// Not possible
// const a = 'encil';
// const a = 55;

// But possible in array
// const a = [55,'pencil']
// console.log(a);
// console.log("***********Update Index Value**************");

// a[0] = 'Danish';
// a[1] = 999;
// a[2] = false
// console.log(a);

// let b=a.toString();
// console.log(b);
// console.log(typeof b);
// console.log("*****************************************");

// Loop in Array
// let a=[55,true,'Rice',false,'Air']
// console.log(a);
// console.log(a.length);

// for of
// for(let result of a)
// {
//     console.log(result);
// }

// // for in
// for(let result in a)
// {
//     console.log(result);
// }

// for Each
// console.log(a.forEach)
// let c=a.forEach( ()=>{})
// console.log("*****************************************");

// let w=[]
// console.log("W is "+w)
// console.log("*****************************************");

// // x=element   y=index of element  z=OriginOfElement
// let c=a.forEach(function(x,y,z){
//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(x+'10')
//     w.push(x+' 10')
//     w.push(10)
// })
// console.log(c)
// console.log(w)
// console.log("*****************************************");

// let d = a.forEach((m,n) => {
//     console.log(m +' has index value of ' +n)
//     // return (m+'has index of value'+n) //NEVER RETURNS
// })
// console.log(d)
// ex1
// function one(para)
// {
//     console.log(para);

// let ans = []
// console.log(ans)

// let a=para.split(' ') //one space
// // let a=para.split('  ') //two space
// // let a=para.split('') //no space
// console.log(a)

// for(const b of a)
// {
//     console.log(b)
//     ans.push(b[0].toUpperCase()+b.slice(1))
// }
// console.log(ans)
// return ans.join('');
// }
// console.log(one('its arguement of parameter one'));
// console.log("*****************************************");

// let a=[45,533,'Ear']
// console.log(a);
// console.log(typeof a)

// // to check if a is array
// console.log(Array.isArray(a)) //true
// console.log(Array.isArray())  //false
// console.log(a instanceof Array)

// // method
// // push pop shift unshift

// console.log(a.push('INDIA')) // Add element in last  
// console.log(a.pop())         // pop element in last  

// console.log(a.shift())       // pop element from starting  
// console.log(a.unshift(545))  // Add element in start  
// console.log(a)

// function one(para){
//     console.log(para)
//     let ans = []
//     console.log(ans)
  
//     let a = para.split(' ')
//     console.log(a)

//     for(const b of a)
//     {
//         console.log(b)
//         ans.unshift(b[0].toUpperCase()+b.slice(1))
//     }
//     console.log(ans)
//     return ans.join(' ')
// }
// console.log(one('danish is great man'))
