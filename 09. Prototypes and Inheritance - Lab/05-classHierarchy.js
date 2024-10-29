function classHierarchy() {
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }

        get area() {
            return this.area;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        #radius;
        constructor(radius, units) {
            super(units);
            this.#radius = radius;
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        get radius() {
            let curRadius = this.#radius;
            switch (this.units) {
                case 'm': curRadius /= 10; break;
                case 'cm': break;
                case 'mm': curRadius *= 10; break;
                default: break;
            }
            return curRadius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        #width;
        #height;
        constructor(width, height, units) {
            super(units);
            this.#width = width;
            this.#height = height;
        }

        get area() {
            let area = this.width * this.height;
            return area;
        }

        get width() {
            let curWidth = this.#width;
            switch (this.units) {
                case 'm': curWidth /= 10; break;
                case 'cm': break;
                case 'mm': curWidth *= 10; break;
                default: break;
            }
            return curWidth;
        }

        get height() {
            let curHeight = this.#height;
            switch (this.units) {
                case 'm': curHeight /= 10; break;
                case 'cm': break;
                case 'mm': curHeight *= 10; break;
                default: break;
            }
            return curHeight;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12

console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50