function filter(xs, arrow) {
    let arr = [];
    for (let item of xs) {
        let result = arrow(item, index, xs);
        if (result == true) {
            arr.push(item);
        } 
    }
    return arr;
}