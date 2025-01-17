import { dataBares, imagenesTapas } from "./data.js";
import {render} from "./creadorTapas.js"
import { modificar } from "./modificar.js";


let formulario = document.getElementById('formulario');
let nombreBar = document.getElementById('nombreBar');
let nombreTapa = document.getElementById('nombreTapa');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let button = document.getElementById('volver');


let añadirIngrediente = document.getElementById('masIngredientes')
let insertarIngredientes = document.getElementById('insertarIngredientes');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(event.submitter.getAttribute('id') === 'enviar'){
        let nTapas = 0;
        
        dataBares.forEach(element => {
            element.tapas.forEach(() =>{
                nTapas += 1;
            })
        });
        // console.log(imagen.value);
        let dataTapa = {
            nombreBar: nombreBar.value.trim(),
            tapas: [
                {
                    id: 'tp' + (nTapas + 1),
                    nombreTapa: nombreTapa.value.trim(),
                    imagenTapa: imagenSeleccionada(),
                    descripcion: descripcion.value.trim(),
                    ingredientes: ingredientesAñadidos()
                }
            ]
        };
        dataBares.push(dataTapa);
        volver();
        render();
    }
})

button.addEventListener('click', volver);

function volver(){
    let formInsertar = document.getElementById('formInsertar');
    let tapas = document.getElementById('tapas');
    let btnModificar = document.getElementById('modificar');
    formInsertar.style.display = 'none';
    tapas.style.display = 'block';
    btnModificar.click();
}

añadirIngrediente.addEventListener('click', (e)=>{
    e.preventDefault();
    añadidorIngredientes();
});

function añadidorIngredientes(){
    
    let label = document.createElement('label');
    label.for = `ingrediente${Math.floor((insertarIngredientes.children.length + 1)/2)+1}`;
    label.textContent = 'ingrediente ' + (Math.floor((insertarIngredientes.children.length + 1)/2)+1)
    let input = document.createElement('input');
    input.type = 'text';
    input.name = `ingrediente${Math.floor((insertarIngredientes.children.length + 1)/2)+1}`;
    input.setAttribute('id', 'ingrediente' + (Math.floor((insertarIngredientes.children.length + 1)/2)+1))
    insertarIngredientes.append(label);
    insertarIngredientes.append(input);
}

export function ingredientesAñadidos(){
    let lista = insertarIngredientes.children
    let arreglo = []
    for(let k = 1; k < lista.length; k +=2){
        if(lista[k].value.trim() !== ''){
            arreglo.push(lista[k].value)
        }
        
    }
    return arreglo;
}

export function limpiarFormulario(){
    nombreBar.value = ' ';
    nombreTapa.value = ' ';
    imagen.value = '';
    descripcion.value = ' ';
}

export function imagenSeleccionada(){
    for(let imagenData in imagenesTapas){
        if(imagenData == imagen.value){
           return imagenesTapas[imagenData];
        }
    }
}