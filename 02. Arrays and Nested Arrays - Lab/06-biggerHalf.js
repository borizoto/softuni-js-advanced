function biggerHalf1(arr) {
    const half = Math.floor(arr.length / 2);
    return sorted = arr.sort((a, b) => a - b).slice(half);
 }


 
 function biggerHalf2(arr) {
    const devisor = Math.ceil(arr.length / 2);
    return sorted = arr.sort((a, b) => a - b).slice(-devisor);
 }