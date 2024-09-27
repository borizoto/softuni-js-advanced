function daysInMonths(num1, num2) {
    
    function daysInSpecifiedMonth (month, year) {
        const result = new Date(year, month, 0).getDate();
        return result;
    }

    const daySpecified = daysInSpecifiedMonth(num1, num2);
    console.log(daySpecified);
}