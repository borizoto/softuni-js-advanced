function solution(outerNum){
    return function(innerNum) {
        return outerNum + innerNum;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

