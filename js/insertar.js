import { controlUsuarios } from "./comprobacionUser.js";
import { dataBares } from "./data.js";
import {render} from "./creadorTapas.js"

controlUsuarios();

let formulario = document.getElementById('formulario');
let nombreBar = document.getElementById('nombreBar');
let nombreTapa = document.getElementById('nombreTapa');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let button = document.getElementById('volver');


formulario.addEventListener('submit', (event)=>{
    let nTapas = 0;
    event.preventDefault();
    dataBares.forEach(element => {
        element.tapas.forEach(() =>{
            nTapas += 1;
        })
        console.log(nTapas);
    });

    let dataTapa = {
        nombreBar: nombreBar.value.trim(),
        tapas: [
            {
                id: 'tp' + (nTapas + 1),
                nombreTapa: nombreTapa.value.trim(),
                imagenTapa: imagen.value.trim(),
                descripcion: descripcion.value.trim(),
            }
        ]
    };
    dataBares.push(dataTapa);
    volver();
    render();
})

button.addEventListener('click', volver);

function volver(){
    let formInsertar = document.getElementById('formInsertar');
    let tapas = document.getElementById('tapas');
    formInsertar.style.display = 'none';
    tapas.style.display = 'block';

}