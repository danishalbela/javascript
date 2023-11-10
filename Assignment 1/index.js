//1. Write a JavaScript program that displays the largest integer among two integers.

// let a=10 , b=25
// if(a>b)
// {
// console.log("largest integer is: "+a);
// }else{
//     console.log("largest integer is: "+b);
// }

// 2. Write a JavaScript conditional statement to find the  sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// let a=3,b=+7,c=-2
// if(a>0 && b>0 && c>0)
// {
//     alert("The sign is +");
// }
// else if(a<0 && b<0 && c<0)
// {
//     alert("The sign is -");
// }
// else if(a<0 && b>0 && c>0)
// {
//     alert("The sign is -");
// }
// else if(a>0 && b<0 && c<0)
// {
//     alert("The sign is +");
// }
// else{
//     alert("The sign is -");
// }

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// let a=0;
// let b=-1;
// let c=4;

// if(a>b && a>c)
// {
//     if(b>c)
//     {
//         alert(a+", "+b+", "+c);
//     }
//     else{
//         alert(a+c+b);
//     }
// }
// else if(b>a && b>c)
// {
//     if(a>c)
//     {
//         alert(b+", "+a+", "+c);
//     }
//     else{
//         alert(b+", "+c+", "+a);
//     }
// }
// else if(c>a && c>b)
// {
//   if(a>b)
//   {
//     alert(c+", "+a+", "+b);
//   }else
//    {
//     alert(c+", "+b+", "+a);
//    }
// }

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// let  a=-5
// let  b=-2
// let  c=-6
// let  d=0
// let  e=-1

// if(a>b && b>c && c>d)
// {
//     alert("Largestnumber is:"+a)
    
// }
// else if(b>a && b>c && b>d)
// {
//     alert("Largestnumber is:"+b)

// }
// else if(c>a && c>b && c>d)
// {
//     alert("Largestnumber is:"+c)
        
// }
// else{
//     alert("Largest Number is:  "+d)
// }

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(i=0 ; i<=15; i++)
// {
//     if(i%2==0)
//     {
//         console.log(i+" is even")
//     }
//     else{
//         console.log(i+" is odd")
//     }
// }

// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

let David=80
let Vinoth	= 77
let Divya	= 88
let Ishitha	= 95
let Thomas	= 68
let marks = 35
// jab bhi data rakhna ho to usko array ya object mein rakho
array=[80,77,88,95,68,35];
totalmarks=0;//initially ye zero hoga
for(let i=0;i<=array.length;i++){//aray ki length
totalmarks=totalmark+array[i];
}
averageMarks=totalmarks/array.length;
