function splitEvery(xs, n) {
    let arr = [];
    let itemIndex = 0;
    while (itemIndex < xs.length) {
        arr.push(xs.slice(itemIndex, itemIndex += n));
    }
    return arr;
}


console.log(splitEvery([1, 2, 3, 5, 4, 7, 6, 9], 3)); 
// Array(3) [ (3) […], (3) […], (2) […] ];
// 0: Array(3) [ 1, 2, 3 ]
// 1: Array(3) [ 5, 4, 7 ]
// 2: Array [ 6, 9 ]
console.log(splitEvery([55, 99, 31, 67, 100, 5], 2)); 
//Array(3) [ (2) […], (2) […], (2) […] ]
//0: Array [ 55, 99 ]
//1: Array [ 31, 67 ]
//2: Array [ 100, 5 ]
//length: 3
console.log(splitEvery([1, 6, 9, 72, 10001, 5], 5));
//Array [ (5) […], (1) […] ]
//0: Array(5) [ 1, 6, 9, … ]
//1: Array [ 5 ]
//length: 2
