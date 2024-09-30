function orbit(arr) {
    const [rows, cols, x, y] = [...arr];
 
    const matrix = [];
    for (let i = 0; i < rows; i++) {
       matrix.push([]);
       for (let j = 0; j < cols; j++) {
          matrix[i].push(false);
       }
    }
 
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
       }
    }
 
    console.log(matrix.join("\n").split(",").join(" "));
 }