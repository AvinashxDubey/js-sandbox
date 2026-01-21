const missing2= (arr) => {
    const nplusone = arr.length+1;
    const total = (nplusone*(nplusone+1))/2;
    let arrsum = 0;
    for(const ele of arr){
        arrsum+=ele;
    }
    return total-arrsum;
}
const arr = [1, 2, 3, 5, 6];
console.log(missing2(arr));
