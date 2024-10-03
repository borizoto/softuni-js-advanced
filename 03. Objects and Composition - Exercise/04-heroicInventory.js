function heroicInventory1(arr) {
    const resultArr = [];

    for (const string of arr) {

        const heroObj = {};
        let [name, level, items] = string.split(" / ");

        items = items ? items.split(", ") : [];

        if (name && level && items) {

            heroObj.name = name;
            heroObj.level = Number(level);
            heroObj.items = items;

            resultArr.push(heroObj);
        }
    }
    console.log(JSON.stringify(resultArr));
}





function heroicInventory2(arr) {

    let resultArr = []

    arr.map((element) => {

        let [name, level, items] = element.split(' / ');
        items = items ? items.split(", ") : [];

        if (name && level && items) {
            resultArr.push({ name, level: Number(level), items });
        }
    })

    console.log(JSON.stringify(resultArr))
}