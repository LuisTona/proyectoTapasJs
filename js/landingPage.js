import { render } from "./creadorTapas.js";

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

export function controlUsuarios(){

    if(JSON.parse(localStorage.getItem('userInfo')).rol === 'admin'){
        let acceso = document.getElementById('acceso');
        acceso.style.display = 'none';
        
        let userIdentificado = document.getElementById('userIdentificado');
        let identificador = document.getElementById('identificador');
        let logout = document.getElementById('logOut');
           
            
        identificador.textContent = JSON.parse(localStorage.getItem('userInfo')).name;
        userIdentificado.style.display = 'block';
        logout.addEventListener('click', logOut);
            
    }else if(JSON.parse(localStorage.getItem('userInfo')).rol === 'user'){
        let acceso = document.getElementById('acceso');
        acceso.style.display = 'none';
        
        let userIdentificado = document.getElementById('userIdentificado');
        let identificador = document.getElementById('identificador');
        let logout = document.getElementById('logOut');
        let insertar = document.getElementById('insertar');
        let modificar = document.getElementById('modificar');
        let eliminar = document.getElementById('eliminar');
        
        identificador.textContent = JSON.parse(localStorage.getItem('userInfo')).name;
        userIdentificado.style.display = 'block';
        insertar.style.display = 'none';
        modificar.style.display = 'none';
        eliminar.style.display = 'none';
        logout.addEventListener('click', logOut);
    }
}

controlUsuarios();

export function logOut(){
    let userIdentificado = document.getElementById('userIdentificado');
    userIdentificado.style.display = 'none';
    
    localStorage.removeItem('userInfo');
    window.location.reload();
    window.location.href = '../index.html';
    render();    
}
