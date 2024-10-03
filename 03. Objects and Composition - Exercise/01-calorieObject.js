function calorieObject(arr) {
    const calorieObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        const product = arr[i];
        const calories = Number(arr[i + 1]);

        calorieObj[product] = calories;
    }
    console.log(calorieObj);
}