function attachGradientEvents() {
    const resultRef = document.getElementById("result");
    const box = document.getElementById("gradient");

    box.addEventListener("mousemove", function (event) {
        const percentagePointer = Math.floor((event.offsetX/event.currentTarget.clientWidth) * 100);
        resultRef.textContent = `${percentagePointer}%`;
    });

    box.addEventListener("mouseout", function (event) {
        resultRef.textContent = "";
    });
}