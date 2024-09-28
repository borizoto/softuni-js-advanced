function fruit(string, weightInGr, preiceKg) {
    const weightInKg = weightInGr / 1000;
    const cost = weightInKg * preiceKg;
 
    console.log(`I need $${cost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${string}.`)
 }