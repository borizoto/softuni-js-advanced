function townsToJson(arr) {
    arr.shift();
    const resultArr = [];

    for (const string of arr) {
        let [city, latitude, longitude] = string.split("|").join("").trim().split("  ");

        resultArr.push({ Town: city, Latitude: Number(Number(latitude).toFixed(2)), Longitude: Number(Number(longitude).toFixed(2)) });
    }
    console.log(JSON.stringify(resultArr));
}