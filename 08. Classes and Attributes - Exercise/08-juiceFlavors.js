function juiceFlavors(arr) {
    const juiceMap = new Map();
    const bottlesMap = new Map();

    for (const string of arr) {
        let [flavor, qty] = string.split(" => ")
        qty = Number(qty);

        if (!juiceMap.has(flavor)) {
            juiceMap.set(flavor, 0);
        }

        juiceMap.set(flavor, juiceMap.get(flavor) + qty);
        
        if (juiceMap.get(flavor) >= 1000) {
            const bottles = Math.trunc(juiceMap.get(flavor) / 1000);
            juiceMap.set(flavor, juiceMap.get(flavor) - bottles * 1000);

            if (!bottlesMap.has(flavor)) {
                bottlesMap.set(flavor, 0);
            }
            bottlesMap.set(flavor, bottlesMap.get(flavor) + bottles);
        }
    }
    for (const [flavor, qty] of bottlesMap) {
        console.log(`${flavor} => ${qty}`)
    }
}