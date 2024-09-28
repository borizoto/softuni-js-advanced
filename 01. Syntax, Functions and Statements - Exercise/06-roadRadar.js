function roadRadar1(speed, area) {
    function checkSpeedOver(speed, limit) {
        if (speed > limit) {
            const speedDiff = speed - limit;
            let status = "";

            if (speedDiff <= 20) {
                status = "speeding";
            } else if (speedDiff <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }

            return console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limit} - ${status}`);
        } 
        else {
            return console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    }

    let limit = 0;

    switch (area) {
        case "residential": limit = 20; break;
        case "city": limit = 50; break;
        case "interstate": limit = 90; break;
        case "motorway": limit = 130; break;
    }

    checkSpeedOver(speed, limit);
}




function roadRadar2(speed, area) {
    const obj = {
        checkSpeedOver() {
            if (speed > limit) {
                const speedDiff = speed - limit;
                let status = "";

                if (speedDiff <= 20) {
                    status = "speeding";
                } else if (speedDiff <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }

                console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
        }
    }

    let limit = 0;

    switch (area) {
        case "residential": limit = 20; break;
        case "city": limit = 50; break;
        case "interstate": limit = 90; break;
        case "motorway": limit = 130; break;
    }

    obj.checkSpeedOver();
}