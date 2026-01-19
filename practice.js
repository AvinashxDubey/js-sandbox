// Sparse Arrays
const arr = [1, 2, 3];
arr.length = 1;
arr[5] = 10;
console.log(arr, arr.length);

// implement map using reduce
Array.prototype.myMap = function(callback) {
    return this.reduce((acc, curr, idx, arr) => {
        acc.push(callback(curr, idx, arr));
        return acc;
    }, []);
};

const unmapped = [1, 2, 3];
const mapped = unmapped.myMap(x => x+3);
console.log(mapped); // [4, 5, 6]

// group users by role
const users = [
    { role: "admin", name: "A" },
    { role: "user", name: "B" },
    { role: "admin", name: "C" }
];

function groupByRole(arr) {
    return arr.reduce((acc, curr) => {
        const role = curr.role;
        const name = curr.name;

        if(!acc[role]) {
            acc[role] = [];
        }
        acc[role].push(name);
        return acc;
    }, {});
}

const res = groupByRole(users);
console.log(res); // { admin: [ 'A', 'C' ], user: [ 'B' ] }

// removing duplicates from an array using reduce
const dupeArr = [1, 2 , 2, 3, 4, 4, 5];
const uniqueArr = dupeArr.reduce((acc, ele) => {
    return acc.includes(ele) ? acc : [...acc, ele];
}, []);
console.log(uniqueArr);