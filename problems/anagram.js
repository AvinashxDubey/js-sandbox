// const anagram2 = (str1, str2) => {
//     if(str1.length!=str2.length) return false;
//     const arr1 = [...str1];
//     const arr2 = [...str2];

//     arr1.sort();
//     arr2.sort();

//     for(let i = 0; i<arr1.length-1; i++){
//         if(arr1[i]!=arr2[i]) return false;
//     }
//     return true;
// }

const anagram = (str1, str2) => {
    if(str1.length!=str2.length) return false;
    const charMap = [];
    for(const ele of str1) {
        charMap[ele]??=0;
        charMap[ele]++;
    }

    for(const ele of str2) {
        charMap[ele]??=0;
        charMap[ele]--
    }
    
    for(const key in charMap){
        if(charMap[key]!=0) return false;
    }
    return true;
}
console.log(anagram('listen', 'silent'));
