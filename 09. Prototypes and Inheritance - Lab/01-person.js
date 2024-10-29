function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(value) {
            const [firstName, lastName] = value.split(" ");
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
