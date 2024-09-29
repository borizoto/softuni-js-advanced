function evenPositionElements1(arr) {
    const resultArr = [];

    for (let i = 0; i < arr.length; i+=2) {
        resultArr.push(arr[i]);
    }

    console.log(resultArr.join(" "));
}


function evenPositionElements2(arr) {
    let resultArr = arr.filter((numAsStr, index) => index % 2 === 0)

    console.log(resultArr.join(" "));
}