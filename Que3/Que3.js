// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and
// examples.

// Ans:- Loops are necessary part of all programming languages. When we want to execute same line of code N number of times, there are two ways to do that:-

// 1:- we can write same line of code N number of times
// 2:- Using loops 

// Types of Loops:- for loop, for in loop, for of loop, while loop, do while loop


//for loop syntax and example:-
 
// for (initialization; condition; finalExpression) {
//   code
// }


for (let i = 0; i < 9; i++) {
    console.log(i);
  }

  

//for in loop syntax and example:-

// for (property in object) {
//      code
//   }

const names = {
    a: "Arun",
    b: "virat",
    c: "dhoni"
  };
  
  for (let key in names) {
    console.log(key + ": " + names[key]);
  }
  

  //for of loop syntax and example:-

//   for (variable of object) {
//      code
//   }


const arr = [ "A", "B", "C" ];

for (let i of arr) {
  console.log(i);
}


// while loop syntax and example:-


// while (condition) {
//      statement
//   }

let w = 1;

while (w < 10) {
  console.log(w);
  w++;
}

