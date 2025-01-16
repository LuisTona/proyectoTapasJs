import { dataBares } from "./data.js";

let nombreDeBar = document.getElementById('nombreBar');
let nombreDeTapa = document.getElementById('nombreTapa');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let button = document.getElementById('volver');

export function placeholderModificacion(id, nombreBar){
    for(let bares of dataBares){
    
            if(bares.nombreBar === nombreBar){
                for(let tapaId in bares.tapas){
                    
                    if(bares.tapas[tapaId].id === id){
    
                        bares.tapas.splice(tapaId, 1, );
    
                        
                    }
                }
            }
        }
}