// let a=[1,2,3,4]
// console.log(a)

// let b=a.map((ele)=>{
//     return [ele*10]
// })
// console.log(b)

// let c = b.flat(Infinity)
// console.log(c)

//  console.log("******************************")

// //  using chain methods
// let d=[1,2,3,4].map(ele=>[ele*10]).flat(Infinity)
// console.log(d)
// console.log("******************************")

// //flatmap = map--> flat
// let e=[1,2,3,4]
// console.log(e)
// let f=e.flatMap((ele)=>{
//     return [ele*2]
// })
// console.log(f)

// every
// let a=[33,6,199,75,651]
// console.log(a)

// let b=a.every((ele)=>{
//     return ele > 5
// })
// console.log(b)

// some
// let a = [3,6,199,5,9]
// console.log(a)
// let b = a.some((ele)=>{
//     return ele>4
// })
// console.log(b)

// fill
// let a=['ant','kite','jug']
// console.log(a)

// let b=a.fill('cat')
// console.log(b)

// SubArray Methods
// slice = Never Mutates

// let a = ['one','45',76,'true','orange',false]
// console.log(a)

// console.log(a.slice(1))
// console.log(a.slice(3))
// console.log(a)

// console.log("******************************")

// console.log(a.slice(1,4))
// console.log(a.slice(2,2))

// console.log(a.slice(-5)) 
// console.log(a.slice(-4,4))

// console.log("******************************")
// console.log(a)

// splice  =  it Mutates
// let a = ['one','45',76,'true','orange',false]
// console.log(a)

// console.log(a.splice(2))
// console.log(a)  //its mutates
// console.log(a.splice(5))

// console.log( a.splice(2,2) ); // start, length of element to be extracted
// console.log( a.splice(1,4) );

// console.log( a.splice(1,3,'RUBELES' ) );  // Rubble print on the place of 1,3 element
// console.log( a.splice(3,2,'IPhone') );
// console.log(a)

// let a = [ 654,765,567,345]
// console.log(a);

// let b = a.toString()
// console.log(b);
// console.log(typeof b);

// console.log('***********');

// // two properties = locales(optional),options(optional)
// let c = a.toLocaleString("en-US",{
//     style:'currency',
//     currency:'USD'
// })
// console.log(c)
// console.log(typeof c)
// console.log('***************');

// let d = a.toLocaleString()
// console.log(d)
// console.log(typeof d)
// console.log('***********');

// let e = a.toLocaleString("ja-JP-u-ca-japanese",
// {
//     style:'currency',
//     currency:'YEN'
// })
// console.log(e)
// console.log(typeof e)

// OBJECT
// {} = Object Literal
// let a={
//     // key:value
//     name:'DANISH',
//     age:26,
//     city:'Ghazipur'
// }
// console.log(a)
// console.log(typeof a)

// // DOT METHOD
// console.log(a.name)
// console.log(a.age)
// console.log(a.city)

// // BREACKET METHOD
// console.log(a["name"])
// console.log(a["age"])
// console.log(a["city"])
// console.log("********************************")

// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(Object.entries(a))

// console.log(Object.entries(a).flat(Infinity))
// --------------------------------------------------

// let club = {
//     name:"Avul Qasim Ansari",
//     LocatedAt:"ImliTale Bahadurganj",
//     starters:['Garlic Bread','Milo','Tea'],
//     timings:{
//         mon:{
//             open:'8:00',
//             close:'6:00'
//         },
//         tue:{
//             open:'10:00',
//             close:'6:00'
//         },
//         wed:{
//             open:'11:00',
//             close:'6:00'
//         }

//     }
// }
// console.log(club);
// console.log(Object.keys(club));
// console.log(Object.values(club));
// console.log(Object.entries(club));
// console.log('*********');

// console.log(club.name);
// console.log(club.starters);
// console.log(club.LocatedAt);
// console.log(club.timings);
// console.log(club.timings.mon.open);
// console.log(club.timings.mon.close);
// console.log(club.timings.tue.close);
// console.log(club.timings.wed.open);
// console.log('*********');

// console.log(club["LocatedAt"]);
// console.log(club["timings"]["mon"]["close"]);