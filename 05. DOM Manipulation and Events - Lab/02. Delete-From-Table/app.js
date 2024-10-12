function deleteByEmail() {
    const inputRef = document.querySelector('input[name="email"]');
    const emailsRef = document.querySelectorAll('tbody tr td:nth-child(2)');
    const resultRef = document.querySelector('#result');

    if (inputRef.value === "") return;
    
    for (const email of emailsRef) {
        if (inputRef.value === email.textContent) {
            email.parentElement.remove();
            resultRef.textContent = "Deleted.";
            break;
        }
        resultRef.textContent = "Not found.";
    }

    inputRef.value = "";
    inputRef.focus();
}