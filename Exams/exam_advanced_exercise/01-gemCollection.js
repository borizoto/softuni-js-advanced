function solve() {
    const gemstoneNameInputRef = document.getElementById("gem-name");
    const colorInputRef = document.getElementById("color");
    const caratsInputRef = document.getElementById("carats");
    const priceInputRef = document.getElementById("price");
    const selectInputRef = document.getElementById("type");
    const addBtnRef = document.getElementById("add-btn");
    const previewBoxRef = document.getElementById("preview-list");
    const collectionRef = document.getElementById("collection");

    addBtnRef.addEventListener("click", function () {
        const inputsArr = [gemstoneNameInputRef, colorInputRef, caratsInputRef, priceInputRef, selectInputRef];
        if (inputsArr.some(element => element.value === "")) {
            return;
        }

        //Attaching previewList to the DOM 
        previewBoxRef.appendChild(createPreviewElement(gemstoneNameInputRef.value, colorInputRef.value, caratsInputRef.value, priceInputRef.value, selectInputRef.value));

        inputsArr.forEach(element => element.value = "");
        addBtnRef.disabled = true;
    })

    function createPreviewElement(gemstoneName, color, carats, price, type) {
        //Creating the preview list
        const previewLiElement = document.createElement("li");
        previewLiElement.classList.add("gem-info");

        const article = document.createElement("article");

        const h4 = document.createElement("h4");
        h4.textContent = gemstoneName;

        const pColor = document.createElement("p");
        pColor.textContent = `Color: ${color}`;

        const pCarats = document.createElement("p");
        pCarats.textContent = `Carats: ${carats}`;

        const pPrice = document.createElement("p");
        pPrice.textContent = `Price: ${price}$`;

        const pType = document.createElement("p");
        pType.textContent = `Type: ${type}`;

        const saveBtnRef = document.createElement("button");
        saveBtnRef.classList.add("save-btn");
        saveBtnRef.textContent = "Save to Collection";

        const editBtnRef = document.createElement("button");
        editBtnRef.classList.add("edit-btn");
        editBtnRef.textContent = "Edit Information";

        const cancelBtnRef = document.createElement("button");
        cancelBtnRef.classList.add("cancel-btn");
        cancelBtnRef.textContent = "Cancel";

        editBtnRef.addEventListener("click", function () {
            gemstoneNameInputRef.value = gemstoneName;
            colorInputRef.value = color;
            caratsInputRef.value = carats;
            priceInputRef.value = price;
            selectInputRef.value = type;

            previewLiElement.remove();
            addBtnRef.disabled = false;
        })

        saveBtnRef.addEventListener("click", function () {
            const collectionLiElement = document.createElement("li");

            const pCollection = document.createElement("p");
            pCollection.classList.add("collection-item");
            pCollection.textContent = `${gemstoneName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

            collectionLiElement.appendChild(pCollection);
            collectionRef.appendChild(collectionLiElement);

            previewLiElement.remove();
            addBtnRef.disabled = false;
        })

        cancelBtnRef.addEventListener("click", function() {
            previewLiElement.remove();
            addBtnRef.disabled = false;
        })

        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);

        previewLiElement.appendChild(article);
        previewLiElement.appendChild(saveBtnRef);
        previewLiElement.appendChild(editBtnRef);
        previewLiElement.appendChild(cancelBtnRef);

        return previewLiElement;
    }
}