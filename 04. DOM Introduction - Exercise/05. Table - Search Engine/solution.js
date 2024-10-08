function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.querySelector(`#searchField`);
      const tableRowsRef = document.querySelectorAll(`.container tbody tr`);
      
      if (input.value === '') {
         return;
      }

      for (const row of tableRowsRef) {
         row.classList.remove('select');
      }

      for (const row of tableRowsRef) {
            if (row.textContent.includes(input.value)) {
               row.classList.add(`select`);
            }
      }

      input.value = '';
   }
}