function sortArray(arr, arg) {
    return arg === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
