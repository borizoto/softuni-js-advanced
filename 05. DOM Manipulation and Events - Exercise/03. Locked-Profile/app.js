function lockedProfile() {
    
    const profiles = document.getElementsByClassName("profile");

    for (const curProfile of profiles) {

        let radioBtns = 0;
        const showMoreBtn = curProfile.children[10];

        if (curProfile.querySelector('input[name="user1Username"]')) {
            radioBtns = document.querySelectorAll('input[name="user1Locked"]');
        } else if (curProfile.querySelector('input[name="user2Username"]')) {
            radioBtns = document.querySelectorAll('input[name="user2Locked"]');
        } else if (curProfile.querySelector('input[name="user3Username"]')) {
            radioBtns = document.querySelectorAll('input[name="user3Locked"]');
        }

        for (const radioBtn of radioBtns) {
            radioBtn.addEventListener("change", function () {
                showMoreBtn.addEventListener("click", function () {
                    const hiddenDetails = showMoreBtn.parentElement.children[9];

                    showMoreBtn.textContent = showMoreBtn.textContent === "Show more" ? "Hide it" : "Show more";
                    hiddenDetails.style.display = hiddenDetails.style.display === "block" ? "none" : "block";
                })
            })
        }
    }
}