function peaceOfPie1(arr, start, end) {
    const startIdx = arr.indexOf(start);
    const endIdx = arr.indexOf(end);
    const resultArr = arr.slice(startIdx, endIdx + 1);
    return resultArr;
 }


 function peaceOfPie2(arr, start, end) {
    return arr.slice(arr.indexOf(start), arr.indexOf(end) + 1);
 }