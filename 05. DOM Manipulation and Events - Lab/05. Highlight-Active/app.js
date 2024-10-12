function focused() {
    const sectionsRef = document.getElementsByTagName("input");
    
    for (const section of sectionsRef) {
        section.addEventListener("focus", function() {
            section.parentElement.classList.add("focused");
        })

        section.addEventListener("blur", function() {
            section.parentElement.classList.remove("focused");
        })
    }
}   
