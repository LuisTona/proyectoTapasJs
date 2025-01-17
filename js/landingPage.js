import { render } from "./creadorTapas.js";
import { dataUsuarios, dataBares } from "./data.js";
import { limpiarFormulario } from "./insertar.js";

let insertar = document.getElementById('insertar');
let filtrarFav = document.getElementById('filtroFav');

insertar.addEventListener('click', ()=>{
    let formInsertar = document.getElementById('formInsertar');
    let insertarBotones = document.getElementById('botones');
    let tapas = document.getElementById('tapas');
    let titulo = document.getElementById('titulo');
    let insertarIngredientes = document.getElementById('insertarIngredientes');
    
    while(insertarBotones.firstChild){
        insertarBotones.firstChild.remove();
    }
    
    let enviar = document.createElement('input');
    enviar.type = 'submit';
    enviar.name = 'enviar';
    enviar.value = 'Enviar';
    enviar.class = 'enviar';
    enviar.setAttribute('id', 'enviar');
    insertarBotones.append(enviar);

    while(insertarIngredientes.firstChild){
        insertarIngredientes.firstChild.remove();
    }
    titulo.textContent = 'Insertar tapa';
    
    formInsertar.style.display = 'flex';
    tapas.style.display = 'none';
    limpiarFormulario();
})
let favoritos = false;

filtrarFav.addEventListener('click', ()=>{
    let user = JSON.parse(localStorage.getItem('userInfo')).name
    let arregloFav = [];
    if(favoritos == false){
        favoritos = true;
        for(let users of dataUsuarios){
        
            if(users.name == user){
                
                dataBares.forEach(e=>{
                    for(let tapaId of e.tapas){
                        for(let k = 0; k < users.favoritos.length; k++){
                            
                            if(users.favoritos[k] == tapaId.id){
                                let bar={
                                    nombreBar:e.nombreBar,
                                    tapas:[tapaId]
                                }
                                arregloFav.push(bar);
                            }

                        }
                        
                    }
                    
                })
            }
        }
        render(arregloFav);
        misFavoritos()

    }else{
        favoritos = false;
        render(dataBares);
        
    }
})

//Con esta funcion obtenemos las tapas que se han seleccionado como favoritos
export function misFavoritos(){
    let tapas = document.querySelectorAll('.tapasTitle');
    for(let user of dataUsuarios){
        if(user.name == JSON.parse(localStorage.getItem('userInfo')).name){
            for(let k = 0; k< user.favoritos.length; k++){
                for(let w = 0; w < tapas.length; w++){
                    if(tapas[w].attributes.tpsid.value == user.favoritos[k]){
                        tapas[w].firstElementChild.src = './svg/heart-solid.svg';
                    }
                }
            }
        }
    }
}

