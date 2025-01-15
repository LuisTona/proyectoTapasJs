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

let añadirIngrediente = document.getElementById('masIngredientes')
let insertarIngredientes = document.getElementById('insertarIngredientes');

formulario.addEventListener('submit', (event)=>{
    let nTapas = 0;
    event.preventDefault();
    
    dataBares.forEach(element => {
        element.tapas.forEach(() =>{
            nTapas += 1;
        })
    });

    let dataTapa = {
        nombreBar: nombreBar.value.trim(),
        tapas: [
            {
                id: 'tp' + (nTapas + 1),
                nombreTapa: nombreTapa.value.trim(),
                imagenTapa: imagen.value.trim(),
                descripcion: descripcion.value.trim(),
                ingredientes: ingredientesAñadidos()
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

function ingredientesAñadidos(){
    let lista = insertarIngredientes.children
    let arreglo = []
    for(let k = 1; k < lista.length; k +=2){
        
        arreglo.push(lista[k].value)
        
    }

    return arreglo;
}