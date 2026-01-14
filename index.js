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

