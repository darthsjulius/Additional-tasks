function flattenObject(obj) {
    let result = {};
    for (let i in obj) {
        if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
            let current = flattenObject(obj[i]);
            for (let j in current) {
                result[i + '.' + j] = current[j];
            }
        } else {
            result[i] = obj[i];
        }
    }
    return result;
};


console.log(flattenObject({
    a: 12,
    b: {
      a: 1,
      b: 3
    },
    c: {d: {e: 0}}
  })); 
  //Object { a: 12, "b.a": 1, "b.b": 3, "c.d.e": 0 }
  //a: 12
  //"b.a": 1
  //"b.b": 3
  //"c.d.e": 0