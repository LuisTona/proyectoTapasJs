// import { dataBares } from "./data.js";
// import { dataUsuarios } from "./data.js";
import { comprobarUsuario, controlUsuarios } from "./landingPage.js";
// import { eliminar } from "./eliminar.js";
// import { modificar, placeholderModificacion } from "./modificar.js";
// import { misFavoritos } from "./landingPage.js";

comprobarUsuario();

let numPage = 0;
let tapasPerPage = 6;
// controlUsuarios();
// render();
//La principal funcion de render es crear todas las tapas que esten almacenadas
//en databares que es la "base de datos" usada
// export function render(data){
//     console.log(data);
//     let grid = document.getElementById('tapasGrid');
//     grid.innerHTML = ' ';
//     data.forEach(element => {
//         let name = element.nombreBar; 
//         creadorTarjeta(name, element.tapas);
//     });
//     misFavoritos()
// }
// //La principal funcionalidad es la creacion de las targetas de cada tapa
function creadorTarjeta(data){
    // vamos a crear las tarjetas
    // console.log(data);
    let gridTapas = document.getElementById('tapasGrid');

    gridTapas.innerHTML = '';
    let inicio = numPage * tapasPerPage;
    let final = (numPage * tapasPerPage) + tapasPerPage;

    data.slice(inicio, final).forEach(element => {
        let tarjetaTapa = document.createElement('div');
        tarjetaTapa.className = 'tapasTitle'
        tarjetaTapa.setAttribute('tpsId', `${element.id_tapa}`);
        if(comprobarUsuario()){
            tarjetaTapa.append(creadorLike()); 
        }
        
        tarjetaTapa.append(creadorNombreBar(element.nombre_bar)); 
        tarjetaTapa.append(creadorImagenTapa(element));
        tarjetaTapa.append(creadorDescripcion(element.nombre_tapa, element.descripcion));
        tarjetaTapa.append(creadorBoton());
        tarjetaTapa.addEventListener('click', (e)=>{
            if(e.target.getAttribute('id') == 'informacion'){
                modalContenido(e.target.parentNode, data);
            }
        })
        gridTapas.append(tarjetaTapa);
    });
      
}

// // // //La principal funcionalidad es la creacion de los botones de la modal
export function creadorBoton(){
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#exampleModal');
    button.setAttribute('id', 'informacion')
    button.textContent ='Mas informacion';
    return button;
}

// // // //Su funcion es crear el corazon de los favoritos 
function creadorLike(){
    let imgSvg = document.createElement('img');
    imgSvg.src = './svg/corazon.svg';
    imgSvg.alt = 'Me gusta';
    imgSvg.className = 'like';
    imgSvg.addEventListener('click', (e)=>{meGusta(e)});

    return imgSvg;
}

// // // //Su funcion es crear el nombre de cada bar en negrita
function creadorNombreBar(name){
    
    let nombreBar = document.createElement('p');
    let strong = document.createElement('strong');
    strong.innerText = name;
    nombreBar.append(strong);
    return nombreBar;
}

// // // //Esta funcion realiza la creacion de las imagenes de cada tapa
function creadorImagenTapa(imagen){
    
    let a = document.createElement('a');
    let img = document.createElement('img');
    // img.src = imagen.imagenTapa;
    img.alt = 'foto de tapas de ' ;
    a.append(img);
    return a;
    
}

// // // //Esta funcion crea la descripcion  de cada tapa
function creadorDescripcion(nombre, descripcion){
    let div = document.createElement('div');
    let strong = document.createElement('strong');
    let br = document.createElement('br');

    div.className = 'descripcionTapas';
    strong.innerText = nombre;

    div.append(strong);
    div.append(br);
    div.append(`${descripcion}`);
    return div;
}

// //La funcionalidad de esta funcion es el control de los corazones.
// //si el corzon esta en blanco quiere decir que no esta añadida a favoritos 
// //si el corazon esta relleno quiere decir que esta añadido a favoritos 
function meGusta(e){
    console.log(e);
    for(let user of dataUsuarios){
        if(user.name == localStorage.getItem('nombre')){
            if(e.target.attributes[0].value == './svg/corazon.svg'){
                e.target.src= './svg/heart-solid.svg';
                user.favoritos.push(e.target.parentNode.getAttribute('tpsId'));
            }else{
                e.target.src = './svg/corazon.svg';
                user.favoritos.pop(e.target.parentNode.getAttribute('tpsId'));
            }
        }
    }
}


