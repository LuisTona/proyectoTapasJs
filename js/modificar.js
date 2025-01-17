import { render } from "./creadorTapas.js";
import { dataBares } from "./data.js";
import { imagenSeleccionada, ingredientesAñadidos } from "./insertar.js";

let nombreDeBar = document.getElementById('nombreBar');
let nombreDeTapa = document.getElementById('nombreTapa');
let descripcion = document.getElementById('descripcion');
let titulo = document.getElementById('titulo');

let insertarIngredientes = document.getElementById('insertarIngredientes');
let ingredientesNuevos = '';

//Con esta funcion hacemos que el formulario se rellene con los datos de cada tapa
//para que el usuario pueda modificarla
export function placeholderModificacion(id, barNombre){
    titulo.textContent = 'Modificar Tapa';
    for(let bares of dataBares){
        if(bares.nombreBar === barNombre){
            for(let tapaId in bares.tapas){   
                nombreDeBar.value = barNombre;
                if(bares.tapas[tapaId].id === id){
                    nombreDeTapa.value = bares.tapas[tapaId].nombreTapa;
                    descripcion.value = bares.tapas[tapaId].descripcion;
                    ingredientes(bares.tapas[tapaId]);
                }
            }
        }
    }
}

//En esta funcion implementamos la logica para modificar la tapa
export function modificar(id, barNombre){
    for(let bares of dataBares){
        
        if(bares.nombreBar === barNombre){
            for(let tapaId in bares.tapas){
                if(bares.tapas[tapaId].id === id){
                    ingredientesNuevos = ingredientesAñadidos();
                    let nuevaTapa ={
                        id: id,
                        nombreTapa: nombreDeTapa.value.trim(),
                        imagenTapa: imagenSeleccionada(),
                        descripcion: descripcion.value.trim(),
                        'ingredientes':ingredientesNuevos
                    }
                    bares.nombreBar = nombreDeBar.value.trim();
                    bares.tapas.splice(tapaId, 1, nuevaTapa);
                    render(dataBares);
                    document.getElementById('volver').click();
                }
            }
        }
    }

}

//Con esta funcion podemos modificar los ingredientes de la tapa que queremos modificar
function ingredientes(tapa){
    insertarIngredientes.innerHTML = ' ';
    for(let k = 0; k < tapa.ingredientes.length; k++){
        let label = document.createElement('label');
        label.for = `ingrediente${Math.floor((insertarIngredientes.children.length + 1)/2)+1}`;
        label.textContent = 'ingrediente ' + (Math.floor((insertarIngredientes.children.length + 1)/2)+1)
        let input = document.createElement('input');
        input.type = 'text';
        input.name = `ingrediente${Math.floor((insertarIngredientes.children.length + 1)/2)+1}`;
        input.setAttribute('id', 'ingrediente' + (Math.floor((insertarIngredientes.children.length + 1)/2)+1))
        input.value = tapa.ingredientes[k];
        insertarIngredientes.append(label);
        insertarIngredientes.append(input);
    }
}