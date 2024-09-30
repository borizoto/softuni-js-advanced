function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        const curEl = arr.pop();
        arr.unshift(curEl);
    }
    console.log(arr.join(" "));
}