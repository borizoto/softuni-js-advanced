function greatestCommonDivisor1(num1, num2) {
    let a = num1;
    let b = num2;
 
    let gcd = a % b;
 
    while (gcd > 0) {
       a = b;
       b = gcd;
       
       gcd = a % b;
    }   
    console.log(b);
 }




 function greatestCommonDivisor2(num1, num2) {
    let isGcd = false;
    let gcd = 2;

    let smallerNum = 0;
    
    if (num1 < num2) {
        smallerNum = num1;
    } else {
        smallerNum = num2;
    }

    for (let i = 0; i <= smallerNum; i++) {
        if (num1 % gcd === 0 && num2 % gcd === 0) {
            isGcd = true;
            break;
        }
        gcd++;
    }

    if (!isGcd) {
        gcd = 1;
    }
     console.log(gcd);
     
}