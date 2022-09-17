const navbar = document.getElementById('navbar');

const ativarScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 1);

    navbar.classList.toggle('navbar-active', scrollY > 0)
}

window.addEventListener("scroll", ativarScroll)