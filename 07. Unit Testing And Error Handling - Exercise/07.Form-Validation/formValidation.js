function validate() {
    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const passwordPattern = /^[a-zA-Z0-9_.-]{5,15}$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    const usernameInputRef = document.getElementById("username");
    const emailInputRef = document.getElementById("email");
    const passwordInputRef = document.getElementById("password");
    const confirmPasswordInputRef = document.getElementById("confirm-password");
    const isCompanyCheckBoxRef = document.getElementById("company");
    const companyInfoRef = document.getElementById("companyInfo");
    const submitBtnRef = document.getElementById("submit");
    const validDivRef = document.getElementById("valid");

    isCompanyCheckBoxRef.addEventListener("change", function () {
        if (isCompanyCheckBoxRef.checked === true) {
            companyInfoRef.style.display = "block";
        } else {
            companyInfoRef.style.display = "none";
        }
    });

    submitBtnRef.addEventListener("click", function (event) {
        event.preventDefault();

        usernameInputRef.style.borderColor = "";
        passwordInputRef.style.borderColor = "";
        confirmPasswordInputRef.style.borderColor = "";
        emailInputRef.style.borderColor = "";

        const fieldValidators = [];

        if (!usernameInputRef.value.match(usernamePattern)) {
            usernameInputRef.style.borderColor = "red";
            fieldValidators.push(false);
        }

        if (!(passwordInputRef.value.match(passwordPattern) && confirmPasswordInputRef.value.match(passwordPattern) && passwordInputRef.value === confirmPasswordInputRef.value)) {
            passwordInputRef.style.borderColor = "red";
            confirmPasswordInputRef.style.borderColor = "red";
            fieldValidators.push(false);
        }

        if (!emailInputRef.value.match(emailPattern)) {
            emailInputRef.style.borderColor = "red";
            fieldValidators.push(false);
        }

        if (isCompanyCheckBoxRef.checked === true) {
            const companyNumberRef = document.getElementById("companyNumber");

            if (companyNumberRef.value >= 1000 && companyNumberRef.value <= 9999) {
                companyNumberRef.style.borderColor = "";
            } else {
                companyNumberRef.style.borderColor = "red";
                fieldValidators.push(false);
            }
        }

        if (fieldValidators.includes(false)) {
            validDivRef.style.display = "none";
        } else {
            validDivRef.style.display = "";
        }
    });
}