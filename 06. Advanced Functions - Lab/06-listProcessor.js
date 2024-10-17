function listProcessor(arr) {
    let resultArr = [];

    const obj = {
        add(string) {
             resultArr.push(string);
        },
        remove(string) { 
            resultArr = resultArr.filter(el => el !== string);
        },
        print() {
            console.log(resultArr.join(","))
        }
    }

    for (const string of arr) {
        const [command, word] = string.split(" ");
        obj[command](word);
    }
}