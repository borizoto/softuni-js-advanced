function cookingByNumbers1(p1, ...arr) {
    let number = Number(p1);

    const obj = { 
        chop() {number /= 2},
        dice() {number = Math.sqrt(number)},
        spice() {number += 1},
        bake() {number *= 3},
        fillet() {number *= 0.80}
    };

    for (const command of arr) {
        obj[command]();
        console.log(number)
    }
}



function coockingByNumbers2(num, c1, c2, c3, c4, c5) {
    num = Number(num);
    const arr = [c1, c2, c3, c4, c5];

    for (const command of arr) {
        if (command === "chop") {
            num /= 2;
        } else if (command === "dice") {
            num = Math.sqrt(num);
        } else if (command === "spice") {
            num += 1;
        } else if (command === "bake") {
            num *= 3;
        } else if (command === "fillet") {
            num -= num * 0.2;
        }
        console.log(num);
    }
}