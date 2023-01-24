function maximum1(xs) {
    if (!xs.length) {
        throw new Error('The function is not applicable to empty arrays');
    }
    [...xs].sort((a, b) => (a>b) ? 1 : (a<b) ? -1 : 0);
    return xs.at(-1);
}


function maximum2(xs) {
    max = xs[0];
    if (!xs.length) {
        throw new Error('The function is not applicable to empty arrays');
    }
    for (let item of xs) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}