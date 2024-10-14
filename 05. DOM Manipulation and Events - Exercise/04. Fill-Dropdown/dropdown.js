function addItem() {
    
    const menuRef = document.getElementById("menu");
    const newItemTextRef = document.getElementById("newItemText");
    const newItemValueRef = document.getElementById("newItemValue");
    
    if (newItemTextRef === "" || newItemValueRef === "") return;

    const option = document.createElement("option");
    option.textContent = newItemTextRef.value;
    option.value = newItemValueRef.value;

    menuRef.appendChild(option);

    newItemTextRef.value = "";
    newItemValueRef.value = "";
}