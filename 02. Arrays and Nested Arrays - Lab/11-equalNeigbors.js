function equalNeigbors(matrix) {
    let count = 0;
 
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix[i].length - 1; j++) {
          const curEl = matrix[i][j];
          const nextEl = matrix[i][j + 1];
 
          if (curEl === nextEl) {
             count++;
          }
       }
    }
 
    for (let i = 0; i < matrix.length - 1; i++) {
       const curArr = matrix[i];
       const nextArr = matrix[i + 1];
 
       for (let j = 0; j < matrix[i].length; j++) {
          const curEl = curArr[j];
          const nextEl = nextArr[j];
 
          if (curEl === nextEl) {
             count++;
          }
       }
    }
 
    console.log(count)
 }