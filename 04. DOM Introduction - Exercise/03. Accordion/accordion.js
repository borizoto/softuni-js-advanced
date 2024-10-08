function toggle() {
    const buttonToggle = document.getElementsByClassName(`button`)[0];
    const textToShow = document.querySelector(`#extra`);

    if (buttonToggle.textContent === `More`) {
        buttonToggle.textContent = `Less`;
        textToShow.style.display = `block`;
    } else if (buttonToggle.textContent === "Less") {
        buttonToggle.textContent = `More`;
        textToShow.style.display = `none`;
    }
}