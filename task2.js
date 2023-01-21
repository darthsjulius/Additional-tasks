function map(xs, arrow) {
    let arr = [];
    for (let item of xs) {
        let result = arrow(item, index, xs);
        arr.push(result);
    }
    return arr;
}