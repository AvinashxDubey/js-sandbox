const clb = () => {
    console.log('something');
}

const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const debouncer = debounce(clb, 1000);

console.log('Starting debounce test...');
console.log('Calling debouncer 5 times rapidly');

debouncer(); // at time 0ms : should schedule clb for 1000ms later
debouncer(); // few miliseconds later: should reset timer to 1000ms from now
debouncer(); // few miliseconds later: should reset timer to 1000ms from now
debouncer(); // few miliseconds later: should reset timer to 1000ms from now
debouncer(); // prints 'something' only once, 1000ms after this last call

console.log('All calls made. Wait 1 second...');
console.log('You should see "something" printed only ONCE after the delay');

