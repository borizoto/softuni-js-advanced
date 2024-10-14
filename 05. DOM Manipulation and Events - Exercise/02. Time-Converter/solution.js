function attachEventsListeners1() {
    const buttonsRef = document.querySelectorAll('input[type=button]');
    const daysInputRef = document.getElementById('days');
    const hoursInputRef = document.getElementById('hours');
    const minutesInputRef = document.getElementById('minutes');
    const secondsInputRef = document.getElementById('seconds');

    for (const button of buttonsRef) {
        button.addEventListener("click", function () {

            const curEl = button.parentElement.children;
            const timeType = curEl[0].textContent;
            const timeUnit = Number(curEl[1].value);

            if (timeType === "Days: ") {
                hoursInputRef.value = timeUnit * 24;
                minutesInputRef.value = timeUnit * 1440;
                secondsInputRef.value = timeUnit * 86400;
            } else if (timeType === "Hours: ") {
                daysInputRef.value = timeUnit / 24;
                minutesInputRef.value = timeUnit * 60;
                secondsInputRef.value = timeUnit * 3600;
            } else if (timeType === "Minutes: ") {
                daysInputRef.value = timeUnit / 1440;
                hoursInputRef.value = timeUnit / 60;
                secondsInputRef.value = timeUnit * 60;
            } else if (timeType === "Seconds: ") {
                daysInputRef.value = timeUnit / 86400;
                hoursInputRef.value = timeUnit / 3600;
                minutesInputRef.value = timeUnit / 60;
            }
        })
    }
}





function attachEventsListeners2() {
    const buttonsRef = document.querySelectorAll('input[type=button]');
    const inputsRef = document.querySelectorAll('input[type=text]');
    const daysInputRef = document.getElementById('days');
    const hoursInputRef = document.getElementById('hours');
    const minutesInputRef = document.getElementById('minutes');
    const secondsInputRef = document.getElementById('seconds');

    let unitInDays = 0;

    for (const inputBox of inputsRef) {
        inputBox.addEventListener("change", function () {
            
            const curEl = inputBox.parentElement.children;
            const timeType = curEl[0].textContent;
            const timeUnit = Number(inputBox.parentElement.children[1].value);

            if (timeType === "Days: ") {
                unitInDays = timeUnit;
            } else if (timeType === "Hours: ") {
                unitInDays = timeUnit / 24;
            } else if (timeType === "Minutes: ") {
                unitInDays = timeUnit / 1440;
            } else if (timeType === "Seconds: ") {
                unitInDays = timeUnit / 86400;
            }
        })
    };

    for (const button of buttonsRef) {
        button.addEventListener("click", function () {

            daysInputRef.value = unitInDays;
            hoursInputRef.value = unitInDays * 24;
            minutesInputRef.value = unitInDays * 1440;
            secondsInputRef.value = unitInDays * 86400;
        })
    };
}


