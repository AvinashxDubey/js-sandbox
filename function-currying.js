const add = (x) => {
    return (y) => {
        return (z) => {
            return x + y + z;
        }
    }
}

console.log(add(1)(2)(3)); // returns 6