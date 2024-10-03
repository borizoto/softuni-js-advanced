function storeCatalogue1(arr) {
    const resultObj = {};

    for (const string of arr) {
        const [product, price] = string.split(" : ");
        const firstChar = product[0];

        if (!resultObj.hasOwnProperty(firstChar)) {
            resultObj[firstChar] = {};
        }

        resultObj[firstChar][product] = price;
    }

    const sorted = Object.entries(resultObj).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));

    for (const [letter, curObj] of sorted) {
        console.log(letter);
        Object.entries(curObj).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0])).forEach(([product, price]) => {
            console.log(`  ${product}: ${price}`)
        });
    }
}



function storeCatalogue2(arr) {
    const listArr = [];

    for (const string of arr) {
        const [item, price] = string.split(" : ");

        const obj = { name: item, price: price };
        listArr.push(obj);
    }

    listArr.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));

    let capitalsArr = listArr.map(curObj => curObj = curObj.name[0]);
    capitalsArr = capitalsArr.filter((value, index) => capitalsArr.indexOf(value) === index);

    for (const curChar of capitalsArr) {
        console.log(curChar);

        listArr.forEach(curObj => {
            const firstChar = curObj.name[0];
            if (curChar === firstChar) {
                console.log(`  ${curObj.name}: ${curObj.price}`);
            }
        });
    }
}
