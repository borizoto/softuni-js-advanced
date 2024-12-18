function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        classId = "Person";

        toString() {
            return `${this.classId} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        classId = "Teacher";

        toString() {
            return `${super.toString().slice(0, super.toString().length - 1)}, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        classId = "Student";

        toString() {
            return `${super.toString().slice(0, super.toString().length - 1)}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}