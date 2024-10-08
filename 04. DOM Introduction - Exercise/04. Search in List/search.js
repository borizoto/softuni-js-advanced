function search() {
   const townsRef = document.querySelectorAll(`#towns`)[0];
   const inputRef = document.querySelector(`#searchText`);
   const result = document.querySelector(`#result`)

   const townsArr = Array.from(townsRef.children);

   for (const town of townsArr) {
         town.style.textDecoration = "";
         town.style.fontWeight = "";
   }

   if (inputRef.value === ``) {
      return;
   }
   
   let indexesArr = [];

   for (const town of townsArr) {
      if (town.textContent.includes(inputRef.value)) {
         indexesArr.push(townsArr.indexOf(town));
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
      }
   }

   result.textContent = `${indexesArr.length} matches found`
   inputRef.value = "";
}
