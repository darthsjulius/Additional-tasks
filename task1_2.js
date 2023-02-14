function geometricProgression1(n) {
    let b = 1;
    let q = 2;
    return (n == 1) ? q : b * (q ** (n - 1)); 
}

console.log(geometricProgression(8)); // 128
console.log(geometricProgression(17)); // 65536
console.log(geometricProgression(152)); // 2.85449538541192e+45
