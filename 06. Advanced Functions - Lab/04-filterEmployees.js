function filterEmployees1(string, criteria) {

    function printData(obj) {
        return `${this.first_name} ${this.last_name} - ${this.email}`;
    }

    const arrObj = JSON.parse(string);
    const [criteriaKey, criteriaValue] = criteria.split("-");
    const resultArr = [];

    for (const obj of arrObj) {
        if (obj[criteriaKey] === criteriaValue || criteria === "all") {
            resultArr.push(obj);
        }
    }
    
    for (let i = 0; i < resultArr.length; i++) {
        console.log(`${i}. ` + printData.call(resultArr[i])) 
    }
}


function filterEmployees2(string, criteria) {
    const arrObj = JSON.parse(string);
    const [criteriaKey, criteriaValue] = criteria.split("-");
    let counter = 0;

    function filter(arrObj) {
        if (this[criteriaKey] === criteriaValue || criteria === "all") {
            console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);
        }
    }

    arrObj.forEach(element => filter.call(element));
}