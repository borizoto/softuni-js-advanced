function solve() {
   const textAreaRef = document.getElementsByTagName("textarea")[0];
   const buttonsRef = document.querySelectorAll(".product .product-add");
   const shoppingCartObj = {};

   for (const addButtonEl of buttonsRef) {
      addButtonEl.addEventListener("click", function (event) {

         const curElement = event.currentTarget.parentElement;
         const productPrice = Number(curElement.querySelector(".product-line-price").textContent);
         const productName = curElement.querySelector(".product-title").textContent;

         if (!shoppingCartObj[productName]) {
            shoppingCartObj[productName] = productPrice;
         } else {
            shoppingCartObj[productName] += productPrice;
         }

         textAreaRef.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }

   const checkOutBtn = document.getElementsByClassName("checkout")[0];

   checkOutBtn.addEventListener("click", function () {
      const productsBoughtList = Object.keys(shoppingCartObj);
      const totalPrice = Object.values(shoppingCartObj).reduce((acc, curValue) => acc + curValue, 0);
      textAreaRef.textContent += `You bought ${productsBoughtList.join(", ")} for ${totalPrice.toFixed(2)}.`;

      const allButtons = document.querySelectorAll("button");
      allButtons.forEach(btnEllement => btnEllement.disabled = true);
   });
}