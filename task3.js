function filter(xs, arrow) {
    let arr = [];
    let index = 0;
    for (let item of xs) {
        let result = arrow(item, index, xs);
        if (result == true) {
            arr.push(item);
        } 
        index++;
    }
    return arr;
}