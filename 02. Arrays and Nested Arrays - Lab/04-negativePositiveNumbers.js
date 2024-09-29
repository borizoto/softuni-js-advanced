function negativePositiveNumbers(arr) {
    const resusltArr = [];
    for (const element of arr) {
        if (element < 0) {
            resusltArr.unshift(element);
        } else {
            resusltArr.push(element);
        }
    }

    console.log(resusltArr.join("\n"));
}