// //Esta funcion crea la modal de cada tapa 
function modalContenido(elemento, data){
    
    let footerModal = document.getElementById('modalFooter');
    let infoModal ='<button type="button" class="btn btn-danger" id="eliminar">Eliminar</button><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close">Cerrar</button><button type="button" class="btn btn-primary" id="modificarModal">Modificar</button>'
    footerModal.innerHTML = ' ';
    footerModal.innerHTML = infoModal;
    controlUsuarios();
    comprobarUsuario();
    for(let k in data){

        if(elemento.getAttribute('tpsid') == data[k].id_tapa){
            
            let tituloModal = document.getElementById('tituloModal');
            tituloModal.textContent= data[k].nombre_bar;
        }
        
    }
    
    // let eliminarTapa = document.getElementById('eliminar');
    // let cerrar = document.getElementById('cerrar');
    
    // let btnModalmodificar = document.getElementById('modificarModal');

    let nombreTapaModal = document.getElementById('nombreTapaModal');
    
    for(let i of data){

        if(elemento.getAttribute('tpsid') == i.id_tapa){
            nombreTapaModal.textContent = i.nombre;
            let ingredientes = document.getElementById('ingredientes');
            ingredientes.innerHTML = '';
                let li = document.createElement('li');
                li.innerHTML = i.ingredientes;
                ingredientes.append(li);
                
            
            
            // const borrar = ()=>{
            //     if(eliminar(i.id, nombreBar)){
            //         cerrar.click();
            //         eliminarTapa.removeEventListener('click', borrar);
            //     }else{
            //         alert('No se ha eliminado la tapa');
            //     }
            // }
            
            // eliminarTapa.addEventListener('click', borrar);
            
            
            // btnModalmodificar.addEventListener('click', ()=>{
                
                // let formInsertar = document.getElementById('formInsertar');
                // let insertarBotones = document.getElementById('botones');

                // let tapas = document.getElementById('tapas');
                // let enviar = document.getElementById('enviar');
                // while(insertarBotones.firstChild){
                //     insertarBotones.firstChild.remove();
                // }

                // let modificacion= ()=>{
                //     modificar(i.id, nombreBar);
                //     btnModificar.removeEventListener('click', modificacion);
                // }
                // let btnModificar = document.createElement('input')
                // btnModificar.type = 'submit';
                // btnModificar.name = 'modificar';
                // btnModificar.value = 'Modificar';
                // btnModificar.class = 'modificar';
                // btnModificar.setAttribute('id', 'modificar');
                // insertarBotones.append(btnModificar);

                // formInsertar.style.display = 'flex';
                // tapas.style.display = 'none';
                // placeholderModificacion(i.id, nombreBar)
                // btnModificar.addEventListener('click', modificacion)
                // cerrar.click();

            // })
        }
    }
    // render(dataBares);
    
}



let option = {
    method: 'get',
    mode: 'cors',
    headers: {
        'Content-type': 'Apllication/json',
    },
    body: JSON.stringify(),
}

fetch('http://localhost/DWES/www/proyectoTapasJs/php/landingpage.php', option)

.then(res =>{
    if(res.status == 200){
        return res.json();
    }else{
        alert('No se pudo encontrar ninguna tapa');
    }
})

.then(data =>{
    // console.log(data);
    // console.log(data[0].nombre_tapa);
    creadorTarjeta(data);
    let btnAnterior = document.getElementById('btnAnterior');
    let btnSiguiente = document.getElementById('btnSiguiente');

    btnSiguiente.addEventListener('click', ()=>{
        if(data.slice((numPage + 1) * tapasPerPage, ((numPage + 1) * tapasPerPage) + tapasPerPage).length > 0){
            numPage++;
            creadorTarjeta(data);
        }
    })

    btnAnterior.addEventListener('click', ()=>{
        if(numPage > 0){
            numPage--;
            creadorTarjeta(data);
        }
    })
    
})



