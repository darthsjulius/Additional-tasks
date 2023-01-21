function pickRandomN(n, xs) {
    function random(min, max) {
    let result = Math.floor(min + Math.random() * (max + 1 - min));
    } 
    
    while (n > 0) {
    random(xs[0], xs.at(-1));
    n--;
    }
}