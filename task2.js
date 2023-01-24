function map(xs, fnMap) {
    let arr = [];
    let index = 0;
    for (let item of xs) {
        let result = fnMap(item, index, xs);
        arr.push(result);
        index++;
    }
    return arr;
}