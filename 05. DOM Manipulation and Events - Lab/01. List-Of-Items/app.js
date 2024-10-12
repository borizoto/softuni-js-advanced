function addItem() {
    const textInputRef = document.querySelector("#newItemText");
    const itemsRef = document.querySelector("#items");

    if (textInputRef.value === "") return;
        
    const newLiElement = document.createElement("li");
    newLiElement.textContent = textInputRef.value;
    itemsRef.appendChild(newLiElement);    

    textInputRef.value = "";
    textInputRef.focus();
}