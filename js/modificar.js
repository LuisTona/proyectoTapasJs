import { render } from "./creadorTapas.js";
import { dataBares } from "./data.js";

let nombreDeBar = document.getElementById('nombreBar');
let nombreDeTapa = document.getElementById('nombreTapa');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let titulo = document.getElementById('titulo');


export function placeholderModificacion(id, barNombre){
    titulo.textContent = 'Modificar Tapa';
    for(let bares of dataBares){
        if(bares.nombreBar === barNombre){
            for(let tapaId in bares.tapas){   
                nombreDeBar.value = barNombre;
                if(bares.tapas[tapaId].id === id){
                    nombreDeTapa.value = bares.tapas[tapaId].nombreTapa;
                    descripcion.value = bares.tapas[tapaId].descripcion;
                }
            }
        }
    }
}

export function modificar(id, barNombre){
    for(let bares of dataBares){
        
        if(bares.nombreBar === barNombre){
            for(let tapaId in bares.tapas){
                if(bares.tapas[tapaId].id === id){
                    
                    let nuevaTapa ={
                        id: id,
                        nombreTapa: nombreDeTapa.value.trim(),
                        imagenTapa: imagen.value.trim(),
                        descripcion: descripcion.value.trim(),
                    }
                    bares.nombreBar = nombreDeBar.value.trim()
                    bares.tapas.splice(tapaId, 1, nuevaTapa);
                    render();
                    console.log(dataBares);
                }
            }
        }
    }

}

// console.log(tapaId);
// bares.tapas.splice(tapaId, 1, nuevaTapa);
// console.log(dataBares);

