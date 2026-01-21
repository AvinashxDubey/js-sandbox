const nge = (arr) => {
    let st = [arr[arr.length-1]];
    const ans = [-1];
    for (let i = a.length - 2; i >= 0; i--) {
        const ele = arr[i];
        while(st.length!=0 && st[st.length-1]<=ele){
            st.pop();
        }
        if(st.length==0){
            ans.unshift(-1);
        } else if(st[st.length-1]>=ele){
            ans.unshift(st[st.length-1]);
        } else {
            ans.unshift(-1);
        }
        st.push(ele);
    }
    return ans;
}

const a = [2, 1, 2, 4, 3];
console.log(nge(a));


/**
 * [2 1 2 4 3]
 *          -1
 *  4  2  4  -1   -1
 */