function create(words) {

   const divBodyRef = document.getElementById("content");

   for (const word of words) {
      const newDiv = document.createElement("div");
      const newP = document.createElement("p");
      newP.textContent = word;
      newDiv.appendChild(newP).style.display = "none";
      divBodyRef.appendChild(newDiv);

      newDiv.addEventListener("click", function (event) {
         const clickedDiv = event.currentTarget;
         const pEl = clickedDiv.children[0];

         pEl.style.display = pEl.style.display === "block" ? "none" : "block";
      })
   }
}