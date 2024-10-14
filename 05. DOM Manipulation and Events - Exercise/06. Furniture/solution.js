function solve() {
  const [inputRef, outputRef] = document.getElementsByTagName("textarea");
  const [generateBtnRef, buyBtnRef] = document.getElementsByTagName("button");

  let inputArr = {};

  generateBtnRef.addEventListener("click", function () {
    if (inputRef.value === "") return;

    const inputObjArr = JSON.parse(inputRef.value);

    for (const obj of inputObjArr) {
      const tbodyRef = document.getElementsByTagName("tbody")[0];
      let trEl = document.createElement("tr");
      trEl.innerHTML = `<td><img src="${obj.img}"></td>` + `<td><p>${obj.name}</p></td>` + `<td><p>${Number(obj.price)}</p></td>` + `<td><p>${Number(obj.decFactor)}</p></td>` + `<td><input type="checkbox"></td>`;
      tbodyRef.appendChild(trEl);
    }

    inputRef.value = "";
  })

  buyBtnRef.addEventListener("click", function () {
    const boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorFactor = 0;

    const checkBoxes = Array.from(document.querySelectorAll('input'));
    for (const checkbox of checkBoxes) {
      if (checkbox.checked === true) {
        const checkboxParent = checkbox.parentElement.parentElement;
        boughtFurniture.push(checkboxParent.children[1].textContent);
        totalPrice += Number(checkboxParent.children[2].textContent);
        totalDecorFactor += Number(checkboxParent.children[3].textContent);
      }
    }

    outputRef.textContent += "Bought furniture: " + boughtFurniture.join(", ") + "\n";
    outputRef.textContent += `Total price: ${totalPrice.toFixed(2)}` + "\n";
    outputRef.textContent += `Average decoration factor: ${totalDecorFactor / boughtFurniture.length}`;
  })
}