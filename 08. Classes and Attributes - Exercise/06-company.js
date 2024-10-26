class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name === "" || salary === "" || position === "" || department === "" ||
            name === undefined || salary === undefined || position === undefined || department === undefined ||
            name === null || salary === null || position === null || department === null ||
            Number(salary) < 0) {

            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let highestAvgSalary = 0;
        let bestDep = "";
        let result = "";
        
        for (const key in this.departments) {
            const curDepartment = this.departments[key];
            let sum = 0;

            for (const obj of curDepartment) {
                sum += obj.salary;
            }

            const avgSalaryOnDepartment = sum / curDepartment.length;

            if (avgSalaryOnDepartment >= highestAvgSalary) {
                highestAvgSalary = avgSalaryOnDepartment;
                bestDep = key;
            }
        }

        const bestEmployees = Object.values(this.departments[bestDep]);
        bestEmployees.sort((obj1, obj2) => obj2.salary - obj1.salary || obj1.name.localeCompare(obj2.name));
        result += `Best Department is: ${bestDep}\n` + `Average salary: ${highestAvgSalary.toFixed(2)}\n`;
        // result += `Average salary: ${highestAvgSalary.toFixed(2)}\n`;
        for (const employee of bestEmployees) {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`
        }

        return result.trim();
    }
}