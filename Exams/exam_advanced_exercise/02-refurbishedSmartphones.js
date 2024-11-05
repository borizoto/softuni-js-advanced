class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === "") {
            throw new Error("Invalid smartphone!");
        }

        if (storage < 0) {
            throw new Error("Invalid smartphone!");
        }

        if (price < 0) {
            throw new Error("Invalid smartphone!");
        }

        if (condition === "") {
            throw new Error("Invalid smartphone!");
        }

        const smartphoneToAdd = { model, storage, price, condition };
        this.availableSmartphones.push(smartphoneToAdd);

        return `New smartphone added: ${smartphoneToAdd.model} / ${smartphoneToAdd.storage} GB / ${smartphoneToAdd.condition} condition - ${smartphoneToAdd.price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const foundSmartphone = this.availableSmartphones.find(obj => obj.model === model);

        if (foundSmartphone === undefined) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = 0;

        // const storageDiff = desiredStorage - foundSmartphone.storage;

        if (foundSmartphone.storage >= desiredStorage) {
            soldPrice = foundSmartphone.price;
        } else if (desiredStorage - foundSmartphone.storage <= 128) {
            soldPrice = foundSmartphone.price * 0.9;
        } else if (desiredStorage - foundSmartphone.storage > 128) {
            soldPrice = foundSmartphone.price * 0.8;
        }

        this.availableSmartphones.splice(this.availableSmartphones.indexOf(foundSmartphone), 1);
        const soldPhone = { model: foundSmartphone.model, storage: foundSmartphone.storage, soldPrice }
        this.soldSmartphones.push(soldPhone);

        this.revenue += soldPrice;
        return `${soldPhone.model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw "There are no available smartphones!";
        }

        let outputArr = ["Upgraded Smartphones:"];

        this.availableSmartphones.forEach(obj => {
            obj.storage = obj.storage * 2;
            
            outputArr.push(`${obj.model} / ${obj.storage} GB / ${obj.condition} condition / ${obj.price.toFixed(2)}$`);
        })

        return outputArr.join("\n");
    }

    salesJournal(criteria) {
        const possibleCriterias = ["storage", "model"];

        if (!possibleCriterias.includes(criteria)) {
            throw new Error("Invalid criteria!");
        }

        const criteriaSorting = {
            storage: (obj1, obj2) => obj2.storage - obj1.storage,
            model: (obj1, obj2) => obj1.model.localeCompare(obj2.model)
        };

        this.soldSmartphones.sort(criteriaSorting[criteria]);

        const soldSmartphonesCount = this.soldSmartphones.length;
        let outputArr = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${soldSmartphonesCount} smartphones sold:`];
        this.soldSmartphones.forEach(obj => {
            outputArr.push(`${obj.model} / ${obj.storage} GB / ${obj.soldPrice.toFixed(2)}$`);
        });

        return outputArr.join("\n");
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// retailer.sellSmartphone('Samsung S20 Ultra', 256);
// retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
// console.log(retailer.salesJournal('model'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.upgradePhones());

