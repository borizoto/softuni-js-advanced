function addItem() {
    const inputRef = document.getElementById('newItemText');
    const itemsRef = document.getElementById('items');

    if (inputRef.value === "") return;

    const liRef = document.createElement("li");
    liRef.textContent = inputRef.value;

    const deleteButtonRef = document.createElement("a");
    deleteButtonRef.textContent = "[Delete]";
    deleteButtonRef.href = "#";

    liRef.append(deleteButtonRef);
    itemsRef.append(liRef);

    deleteButtonRef.addEventListener("click", deleteFn);

    function deleteFn () {
        deleteButtonRef.parentElement.remove();
    };

    inputRef.value = "";
    inputRef.focus();
}