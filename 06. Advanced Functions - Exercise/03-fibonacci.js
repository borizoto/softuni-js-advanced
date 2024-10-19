function getFibonator1() {
    let arr = [1];

    return function(){
        const lastTwoElementsArr = arr.slice(-2);
        const last = arr.length - 1;

        let sum = lastTwoElementsArr.reduce((acc, curValue) => acc + curValue);
        arr.push(sum);
        return arr[last];
    }
}

function getFibonator2() {
    let num1 = 0;
    let num2 = 1;
    let buffer = 0;

    return function () {
        buffer = num1 + num2;
        num1 = num2;
        num2 = buffer;
        return num1;
    }
}