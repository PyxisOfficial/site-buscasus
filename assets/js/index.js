const navbar = document.getElementById("navbar"),
    form = document.getElementById("form"),
    emailInput = document.getElementById("emailUser"),
    assuntoInput = document.getElementById("assuntoUser"),
    msgInput = document.getElementById("msgUser"),
    errorText = document.getElementsByClassName("error-text"),
    submitBtn = document.getElementById("submitBtn");

function changeNav() {
    navbar.classList.toggle("navbar-active", scrollY > 0);
}

function validateInputs() {
    const regexEmail = /\S+@\S+\.\S+/,
        emailTest = regexEmail.test(emailInput.value),
        assuntoValue = assuntoInput.value,
        msgValue = msgInput.value;

    if (emailTest === false) {
        emailInput.classList.add("input-error");
        errorText[0].classList.add("active");
    } else {
        emailInput.classList.remove("input-error");
        errorText[0].classList.remove("active");
    }

    if (assuntoValue === "") {
        assuntoInput.classList.add("input-error");
        errorText[1].classList.add("active");
    } else {
        assuntoInput.classList.remove("input-error");
        errorText[1].classList.remove("active");
    }

    if (msgValue === "") {
        msgInput.classList.add("input-error");
        errorText[2].classList.add("active");
    } else {
        msgInput.classList.remove("input-error");
        errorText[2].classList.remove("active");
    }

    if (emailTest === true && assuntoValue !== "" && msgValue !== "") {
        form.submit();
    }
}

function removeInputsError() {
    const regexEmail = /\S+@\S+\.\S+/,
        emailTest = regexEmail.test(emailInput.value),
        assuntoValue = assuntoInput.value,
        msgValue = msgInput.value;

    if (emailTest === true) {
        emailInput.classList.remove("input-error");
        errorText[0].classList.remove("active");
    }

    if (assuntoValue !== "") {
        assuntoInput.classList.remove("input-error");
        errorText[1].classList.remove("active");
    }

    if (msgValue !== "") {
        msgInput.classList.remove("input-error");
        errorText[2].classList.remove("active");
    }
}

window.addEventListener("scroll", changeNav);
submitBtn.addEventListener("click", validateInputs);
emailInput.addEventListener("input", removeInputsError);
assuntoInput.addEventListener("input", removeInputsError);
msgInput.addEventListener("input", removeInputsError);