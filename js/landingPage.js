import { render } from "./creadorTapas.js";
import { dataUsuarios, dataBares } from "./data.js";
import { limpiarFormulario } from "./insertar.js";

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


let insertar = document.getElementById('insertar');
let modificar = document.getElementById('modificar');
let enviar = document.getElementById('enviar');
let filtrarFav = document.getElementById('filtroFav');

insertar.addEventListener('click', ()=>{
    let formInsertar = document.getElementById('formInsertar');
    let tapas = document.getElementById('tapas');
    
    modificar.style.display = 'none';
    enviar.style.display = 'block';
    
    formInsertar.style.display = 'flex';
    tapas.style.display = 'none';
    limpiarFormulario();
})

filtrarFav.addEventListener('click', ()=>{
    let user = JSON.parse(localStorage.getItem('userInfo')).name
    let arregloFav = [];
    for(let users of dataUsuarios){
    
        if(users.name == user){
            
            dataBares.forEach(e=>{
                for(let tapaId of e.tapas){
                    for(let k = 0; k < users.favoritos.length; k++){
                        
                        if(users.favoritos[k] == tapaId.id){
                            let bar={
                                nombreBar:e.nombreBar,
                                tapas:[tapaId]
                            }
                            arregloFav.push(bar);
                        }

                    }
                    
                }
                
            })
        }
    }
    render(arregloFav)
    let img = document.querySelectorAll('.like');
    img.src= './svg/heart-solid.svg';
    console.log(img);
    console.log(arregloFav);
})

