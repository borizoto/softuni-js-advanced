function sameNumbers(num) {
    const string = num.toString();
    let isTheSame = true;
    let sum = 0;
 
    const arrOfNums = string.split("").map(Number).forEach((element, index, curArr) => {
       const firstEl = curArr[0];
       sum += element;
       if (element !== firstEl) {
          isTheSame = false;
       }
    });
 
    console.log(isTheSame)
    console.log(sum)
 }