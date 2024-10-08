function generateReport() {
    const output = document.querySelector(`#output`);  
    const checkBoxes = document.querySelectorAll(`[type="checkbox"]`);
    const rows = document.querySelectorAll(`tbody tr`);

    const resultArr = [];

    for (let i = 0; i < rows.length; i++) {
        let report = {};
        const row = rows[i];
        for (let j = 0; j < checkBoxes.length; j++) {
            if (checkBoxes[j].checked) {
                report[checkBoxes[j].name] = row.children[j].textContent;
            }
        }
        resultArr.push(report);
    }
    output.textContent = JSON.stringify(resultArr);   
    checkBoxes.forEach(checkBox => {
        checkBox.checked = false;
    });
}   