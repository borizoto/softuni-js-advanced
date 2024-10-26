function tickets(arr, sortingCriteria) {

    const resultArr = [];

    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    for (const string of arr) {
        let [destinationName, price, status] = string.split("|");
        price = Number(price);

        const newTicket = new Ticket(destinationName, price, status);
        resultArr.push(newTicket);
    }

    sortingCriteria === "price" ? resultArr.sort((a, b) => a[sortingCriteria] - (b[sortingCriteria])) :
        resultArr.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));

    return resultArr;
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
);