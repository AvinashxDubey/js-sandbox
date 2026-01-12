// execution order: Call Stack → Microtasks → Macrotasks

console.log('Start'); // Call Stack - executes immediately

setTimeout(() => {
    console.log('setTimeout (Macrotask)'); // Macrotask Queue
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise (Microtask)'); // Microtask Queue
    });

console.log('End'); // Call Stack - executes immediately