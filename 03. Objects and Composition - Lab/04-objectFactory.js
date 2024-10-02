function factory1(library, orders) {
    const resultArr = [];
    
    for (const order of orders) {
       const curObj = order.template;
       for (const part of order.parts) {
          curObj[part] = library[part];
       }
 
       resultArr.push(curObj);
    }
    return resultArr;
 }


 function factory2(library, orders) {
    const resultArr = [];
    
    for (const order of orders) {
       const curObj = {...order.template};
       for (const part of order.parts) {
          curObj[part] = library[part];
       }
 
       resultArr.push(curObj);
    }
    return resultArr;
 }