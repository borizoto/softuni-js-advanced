function processOddPositions(arr) {
    return arr.filter((el, idx) => idx % 2 !== 0).reverse().map(el => el * 2).join(" ");
 }