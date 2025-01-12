import { controlUsuarios } from "./comprobacionUser.js";
import { dataBares } from "./data.js";


controlUsuarios();

let formulario = document.getElementById('formulario');
let nombreBar = document.getElementById('nombreBar');
let nombreTapa = document.getElementById('nombreTapa');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');

dataBares.forEach(element => {
    console.log(element);
    let arrayId = element.tapas;
    arrayId.forEach(elementTapa =>{
        console.log(elementTapa[0]);
    })
});

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    let dataTapa = {
        nombreTapa: nombreBar.value.trim(),
        tapa: [
            {
                id: null,
                nombreTapa: nombreTapa.value.trim(),
                imagenTapa: imagen.value.trim(),
                descricion: descripcion.value.trim(),
            }
        ]
    };
    dataBares.push(dataTapa);
    console.log(dataBares);
})



