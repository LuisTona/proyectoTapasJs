
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

insertar.addEventListener('click', ()=>{
    let formInsertar = document.getElementById('formInsertar');
    let tapas = document.getElementById('tapas');
    console.log('a');
    formInsertar.style.display = 'flex';
    tapas.style.display = 'none';
})