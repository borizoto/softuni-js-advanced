function solution() {
    const nutrientsStorage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    const menu = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    return function robot(data) {

        const functionsObj = {
            restock(nutrient, quantity) {
                nutrientsStorage[nutrient] += quantity;
                return "Success";
            },

            prepare(recipe, quantity) {
                const ingredientsNeeded = {};
                for (const key in menu[recipe]) {
                    ingredientsNeeded[key] = menu[recipe][key] * quantity;
                }

                for (const key in nutrientsStorage) {
                    if (nutrientsStorage[key] < ingredientsNeeded[key]) {
                        return `Error: not enough ${key} in stock`;
                    }
                }

                for (const key in ingredientsNeeded) {
                    nutrientsStorage[key] -= ingredientsNeeded[key];
                }

                return "Success";
            },

            report() {
                return `protein=${nutrientsStorage.protein} carbohydrate=${nutrientsStorage.carbohydrate} fat=${nutrientsStorage.fat} flavour=${nutrientsStorage.flavour}`;
            }
        }

        const tokens = data.split(" ");
        if (tokens.length === 3) {
            const command = tokens[0];

            if (command === "restock") {
                const microElement = tokens[1];
                const quantity = Number(tokens[2]);
                return functionsObj.restock(microElement, quantity);
            } else if (command === "prepare") {
                const recipe = tokens[1];
                const quantity = Number(tokens[2]);
                return functionsObj.prepare(recipe, quantity);
            }
        } else { // report
            return functionsObj.report();
        }
    }
}