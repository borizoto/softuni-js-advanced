function carFactory(obj) {
    const carOrder = obj;

    const carProduct = {
        model: obj.model,
        engine: null,
        carriage: null,
        wheels: null
    };

    const engineTypes = {
        "Small Engine": { power: 90, volume: 1800 },
        "Normal Engine": { power: 120, volume: 2400 },
        "Monster Engine": { power: 200, volume: 3500 }
    }

    const carriageTypes = {
        "hatchback": { type: 'hatchback', color: obj.color },
        "coupe": { type: 'coupe', color: obj.color }
    }

    if (carOrder.power <= 90) {
        carProduct.engine = engineTypes["Small Engine"];
    } else if (carOrder.power <= 120) {
        carProduct.engine = engineTypes["Normal Engine"];
    } else {
        carProduct.engine = engineTypes["Monster Engine"];
    }

    carProduct.carriage = carriageTypes[carOrder.carriage];
    carProduct.wheels = new Array(4).fill(carOrder.wheelsize % 2 === 0 ? carOrder.wheelsize - 1 : carOrder.wheelsize);

    return carProduct;
}