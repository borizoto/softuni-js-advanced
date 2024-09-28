function validityChecker1(x1, y1, x2, y2) {
    const obj = {
        checkValidity(x1, y1, x2, y2) {
            return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
        }
    }
    
    const case1 = obj.checkValidity(x1, y1, 0, 0) ? "valid": "invalid";
    const case2 = obj.checkValidity(x2, y2, 0, 0) ? "valid": "invalid";
    const case3 = obj.checkValidity(x1, y1, x2, y2) ? "valid": "invalid";
    
    console.log(`{${x1}, ${y1}} to {0, 0} is ${case1}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${case2}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${case3}`)
}



function validityChecker2(x1, y1, x2, y2) {
    function formula (x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    }

    const status1 = formula(x1, y1, 0, 0) ? "valid" : "invalid";
    const status2 = formula(x2, y2, 0, 0) ? "valid" : "invalid";
    const status3 = formula(x1, y1, x2, y2) ? "valid" : "invalid";

    console.log(`{${x1}, ${y1}} to {0, 0} is ${status1}`);      
    console.log(`{${x2}, ${y2}} to {0, 0} is ${status2}`);  
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status3}`);  
}