let a = '43mj';
let b = a + 34;   // 34 is treated as a string here - type coercion
console.log(b);

const undi = () => {
    return;      // returns undefined
}
console.log(undi());

console.log(typeof null);   // null is a keyword
console.log(typeof undefined); // undefined is an indentifier
console.log(typeof NaN);    // NaN is a number type
console.log(typeof function() {}); // function is a special type

console.log(null + 'ify'); // prints nullify
// console.log(null.concat('ify'));  // TypeError: Cannot read properties of null (reading 'concat')

// in js objects are the only mutable values
// fxns are also objects, with the additional capacity of being callable
// for object==primitive value, js does primitive coercion by converting the object into primitive value
let obj = {
    valueOf: function() {
        return 42;
    }
};
console.log(obj == 42);  // true, due to primitive coercion using valueOf()

// type casting
let str1 = String(101);
console.log(str1); // "101"
console.log(typeof str1); // "string"

// .toString() method does everything that String() does, but it cannot convert null or undefined
let str2 = (102).toString(); // "102"
console.log(str2)
console.log(typeof str2); // "string"

let strBool1 = String(true);
console.log(strBool1, typeof strBool1); // "true" "string"=

let strDate1 = String(new Date("2021-04-06"));
console.log(strDate1, typeof strDate1); 
// "{whatever the date is in local device time standard format}" "string"

let num = Number("202");
console.log(num, typeof num); // 202 "number"

let numT = Number(true);
console.log(numT, typeof numT); // 1 "number"

let numF = Number(false);
console.log(numF, typeof numF); // 0 "number"

let numFloat = Number(`${3.14159+394.434}`);
console.log(numFloat, typeof numFloat); // 397.57559 "number"

// function declaration is a statement
function add(x, y) {
    return x+y;
}
console.log(add("Hello ", "World")); // "Hello World"
console.log(add(10, 20)); // 30

// fxns can also be created using function expressions
// statements don't produce values, but expression do
// fxn declarations are hoisted, function expressions are not
const multiply = function(x, y) {
    return x * y;
}
console.log(multiply(6, 7)); // 42

// loops
let x = 5;
for(let i=0; i<x; i++) {
    console.log(`Loop Iteration ${i}`);
}

// recursion
loopingRec(0, 5)
function loopingRec(i, x) {
    if(i>=x) return;
    console.log(`Recursion Iteration ${i}`);
    loopingRec(i+1, x);
}

// nested fxn
const fname = "Alice"; //global variable
function getScore() {
  const num1 = 2; // inner function variable
  const num2 = 3;

  function add() {
    return `${fname} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Alice scored 5"

function argCheck() {
    const [f, s , t] = arguments;

    console.log(`First Arg: ${f}, Second Arg: ${s}, Third Arg: ${t}`);
}

argCheck(19, 'hello', true);

// repititively calling a fxn after a fixed time interval
// setInterval(() => {
//     console.log('This message is shown every 2 seconds');
// }, 2000);

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// setInterval executes the callback fxn every n milliseconds
// let age = 0;
// setInterval(() => {
//     const name = prompt('wanna know the age: ');
//     if(name.toLowerCase() === 'y'){
//         console.log(`Age is: ${++age}`);
//     } else {
//         console.log('Okay, bye!');
//     }
// }, 2000);


// function Person1() {
//   // The Person() constructor defines `this` as the new object
//   this.age = 0; 

//   setInterval(function growUp() {
//     this.age++; // Here, `this` refers to the global object, not the Person object
//     console.log(this.age);  // prints NaN
//   }, 1000);
// }

// const p = new Person1();

// Arrow functions do not create their own this
// They capture this from where they are written
// function Person2() {
//   this.age = 0;

//   setInterval(() => {
//     this.age++;
//   }, 1000);
// }

// diff between for in and for of
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
} // "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
} // Logs: 3 5 7

// using for in with destructuring to print key value pairs
const obj0 = { goo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj0)) {
  console.log(key, val);
}

const user = {
    0: 'unga bunga',
    woops: 'woopsie'
}

console.log(user[0]);
// console.log(user[woops]); // ReferenceError: woops is not defined
console.log(user.woops);

// concat method doesnt mutate the original array with some other egs like concat(), filter(), flat(), flatMap(), map(), slice(), and splice() 
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
const moreNumbers = [4, 5];

const combined = letters.concat(numbers, moreNumbers, 6);
console.log(combined); // Output: ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
console.log(letters);  // Original array remains unchanged: ['a', 'b', 'c']

const whatda = ['aiyo', 'banana', 'ka', 'pata', 'pe', 'roti', 'khata', 'ji'];
whatda.copyWithin(2, 4, 6);
console.log(whatda); // ['aiyo', 'banana', 'pe', 'roti', 'pe', 'roti', 'khata', 'ji']

const betterWhatda = ['ayo', 'ju', 'ead', 'on', 'banaana', 'pladea'];
const newWhatda = betterWhatda.slice().copyWithin(0, 5);
// another way to create shallow copy is using spread op
// const newWhatda = [...betterWhatda].copyWithin(0, 5);
// og arr remains unchanged since we be slicing to create a shallow copy
console.log(betterWhatda);
console.log(newWhatda);
whatda.map(() => {
    console.log(this);
}, 2);
console.log(whatda.length)