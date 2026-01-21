const unga = {
    name: 'unga',
    class: 'bunga'
}
console.log(Object.getPrototypeOf(unga));

const human = {
    eat() {
        console.log('nom nom');
    }
}

const dev = {
    code() {
        console.log('i fw code heavy');
    }
    // prototype chaining
    // __proto__: human
}

Object.setPrototypeOf(dev, human);

// for eat(), check dev -> not found, then check dev, found then execute
dev.eat();

console.log(Object.getPrototypeOf(dev));

function User(name) {
    this.name = name;
}

// without new
const uRaw = {};  // create an empty object
Object.setPrototypeOf(uRaw, User.prototype); // link prototype
User.call(uRaw, 'Raw Guy'); // binding this to u, u.name = 'Avi

// with new
const u = new User('New Guy');

// only fxns have prototype
// only objects have __proto__
// User.prototype exists
// u.prototype doesnt exist
// u.__proto__ exists
// the object’s __proto__ points to the constructor’s prototype
console.log(u.__proto__ === User.prototype);

console.log(u.__proto__);              // User.prototype
console.log(u.__proto__.__proto__);    // Object.prototype
console.log(u.__proto__.__proto__.__proto__); // null

// constructor initialises data, prototype provides behavior
console.log(u instanceof User);