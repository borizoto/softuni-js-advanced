function validate() {
    const inputRef = document.getElementById("email");
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    inputRef.addEventListener("change", function (event) {
        if (inputRef.value.match(pattern)) {
            inputRef.classList.remove("error");
        } else {
            inputRef.classList.add("error");
        }
    })
}