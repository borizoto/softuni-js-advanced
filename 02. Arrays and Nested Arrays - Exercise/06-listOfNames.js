function listOfNames1(arr) {
    arr.sort((a, b) => a.localeCompare(b)).forEach((element, index) => {
        console.log(`${index + 1}.${element}`)
    });
}


function listOfNames2(arr) {
    const sorted = arr.sort((a, b) => a.localeCompare(b));
    sorted.forEach((element, index) => {
        console.log(`${index + 1}.${element}`)
    });
}


function listOfNames3(arr) {
    const sorted = arr.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= sorted.length; i++) {
        console.log(`${i}.${sorted[i - 1]}`)
    }
}