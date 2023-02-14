function geometricProgression1(n) {
    let b = 1;
    let q = 2;
    if (n == 1) {
        return q;
    } else {
        return b * (q ** (n - 1));
    }
}

console.log(geometricProgression(8)); // 128
console.log(geometricProgression(17)); // 65536
console.log(geometricProgression(152)); // 2.85449538541192e+45
