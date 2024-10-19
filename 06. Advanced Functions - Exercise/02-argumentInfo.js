function argumentInfo(...arguments) {

    const resultObj = {};

    for (const arg of arguments) {
        const argType = typeof arg;
        console.log(`${argType}: ${arg}`);

        if (!resultObj.hasOwnProperty(argType)) {
            resultObj[argType] = 0;
        }

        resultObj[argType]+=1;
    }
    
    const sorted = Object.entries(resultObj).sort((arr1, arr2) => arr2[1] - arr1[1]);
    
    sorted.forEach(arr => {
        console.log(`${arr[0]} = ${arr[1]}`);
    })
}