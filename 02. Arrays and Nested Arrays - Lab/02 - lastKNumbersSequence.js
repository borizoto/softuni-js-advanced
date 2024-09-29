function lastKNumbersSequence1(n, k) {
    const arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        let lastKElementsArr = arr.slice(-k);
        sum = lastKElementsArr.reduce((acc, curNum) => acc + curNum);
        arr.push(sum)
    }

    return arr;
}


function lastKNumbersSequence2(n, k) {
    const arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        const lastKElementsArr = arr.slice(-k);
        while (lastKElementsArr.length > 0) {
            sum += lastKElementsArr.pop();
        }

        arr.push(sum);
    }

    return arr;
}