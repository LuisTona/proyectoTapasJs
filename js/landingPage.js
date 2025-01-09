import { comprobarUsuario } from "./creadorTapas.js";

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    showSlide(currentSlide);

    setInterval(function () {
        showSlide(currentSlide + 1);
    }, 5000);

    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    prevButton.addEventListener('click', function () {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(currentSlide + 1);
    });
});


if(localStorage.getItem('userInfo') !== undefined || localStorage.getItem('userInfo') !== null){
    let acceso = document.getElementById('acceso');
    acceso.style.display = 'none'

    let userIdentificado = document.getElementById('userIdentificado');
    let identificador = document.getElementById('identificador');

    identificador.textContent = JSON.parse(localStorage.getItem('userInfo')).name
    userIdentificado.style.display = 'block'

    document.getElementById('logOut').addEventListener('click', logOut())
}

function logOut(){
    localStorage.removeItem('userInfo');
    comprobarUsuario();
}
