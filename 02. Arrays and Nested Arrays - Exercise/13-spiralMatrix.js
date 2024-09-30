function spiralMatrix(rows, cols) {
    const matrix = [];
    let rowEnd = rows - 1;
    let colEnd = cols - 1;
    let curRow = 0;
    let curCol = 0;
    let num = 1;

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push("*");
        }
    }

    while (curRow <= rowEnd && curCol <= colEnd) {
        for (let i = curRow; i <= rowEnd; i++) {
            matrix[curRow][i] = num;
            num++;
        }   
        curRow++;

        for (let i = curRow; i <= colEnd; i++) {
            matrix[i][colEnd] = num;
            num++;
        }
        colEnd--;

        for (let i = colEnd; i >= curCol; i--) {
            matrix[rowEnd][i] = num;
            num++;
        }
        rowEnd--;

        for (let i = colEnd; i >= curRow; i--) {
            matrix[i][curCol] = num;
            num++;
        }
        curCol++;
    }

    console.log(matrix.join("\n").split(",").join(" "));
}