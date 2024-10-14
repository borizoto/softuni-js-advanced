function attachEventsListeners() {
    const inputRef = document.getElementById("inputDistance");
    const outputRef = document.getElementById("outputDistance");
    const convertBtnRef = document.getElementById("convert");
    const distanceUnitFromBtnRef = document.getElementById("inputUnits");
    const distanceUnitToBtnRef = document.getElementById("outputUnits");
    
    let distanceInMeters = 0;

    const conversionsToMeters = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.344,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254,
    }
    
    convertBtnRef.addEventListener("click", function() {
        const unitToConvertFrom = distanceUnitFromBtnRef.value;
        const unitToConvertTo = distanceUnitToBtnRef.value;

        distanceInMeters = inputRef.value * conversionsToMeters[unitToConvertFrom];

        outputRef.value = distanceInMeters / conversionsToMeters[unitToConvertTo];
    })
}