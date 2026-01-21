const flattenObject = (obj, parentKey='', res={}) => {
    for(const [key, val] of Object.entries(obj)){
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const val = obj[key];
        // typeof would return 'null instanceof Object' to be true which is a lang bug
        if(val instanceof Object && !Array.isArray(val)){
            flattenObject(val, newKey, res);
        } else {
            res[newKey] = val;
        }
    }
    return res;
}

const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: [1, 3,3]
    }
  }
};

const res = flattenObject(input);
console.log(res);