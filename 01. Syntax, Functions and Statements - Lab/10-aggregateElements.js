function aggregateElements(arr) {
    const sum = arr.reduce((acc, element) => acc + element);
    let inverseSum = 0;
    const concat = arr.join("");
 
    arr.forEach(element => {
       inverseSum += 1 / element;
    });
 
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
 }