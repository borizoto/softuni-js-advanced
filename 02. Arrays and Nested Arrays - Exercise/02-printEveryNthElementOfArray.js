function printEveryNthElementOfArray(arr, number) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i += number) {
        resultArr.push(arr[i]);
    }

    return resultArr;
}