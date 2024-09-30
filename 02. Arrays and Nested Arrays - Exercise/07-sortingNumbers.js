function sortingNumbers1(arr) {

    const originalLength = arr.length;
    const sortedArr = [];
    arr = arr.sort((a, b) => a - b);
 
    while (arr.length > 0) {
       const smallNum = arr.shift();
       const bigNum = arr.pop();
 
       sortedArr.push(smallNum, bigNum);
    }
 
    if (sortedArr.length > originalLength) {
       sortedArr.pop();
    }
    
    return sortedArr;
 }



 function sortingNumbers2(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const resultArr = [];

    while (sorted.length > 0) {
        const smallNum = sorted.shift();
        const bignum = sorted.pop();

        resultArr.push(smallNum, bignum);
    }

    return resultArr;
}