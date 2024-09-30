function magicMatrices(arr) {
    const initialSum = arr[0].reduce((acc, curValue) => acc + curValue);
 
    for (let i = 0; i < arr.length; i++) { // arr[i] == row
 
       let colSum = 0;
       for (let j = 0; j < arr.length; j++) {
          colSum += arr[j][i];
       }
 
       const rowSum = arr[i].reduce((acc, curValue) => acc + curValue);
 
       if (colSum !== initialSum || rowSum !== initialSum) {
          return false;
       }
    }
    return true;
 }