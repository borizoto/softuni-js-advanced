function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputRef = document.querySelector(`#inputs textarea`);
      const bestRestaurantRef = document.querySelector(`#bestRestaurant p`);
      const bestWorkersRef = document.querySelector(`#workers p`);

      if (inputRef.value === "") {
         return;
      }

      const input = JSON.parse(inputRef.value);

      const restaurantObj = {};

      for (const string of input) {
         let [restaurantName, workers] = string.split(" - ");
         workers = workers.split(", ");

         if (!restaurantObj.hasOwnProperty(restaurantName)) {
            restaurantObj[restaurantName] = {};

            for (const string of workers) {
               let [curWorker, workerSalary] = string.split(" ");
               workerSalary = Number(workerSalary);

               restaurantObj[restaurantName][curWorker] = workerSalary;
            }
         }
         else {
            for (const string of workers) {
               let [curWorker, workerSalary] = string.split(" ");
               workerSalary = Number(workerSalary);

               restaurantObj[restaurantName][curWorker] = workerSalary;
            }
         }
      }

      const totalRestaurantsArr = Object.keys(restaurantObj);
      let curBiggestAvgSalary = 0;
      let curBiggestAvgRes = "";

      for (const restaurant of totalRestaurantsArr) {
         const workersCount = Object.values(restaurantObj[restaurant]).length;
         let avgSalary = (Object.values(restaurantObj[restaurant]).reduce((acc, curValue) => acc + curValue) / workersCount);
         if (avgSalary > curBiggestAvgSalary) {
            curBiggestAvgSalary = avgSalary;
            curBiggestAvgRes = restaurant;
         }
      }

      const bestWorkers = Object.entries(restaurantObj[curBiggestAvgRes]);
      bestWorkers.sort((arr1, arr2) => arr2[1] - arr1[1]);
      let bestWorkersOutput = "";

      for (const [worker, salary] of bestWorkers) {
         bestWorkersOutput += `Name: ${worker} With Salary: ${salary} `;
      }
      bestWorkersOutput.trim();

      const bestSalary = Math.max(...Object.values(restaurantObj[curBiggestAvgRes]));
      bestRestaurantRef.textContent = `Name: ${curBiggestAvgRes} Average Salary: ${curBiggestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      bestWorkersRef.textContent = bestWorkersOutput;

      inputRef.value = "";
   }
}