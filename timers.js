// Print the message “Hello after 4 seconds” after 4 seconds
// Print the message “Hello after 8 seconds” after 8 seconds

// const clb = (delay) => {
//     console.log(`Hello after ${delay} seconds!`);
// }

// setTimeout(clb, 4000, 4);
// setTimeout(clb, 8000, 8);

const timerId = setTimeout(() => {
    console.log('This is a msg');
}, 5000);
clearTimeout(timerId)

// Write a script to print the message “Hello World” every second, but only 5
// times. After 5 times, the script should print the message “Done” and let the
// Node process exit. 
// Constraints: You cannot use a setTimeout call for this challenge.
let count = 1;
const intervalId = setInterval(() => {
    if(count==5) {
        clearInterval(intervalId);
    }
    console.log('Hello World');
    count++;
    
}, 1000);