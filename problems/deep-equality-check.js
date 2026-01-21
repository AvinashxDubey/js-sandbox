// const deepEquals1 = (obj1, obj2) => {
//     if(Object.keys(obj1).length!==Object.keys(obj2).length) return false;
//     for(const key in obj1){
//         if(!Object.hasOwn(obj2, key)){
//             return false;
//         }
//         if(obj1[key] instanceof Object && obj2[key] instanceof Object){
//             if(!deepEquals(obj1[key], obj2[key])){
//                 return false;
//             }
//         } else if(obj2[key]!==obj1[key]){
//             return false;
//         }

//     }
//     return true; 
// }

const deepEquals = (a, b) => {
    if (a === b) return true;

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }

    if (Array.isArray(a) !== Array.isArray(b)) return false;

    if (Array.isArray(a)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEquals(a[i], b[i])) return false;
        }
        return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!Object.hasOwn(b, key)) return false;
        if (!deepEquals(a[key], b[key])) return false;
    }
    return true;
}

const Obj1 = { name: 'test', age: 24, a: { b: 2, c: 2 }, d: [1, 2, 3] };
const Obj2 = { age: 24, name: 'test', a: { b: 2, c: 2 }, d: [1, 3] };
const a = { x: 1, y:3 };
const b = { x: 1, y: 2 };

console.log(deepEquals(Obj1, Obj2));
console.log(deepEquals(a, b));