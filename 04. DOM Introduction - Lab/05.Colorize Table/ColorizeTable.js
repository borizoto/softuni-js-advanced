function colorize() {
    const evenRowElements = document.querySelectorAll("tr:nth-child(even)");

    for (const rowEl of evenRowElements) {
        rowEl.style.backgroundColor = "teal";
    }
}