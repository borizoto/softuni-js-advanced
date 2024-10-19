function add(initialNum) {
    let sum = initialNum;

    function calcNextSum(nextNum) {
        sum += nextNum;
        return calcNextSum;
    }

    calcNextSum.toString = function() { 
        return sum;
    };

    return calcNextSum;
}