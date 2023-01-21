function maximum1(xs) {
    xs.sort((a, b) => (a>b) ? 1 : (a<b) ? -1 : 0);
    return xs.at(-1);
}


function maximum2(xs) {
    max = xs[0];
    for (let item of xs) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}