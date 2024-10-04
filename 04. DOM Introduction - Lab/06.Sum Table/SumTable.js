function sumTable() {
    const rows = document.querySelectorAll("table tr");
    const result = document.getElementById("sum");

    const rowsArr = Array.from(rows);
    let bufferSum = 0;

    for (let i = 1; i < rowsArr.length - 1; i++) {
        const curPrice = rowsArr[i].children[1].textContent;
        bufferSum += Number(curPrice);
    }

    result.textContent = bufferSum.toFixed(2);
}