function squareOfStars(number = 5) {
    for (let i = 0; i < number; i++) {
       let output = ("*".repeat(number));
       output = output.split("").join(" ");
       console.log(output);
    }
 }