function cars(arr) {
    const allCarsObj = {};

    const commands = {
        createCar(name) { //create
            return name = {};
        },

        createAndInherit(parentName) {
            // return this.createCar(parentName); // Does not give parent elements to the child(No prototype)
            // return this.createCar.call(allCarsObj[parentName]);
            return Object.create(allCarsObj[parentName]);
        },

        set(objName, key, value) {
            return allCarsObj[objName][key] = value;
        },

        print(objName) {
            const curObj = allCarsObj[objName];
            const resultArr = [];
            for (const key in curObj) {
                resultArr.push(`${key}:${curObj[key]}`)
            }

            console.log(resultArr.join(","));
        }
    };

    for (const string of arr) {
        const tokens = string.split(" ");

        if (tokens.length === 2) {
            if (tokens[0] === "create") {
                const name = tokens[1];
                allCarsObj[name] = commands.createCar(name);
            } else if (tokens[0] === "print") {
                const name = tokens[1];
                commands.print(name);
            }
        } else if (tokens.length === 4) {
            if (tokens[0] === "create") {
                const nameToCreate = tokens[1];
                const nameToInheritFrom = tokens[3];
                allCarsObj[nameToCreate] = commands.createAndInherit(nameToInheritFrom);
            } else if (tokens[0] === "set") {
                const objName = tokens[1];
                const key = tokens[2];
                const value = tokens[3];
                commands.set(objName, key, value);
            }
        }
    }
}