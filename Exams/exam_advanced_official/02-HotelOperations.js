class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(suppliesArr) {
        let outputArr = [];
        for (const supplyStr of suppliesArr) {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supplyStr.split(" ");
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (this.initialBudget >= supplyTotalPrice) {

                if (!this.supplyStock.hasOwnProperty(supplyName)) {
                    this.supplyStock[supplyName] = supplyQuantity;
                } else {
                    this.supplyStock[supplyName] += supplyQuantity;
                }

                this.initialBudget -= supplyTotalPrice;
                outputArr.push(`Successfully stocked ${supplyQuantity} ${supplyName}`)
            } else {
                outputArr.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`)
            }
        }
        return outputArr.join("\n");
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        const curSupplyObj = {};
        for (const supplyStr of neededSupplies) {
            let [supplyName, supplyQuantity] = supplyStr.split(" ");
            supplyQuantity = Number(supplyQuantity);

            curSupplyObj[supplyName] = supplyQuantity;
        }

        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            this.roomAvailability[roomType] = {neededSupplies: curSupplyObj, pricePerNight};

            const numberOfRoomTypes = Object.keys(this.roomAvailability).length;

            return `Great idea! Now with the ${roomType}, we have ${numberOfRoomTypes} types of rooms available, any other ideas?`
        } else {
            return `The ${roomType} is already available in our hotel, try something different.`
        }
    }

    showAvailableRooms() {
        const outputArr = [];
        if (Object.keys(this.roomAvailability).length === 0) {
            return "Our rooms are not ready yet, please come back later...";
        }

        for (const roomType in this.roomAvailability) {
            outputArr.push(`${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`);
        }

        return outputArr.join("\n");
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        const requieredSupplies = this.roomAvailability[roomType].neededSupplies;
        // console.log(requieredSupplies)
        // console.log(this.supplyStock)

        for (const key in requieredSupplies) {
            if (this.supplyStock.hasOwnProperty(key)) {
                if (this.supplyStock[key] >= requieredSupplies[key]) {
                    continue;
                } else {
                    return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
                }
            }

        }
        return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`
    }
}

// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));


// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());


// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());
// console.log(hotel.bookRoom("Apartment"));
// console.log(hotel.bookRoom("Deluxe Suite"));
