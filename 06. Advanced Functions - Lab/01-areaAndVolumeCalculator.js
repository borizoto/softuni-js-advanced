function solve(area, vol, input) {

    const inputFromJson = JSON.parse(input);
    let resultObj = {};
    const resultArr = [];

    for (const obj of inputFromJson) {
        for (const key in obj) {
            obj[key] = Number(obj[key]);
        }

        resultObj = { area: area.call(obj), volume: vol.call(obj) };
        resultArr.push(resultObj);
    }
    return resultArr;
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)

solve(area, vol, `[
{"x":"10","y":"-22","z":"10"},
{"x":"47","y":"7","z":"-5"},
{"x":"55","y":"8","z":"0"},
{"x":"100","y":"100","z":"100"},
{"x":"55","y":"80","z":"250"}
]`)
