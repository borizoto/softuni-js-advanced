function addAndRemoveElements1(arr) {
    let num = 0;
    const resultArr = [];

    for (const command of arr) {
        num++;
        if (command === "add") {
            resultArr.push(num);
        } else if (command === "remove") {
            resultArr.pop();
        }
    }

    if (resultArr.length === 0) {
        console.log("Empty")
    } else {
        console.log(resultArr.join("\n"))
    }
}


function addAndRemoveElements2(arr) {
    let num = 1;
    const resultArr = [];

    for (const command of arr) {
        if (command === "add") {
            resultArr.push(num);
        } else if (command === "remove") {
            resultArr.pop();
        }
        num++;
    }

    if (resultArr.length === 0) {
        console.log("Empty")
    } else {
        console.log(resultArr.join("\n"))
    }
}