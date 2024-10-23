function getPersons() {
    const resultArr = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
        
    }

    let p1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    resultArr.push(p1);

    let p2 = new Person('SoftUni');
    resultArr.push(p2);

    let p3 = new Person('Stephan', 'Johnson', 25);
    resultArr.push(p3);

    let p4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    resultArr.push(p4);

    return resultArr;
}