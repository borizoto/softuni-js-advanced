function biggerElement1(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
       arr.push(Math.max(...matrix[i]));
    }
    
    return Math.max(...arr);
 }


 function biggerElement2(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] > biggest) {
             biggest = matrix[i][j];
          }
       }
    }
    return biggest;
 }