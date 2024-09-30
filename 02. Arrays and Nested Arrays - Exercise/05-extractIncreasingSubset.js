function extractIncreasingSubset1(arr) {
    let biggest = arr[0];

    const resultArr = arr.reduce((acc, curValue) => {
        if (curValue >= biggest) {
            acc.push(curValue);
            biggest = curValue;
        }
        return acc;
    }, [])

    return resultArr;
}


function extractIncreasingSubset2(arr) {
    const resultArr = [];
    let biggest = arr.shift();
    resultArr.push(biggest);

    for (const element of arr) {
        if (element >= biggest) {
            resultArr.push(element);
            biggest = element;
        }
    }

    return resultArr;
}