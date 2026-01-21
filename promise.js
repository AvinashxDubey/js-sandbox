function wait(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(ms>=0){
                resolve(`waited for ${ms} milliseconds`)
            } else{
                reject('Invalid Time')
            }
        }, ms)
    })
}

wait(2000)
.then(console.log)
.catch(console.error)

Promise.resolve()
    .then((result) => result)
    .then((nextResult) => nextResult)
    .then(() => console.log('debounced!'))
    .then(()=> { throw new Error('error in promise chain') })
    .catch((err) => console.error('Caught error:', err.message));


function checkPromise(num) {
    return new Promise((resolve, reject) => {
        if(num > 10) {
            resolve('Number is greater than 10');
        }
        else {
            reject('Number is 10 or less');
        }
    });
}

// This just logs the Promise object
console.log(checkPromise(15));  // Promise { <pending> }

// Using .then() to access resolved value
checkPromise(15)
    .then((result) => {
        console.log('Resolved value:', result); 
        return result.toUpperCase();
    })
    .then((upperResult) => {
        console.log('Transformed:', upperResult);
    })
    .catch((error) => {
        console.log('Rejected:', error);
    });

// Using async/await to access resolved value
async function useResolvedValue() {
    try {
        const result = await checkPromise(15);
        console.log('Async result:', result);
        
        const result2 = await checkPromise(5);
        console.log('This won\'t run');
    } catch (error) {
        console.log('Caught in async:', error);
    }
}

useResolvedValue();

// Multiple promises - Promise.all()
Promise.all([
    checkPromise(15),
    checkPromise(20),
    checkPromise(25)
])
.then((results) => {
    console.log('All results:', results);  // Array of all resolved values
})
.catch((error) => {
    console.log('Error:', error);
});