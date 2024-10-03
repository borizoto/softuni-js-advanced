function lowestPricesInCities(arr) {
    const cheapestPriceObj = {};
    const obj = {};

    for (const string of arr) {
        let [town, product, price] = string.split(" | ");
        price = Number(price);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = { price, town };
        } else {
            cheapestPriceObj[product] = { price, town };
            if (cheapestPriceObj[product].price < obj[product].price) {
                obj[product] = { price, town };
            }
        }
    }

    for (const product in obj) {
        console.log(`${product} -> ${obj[product].price} (${obj[product].town})`)
    }
}