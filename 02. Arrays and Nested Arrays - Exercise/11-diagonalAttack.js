function diagonalAttack(arr) {
    const matrix = [];

    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(" ").map(Number));
    }

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][i] = matrix[i][i].toString();
            matrix[i][matrix.length - 1 - i] = matrix[i][matrix.length - 1 - i].toString();
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (typeof matrix[i][j] === "number") {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][i] = Number(matrix[i][i]);
            matrix[i][matrix.length - 1 - i] = Number(matrix[i][matrix.length - 1 - i].toString());
        }
    }
    console.log(matrix.join("\n").split(",").join(" "));
}