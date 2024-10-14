function encodeAndDecodeMessages() {

    const [enteredTextRef, receivedTextRef] = document.getElementsByTagName("textarea");
    const [encodeBtn, decodeBtn] = document.getElementsByTagName("button");

    encodeBtn.addEventListener("click", function () {
        const msgReceived = enteredTextRef.value;
        let msgToSend = "";

        for (let char of msgReceived) {
            char = (char.charCodeAt(0) + 1);
            msgToSend += String.fromCharCode(char);
        }

        enteredTextRef.value = "";
        receivedTextRef.textContent = msgToSend;
    })

    decodeBtn.addEventListener("click", function () {
        const msgReceived = receivedTextRef.textContent;
        let msgToDisplay = "";

        for (let char of msgReceived) {
            char = (char.charCodeAt(0) - 1);
            msgToDisplay += String.fromCharCode(char);
        }

        receivedTextRef.textContent = msgToDisplay;
    })
}