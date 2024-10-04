function extractText() {
    const input = document.getElementById(`items`)
    const result = document.getElementById(`result`);
    
    const bufferArr = [];

    for (const item of input.children) {
        bufferArr.push(item.textContent);
    }

    result.textContent = bufferArr.join("\n");
}