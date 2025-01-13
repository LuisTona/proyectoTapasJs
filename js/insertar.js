import { controlUsuarios } from "./comprobacionUser.js";
import { dataBares } from "./data.js";


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
        console.log(element.tapas);
        element.tapas.forEach(() =>{
            nTapas += 1;
        })
        console.log(nTapas);
    });

    let dataTapa = {
        nombreTapa: nombreBar.value.trim(),
        tapa: [
            {
                id: nTapas + 1,
                nombreTapa: nombreTapa.value.trim(),
                imagenTapa: imagen.value.trim(),
                descricion: descripcion.value.trim(),
            }
        ]
    };
    dataBares.push(dataTapa);

    if(dataBares.push(dataTapa)){
        alert("Tapa insertada correctamente");
    }else{
        alert("No se pudo insertar la tapa");
    }
    console.log(dataBares);
})

button.addEventListener('click', ()=>{
    let formInsertar = document.getElementById('formInsertar');
    let tapas = document.getElementById('tapas');
    console.log('a');
    formInsertar.style.display = 'none';
    tapas.style.display = 'block';
})

