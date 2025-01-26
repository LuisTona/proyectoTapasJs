// import { render } from "./creadorTapas.js";
// import { dataUsuarios, dataBares } from "./data.js";
import { limpiarFormulario } from "./insertar.js";

let insertar = document.getElementById('insertar');
let filtrarFav = document.getElementById('filtroFav');


insertar.addEventListener('click', ()=>{
    let formInsertar = document.getElementById('formInsertar');
    let insertarBotones = document.getElementById('botones');
    let tapas = document.getElementById('tapas');
    let titulo = document.getElementById('titulo');
    // let insertarIngredientes = document.getElementById('insertarIngredientes');
    
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

    // while(insertarIngredientes.firstChild){
    //     insertarIngredientes.firstChild.remove();
    // }
    titulo.textContent = 'Insertar tapa';
    
    formInsertar.style.display = 'flex';
    tapas.style.display = 'none';
    limpiarFormulario();
})
// let favoritos = false;

// filtrarFav.addEventListener('click', ()=>{
//     let user = localStorage.getItem('nombre')
//     let arregloFav = [];
//     if(favoritos == false){
//         favoritos = true;
//         for(let users of dataUsuarios){
        
//             if(users.name == user){
                
//                 dataBares.forEach(e=>{
//                     for(let tapaId of e.tapas){
//                         for(let k = 0; k < users.favoritos.length; k++){
                            
//                             if(users.favoritos[k] == tapaId.id){
//                                 let bar={
//                                     nombreBar:e.nombreBar,
//                                     tapas:[tapaId]
//                                 }
//                                 arregloFav.push(bar);
//                             }

//                         }
                        
//                     }
                    
//                 })
//             }
//         }
//         render(arregloFav);
//         misFavoritos()

//     }else{
//         favoritos = false;
//         render(dataBares);
        
//     }
// })

// //Con esta funcion obtenemos las tapas que se han seleccionado como favoritos
// export function misFavoritos(){
//     let tapas = document.querySelectorAll('.tapasTitle');
//     for(let user of dataUsuarios){
//         if(user.name == localStorage.getItem('nombre')){
//             for(let k = 0; k< user.favoritos.length; k++){
//                 for(let w = 0; w < tapas.length; w++){
//                     if(tapas[w].attributes.tpsid.value == user.favoritos[k]){
//                         tapas[w].firstElementChild.src = './svg/heart-solid.svg';
//                     }
//                 }
//             }
//         }
//     }
// }

export function comprobarUsuario(){
    
    let acceso = document.getElementById('acceso');

    if(localStorage.getItem('tipo') === null){
        localStorage.setItem('invitado', 'invitado');
        acceso.style.display = 'block';
        let eliminar = document.getElementById('eliminar');
        let modificar = document.getElementById('modificarModal');
        let favoritos = document.getElementById('filtroFav');
        favoritos.style.display = 'none';
        eliminar.style.display = 'none';
        modificar.style.display = 'none';
        return false;
    }else{
        localStorage.removeItem('invitado');
        controlUsuarios();
        return true;
    }
}

//con esta funcion controlamos si un usuario logeado es admin o user normal 
// si el usuario logeado es admin, este proda añadir, modificar o eliminar 
//si el usuario es user, este solo podra ver la galeria de tapas y añadir tapas a favoritos
export function controlUsuarios(){

    if(localStorage.getItem('tipo') === 'admin'){
        
        identificadorUsuario();

    }else if(localStorage.getItem('tipo') === 'user'){
        
        identificadorUsuario();

        let insertar = document.getElementById('insertar');
        let eliminar = document.getElementById('eliminar');
        let modificar = document.getElementById('modificarModal');
    
        insertar.style.display = 'none';
        eliminar.style.display = 'none';
        modificar.style.display = 'none';
    }
}
//con esta funcion permitimos al usuario poder cerrar sesion
export function logOut(){
    let userIdentificado = document.getElementById('userIdentificado');
    userIdentificado.style.display = 'none';
    
    localStorage.removeItem('tipo');
    localStorage.removeItem('nombre');
    localStorage.removeItem('token');
    window.location.href = './index.html';
}


//con esta funcion reutilizamos el codigo para poner el nombre de un usuario normal o un admin
//
function identificadorUsuario(){
    let acceso = document.getElementById('acceso');
    acceso.style.display = 'none';
    
    let userIdentificado = document.getElementById('userIdentificado');
    let identificador = document.getElementById('identificador');
    let logout = document.getElementById('logOut');
        
        
    identificador.textContent = localStorage.getItem('nombre');
    userIdentificado.style.display = 'block';
    logout.addEventListener('click', logOut);
}


