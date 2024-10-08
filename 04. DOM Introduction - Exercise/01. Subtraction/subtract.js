function subtract() {
    const num1 = Number(document.querySelector(`#firstNumber`).value);
    const num2 = Number(document.querySelector(`#secondNumber`).value);
    let result = (document.querySelector(`#result`));
    
    result.textContent = num1 - num2;
 }