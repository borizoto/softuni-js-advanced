function circleArea(input) {
    if (typeof input === "number") {
       const area = Math.PI * input**2;
       console.log(area.toFixed(2));
    } else {
       console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
 }