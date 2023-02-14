function geometricProgression(n) {
    let b = 1;
    let q = 2;
    for (let i = 1; i < n; i++) {
        let c = b * q;
        b = c;
    }
    return b;
}


console.log(geometricProgression(8)); // 128
console.log(geometricProgression(17)); // 65536
console.log(geometricProgression(152)); // 2.85449538541192e+45
