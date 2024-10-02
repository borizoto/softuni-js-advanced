function townPopulation(arr) {
    const resultObj = {};
    for (const string of arr) {
       let [city, population] = string.split(" <-> ");
 
       if (!resultObj.hasOwnProperty(city)) { 
          resultObj[city] = 0;
       }
 
       resultObj[city] += Number(population);
    }
 
    console.log(Object.entries(resultObj).join("\n").split(",").join(" : "));
 }