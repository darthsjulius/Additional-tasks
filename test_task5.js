function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}


console.log( randomInteger(1, 4) );
console.log( randomInteger(1, 4) );
console.log( randomInteger(1, 4) );
console.log( randomInteger(1, 4) );
console.log( randomInteger(1, 4) );
console.log( randomInteger(1, 4) );
console.log( randomInteger(1, 4) );

function pickRandom(xs) {
    const randomOffset = randomInteger(0, xs.length - 1);
    return xs[randomOffset];
}

console.log( pickRandom([1, 5, 9, 3, 5, 7]) );
console.log( pickRandom([1, 5, 9, 3, 5, 7]) );
console.log( pickRandom([1, 5, 9, 3, 5, 7]) );
console.log( pickRandom([1, 5, 9, 3, 5, 7]) );
console.log( pickRandom([1, 5, 9, 3, 5, 7]) );
console.log( pickRandom([1, 5, 9, 3, 5, 7]) );
console.log( pickRandom([1, 5, 9, 3, 5, 7]) );



function pickRandomN(xs, n) {
    const arr = [];
    while (n > 0) {
        arr.push(pickRandom(xs));
        n--;
    }
    return arr;
}



console.log( pickRandomN([1, 5, 9, 3, 5, 7], 2));
console.log( pickRandomN([1, 5, 9, 3, 5, 7], 2));
console.log( pickRandomN([1, 5, 9, 3, 5, 7], 2));
console.log( pickRandomN([1, 5, 9, 3, 5, 7], 2));
console.log( pickRandomN([1, 5, 9, 3, 5, 7], 2));
console.log( pickRandomN([1, 5, 9, 3, 5, 7], 2));