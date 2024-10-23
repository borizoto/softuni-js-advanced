function autoEngeneeringCompany1(arr) {
    const carsObj = {};

    for (const string of arr) {
        let [carBrand, carModel, producedCars] = string.split(" | ");
        producedCars = Number(producedCars);

        if (!carsObj.hasOwnProperty(carBrand)) {
            carsObj[carBrand] = {};
        }

        if (!carsObj[carBrand].hasOwnProperty(carModel)) {
            carsObj[carBrand][carModel] = 0;    
        }
        
        carsObj[carBrand][carModel] += producedCars;
    }
    
    for (const carBrand in carsObj) {
        console.log(carBrand)
        const curCarModels = carsObj[carBrand];
        for (const model in curCarModels) {
            console.log(`###${model} -> ${curCarModels[model]}`);
        }
    }
}



function autoEngeneeringCompany2(arr) {
    const carsMap = new Map();

    for (const string of arr) {
        let [carBrand, carModel, producedCars] = string.split(" | ");
        producedCars = Number(producedCars);

        if (!carsMap.has(carBrand)) {
            carsMap.set(carBrand, new Map());
        }

        const carModels = carsMap.get(carBrand);

        if (!carModels.has(carModel)) {
           carModels.set(carModel, 0); 
        }
        
        carModels.set(carModel, carModels.get(carModel) + producedCars);
    }
    
    for (const carModel of carsMap.keys()) {
        console.log(carModel)

        const curCarModels = carsMap.get(carModel);
        for (const [curModel, carsProduced] of curCarModels) {
            console.log(` ###${curModel} -> ${carsProduced}`);
        }
    }
}