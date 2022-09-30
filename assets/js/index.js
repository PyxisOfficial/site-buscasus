const navbar = document.getElementById("navbar"),
    target = document.querySelectorAll("[data-anime]"),
    mobileMenu = document.getElementById('mobileMenu'),
    navList = document.getElementById('navList'),
    navListPosition = navList.getAttribute('left'),
    line1 = document.getElementById('line1'),
    line2 = document.getElementById('line2'),
    line3 = document.getElementById('line3'),
    form = document.getElementById("form"),
    fade = document.getElementById('fade'),
    openModalBtnInfo = document.getElementById('openModalInfo'),
    closeModalBtnInfo = document.getElementById('closeModalInfo'),
    modalInfo = document.getElementById('modalInfo'),
    openModalBtnProximidade = document.getElementById('openModalProximidade'),
    closeModalBtnProximidade = document.getElementById('closeModalProximidade'),
    modalProximidade = document.getElementById('modalProximidade'),
    openModalBtnEscala = document.getElementById('openModalEscala'),
    closeModalBtnEscala = document.getElementById('closeModalEscala'),
    modalEscala = document.getElementById('modalEscala'),
    openModalBtnVoz = document.getElementById('openModalVoz'),
    closeModalBtnVoz = document.getElementById('closeModalVoz'),
    modalVoz = document.getElementById('modalVoz'),
    openModalBtnPlantoes = document.getElementById('openModalPlantoes'),
    closeModalBtnPlantoes = document.getElementById('closeModalPlantoes'),
    modalPlantoes = document.getElementById('modalPlantoes'),
    openModalBtnMapa = document.getElementById('openModalMapa'),
    closeModalBtnMapa = document.getElementById('closeModalMapa'),
    modalMapa = document.getElementById('modalMapa'),
    emailInput = document.getElementById("emailUser"),
    assuntoInput = document.getElementById("assuntoUser"),
    msgInput = document.getElementById("msgUser"),
    errorText = document.getElementsByClassName("error-text"),
    submitBtn = document.getElementById("submitBtn");

function animateElements() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach((e) => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    });
}

function changeNav() {
    navbar.classList.toggle("navbar-active", scrollY > 0);
}

function dropNavbar() {
    if (navListPosition == 0 ) {
        navList.classList.remove('nav-list-active')
        line1.classList.remove('line1-active')
        line2.classList.remove('line2-active')
        line3.classList.remove('line3-active')
    } else {
        navList.classList.toggle('nav-list-active')
        line1.classList.toggle('line1-active')
        line2.classList.toggle('line2-active')
        line3.classList.toggle('line3-active')
    }
}

function openModalInfo() {
    modalInfo.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtnInfo, closeModalBtnInfo, fade].forEach((el) => {
    el.addEventListener('click', openModalInfo);
})

function openModalProximidade() {
    modalProximidade.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtnProximidade, closeModalBtnProximidade, fade].forEach((el) => {
    el.addEventListener('click', openModalProximidade);
})

function openModalEscala() {
    modalEscala.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtnEscala, closeModalBtnEscala, fade].forEach((el) => {
    el.addEventListener('click', openModalEscala);
})

function openModalVoz() {
    modalVoz.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtnVoz, closeModalBtnVoz, fade].forEach((el) => {
    el.addEventListener('click', openModalVoz);
})

function openModalPlantoes() {
    modalPlantoes.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtnPlantoes, closeModalBtnPlantoes, fade].forEach((el) => {
    el.addEventListener('click', openModalPlantoes);
})

function openModalMapa() {
    modalMapa.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtnMapa, closeModalBtnMapa, fade].forEach((el) => {
    el.addEventListener('click', openModalMapa);
})

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
window.addEventListener("scroll", animateElements);
mobileMenu.addEventListener("click", dropNavbar);
submitBtn.addEventListener("click", validateInputs);
emailInput.addEventListener("input", removeInputsError);
assuntoInput.addEventListener("input", removeInputsError);
msgInput.addEventListener("input", removeInputsError);