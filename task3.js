function filter(xs, fnFilter) {
    let arr = [];
    let index = 0;
    for (let item of xs) {
        let result = fnFilter(item, index, xs);
        if (result == true) {
            arr.push(item);
        } 
        index++;
    }
    return arr;
}