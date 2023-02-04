function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}


function pickRandom(xs) {
    const randomOffset = randomInteger(0, xs.length - 1);
    return xs[randomOffset];
}


function pickRandomN(xs, n) {
    const arr = [];
    while (n > 0) {
        arr.push(pickRandom(xs));
        n--;
    }
    return arr;
}