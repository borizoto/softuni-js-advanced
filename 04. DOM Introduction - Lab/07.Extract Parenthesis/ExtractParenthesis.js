function extract(content) {
    const text = document.getElementById(content);
    const regex = /\(([^)]+)\)/g;
    const matches = text.textContent.match(regex);

    const arr = [];
    
    for (const match of matches) {
     arr.push(match.split(regex).join(""));
    }

    return (arr.join("; "));
}