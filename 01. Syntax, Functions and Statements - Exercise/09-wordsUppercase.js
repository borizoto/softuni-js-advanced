function wordsUppercase1(string) {
    const result = string.split(/\W+/g).join(" ").trim().toUpperCase().split(" ").join(", ");
    console.log(result)
}


function wordsUppercase2(string) {
    const pattern = /(?<name>\w+)/g;
    const arr = [];

    let match = pattern.exec(string);

    while (match) {
        let word = match.groups.name;
        word = word.toUpperCase();
        arr.push(word);
        
        match = pattern.exec(string);
    }
    
    console.log(arr.join(", "));
}