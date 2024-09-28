function previousDay(year, month, day) {
    const dateBefore = new Date(year, month - 1, day - 1);
    console.log(`${dateBefore.getFullYear()}-${dateBefore.getMonth() + 1}-${dateBefore.getDate()}`)
 }