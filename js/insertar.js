import {render} from "./creadorTapas.js"

let formulario = document.getElementById('formulario');
let nombreBar = document.getElementById('nombreBar');
let nombreTapa = document.getElementById('nombreTapa');
let imagen = document.getElementById('foto');
let descripcion = document.getElementById('descripcion');
let button = document.getElementById('volver');


let añadirIngrediente = document.getElementById('masIngredientes')
let insertarIngredientes = document.getElementById('insertarIngredientes');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(event.submitter.getAttribute('id') === 'enviar'){
        const formData = new FormData(formulario);
        // let data = Object.fromEntries(formData);
        delete formData.foto;
        // data.foto = []
        formData.append("foto", imagen.files[0])
        let data = {};
        let contador = 0;
        for(let i of formData){
            data[i] = i[1];
        }

        let option = {
            method: 'post',
            mode: 'cors',
            body: formData,
        }

        fetch('http://localhost/DWES/www/proyectoTapasJs/php/insertar.php', option)
        .then(res=>{
            if(res.status === 201){
                render();
                volver();
            }else{
                alert('No se pudo añadir la tapa');
            }
        })       
        
    }
})

button.addEventListener('click', volver);

//Con esta funcion podemos volver a la galeria de tapas
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

//Esta funcion permite añadir ingredientes a las tapas que queramos insertar
export function añadidorIngredientes(){
    
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

//Con esta funcion confirmamos los ingredientes que se han añadido
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

//Con esta funcion limpiamos el formulario
export function limpiarFormulario(){
    nombreBar.value = ' ';
    nombreTapa.value = ' ';
    descripcion.value = ' ';
}


//Con esta funcion seleccionsmos una imagen predeterminada
export function imagenSeleccionada(){
    if(imagen.value == ''){
        return imagenesTapas['alitas'];
    }else{
        for(let imagenData in imagenesTapas){
            if(imagenData == imagen.value){
               return imagenesTapas[imagenData];
            }
        }
    }
}