// import { dataBares } from "./data.js";
// import { dataUsuarios } from "./data.js";
import { comprobarUsuario, controlUsuarios } from "./landingPage.js";
// import { eliminar } from "./eliminar.js";
import { placeholderModificacion } from "./modificar.js";
// import {  añadidorIngredientes } from "./insertar.js";
// import { misFavoritos } from "./landingPage.js";

comprobarUsuario();

let numPage = 0;
let tapasPerPage = 6;

// controlUsuarios();

//La principal funcion de render es crear todas las tapas que esten almacenadas
//en databares que es la "base de datos" usada
// export function render(data){
 
//     let grid = document.getElementById('tapasGrid');
//     grid.innerHTML = ' ';
//     // data.forEach(element => {
//     //     // console.log(element);
//     // });
//     creadorTarjeta(data)
//     // misFavoritos()
// }
//La principal funcionalidad es la creacion de las targetas de cada tapa
export function creadorTarjeta(data){
    // vamos a crear las tarjetas
    
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
        tarjetaTapa.append(creadorBoton(data));
        tarjetaTapa.addEventListener('click', (e)=>{
            if(e.target.getAttribute('id') == 'informacion'){
                modalContenido(e.target.parentNode, data);
            }
        })
        gridTapas.append(tarjetaTapa);
    });
      
}

//La principal funcionalidad es la creacion de los botones de la modal
export function creadorBoton(data){
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#exampleModal');
    button.setAttribute('id', 'informacion')
    button.textContent ='Mas informacion';
    
    return button;
}

//Su funcion es crear el corazon de los favoritos 
function creadorLike(){
    let imgSvg = document.createElement('img');
    imgSvg.src = './svg/corazon.svg';
    imgSvg.alt = 'Me gusta';
    imgSvg.className = 'like';
    imgSvg.addEventListener('click', (e)=>{meGusta(e)});

    return imgSvg;
}

//Su funcion es crear el nombre de cada bar en negrita
function creadorNombreBar(name){
    
    let nombreBar = document.createElement('p');
    let strong = document.createElement('strong');
    strong.innerText = name.trim();
    nombreBar.append(strong);
    return nombreBar;
}

//Esta funcion realiza la creacion de las imagenes de cada tapa
function creadorImagenTapa(imagen){
    
    let a = document.createElement('a');
    let img = document.createElement('img');
    // img.src = imagen.imagenTapa;
    img.alt = 'foto de tapas de ' ;
    a.append(img);
    return a;
    
}

//Esta funcion crea la descripcion  de cada tapa
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

// La funcionalidad de esta funcion es el control de los corazones.
// si el corzon esta en blanco quiere decir que no esta añadida a favoritos 
// si el corazon esta relleno quiere decir que esta añadido a favoritos 
// function meGusta(e){
//     console.log(e);
//     for(let user of dataUsuarios){
//         if(user.name == localStorage.getItem('nombre')){
//             if(e.target.attributes[0].value == './svg/corazon.svg'){
//                 e.target.src= './svg/heart-solid.svg';
//                 user.favoritos.push(e.target.parentNode.getAttribute('tpsId'));
//             }else{
//                 e.target.src = './svg/corazon.svg';
//                 user.favoritos.pop(e.target.parentNode.getAttribute('tpsId'));
//             }
//         }
//     }
// }


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
    
    let eliminarTapa = document.getElementById('eliminar');
    let cerrar = document.getElementById('cerrar');
    
    let btnModalmodificar = document.getElementById('modificarModal');

    let nombreTapaModal = document.getElementById('nombreTapaModal');
    for(let i of data){
        
        let id_tapa = elemento.getAttribute('tpsid', i.id_tapa)
        localStorage.setItem('id_tapa', id_tapa);
        

        if(id_tapa == i.id_tapa){
            nombreTapaModal.textContent = i.nombre_tapa;
            let ingredientes = document.getElementById('ingredientes');
            ingredientes.innerHTML = '';
                let li = document.createElement('li');
                li.innerHTML = i.ingredientes;
                ingredientes.append(li);
                
            

            let id = localStorage.getItem('id_tapa');
            console.log(id);
            eliminarTapa.addEventListener('click', () =>{
                let option = {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
    
                fetch(`http://localhost/DWES/www/proyectoTapasJs/php/eliminar.php?id=${id}`, option)
                .then(res =>{
                    if(res.status === 200){
                        return res.json();
                    }else{
                        alert("No se pudo eliminar la tapa")
                    }
                })
                .then(data=>{
                    console.log(data);
                    alert("Se a eliminado la tapa correctamente");
                    cerrar.click();
                    localStorage.removeItem('id_tapa');
                    
                })
               
                
            })
           
     
            
            
            btnModalmodificar.addEventListener('click', ()=>{
                
                let formInsertar = document.getElementById('formInsertar');
                let insertarBotones = document.getElementById('botones');
                let formulario = document.getElementById('formulario');
                let nombreBar = document.getElementById('nombreBar');
                let nombreTapa = document.getElementById('nombreTapa');
                let imagen = document.getElementById('imagen');
                let descripcion = document.getElementById('descripcion');
                let direccion = document.getElementById('direccion');
                let telefono = document.getElementById('telefono');
                let latitud = document.getElementById('latitud');
                let longitud = document.getElementById('longitud');
                let horaApertura = document.getElementById('hora_apertura');
                let HoraCierre = document.getElementById('hora_cierre');

                let tapas = document.getElementById('tapas');
                let enviar = document.getElementById('enviar');
                while(insertarBotones.firstChild){
                    insertarBotones.firstChild.remove();
                }
              
                // let modificacion= ()=>{
                //     modificar(i.id, nombreBar);
                //     btnModificar.removeEventListener('click', modificacion);
                // }
                let btnModificar = document.createElement('input')
                btnModificar.type = 'submit';
                btnModificar.name = 'modificar';
                btnModificar.value = 'Modificar';
                btnModificar.class = 'modificar';
                btnModificar.setAttribute('id', 'modificar');
                insertarBotones.append(btnModificar);

                formInsertar.style.display = 'block';
                tapas.style.display = 'none';
                
                // btnModificar.addEventListener('click', modificacion)
                formulario.addEventListener('submit', (event)=>{
                    event.preventDefault();
                    if(event.submitter.getAttribute('id') === 'modificar'){
                        console.log("hola");
                        // const formData = new FormData(formulario);
                        // const data = Object.fromEntries(formData);
                        let tapa_modificada = {
                            'id_tapa': id,
                            'nombreBar': nombreBar.value.trim(),
                            'nombreTapa': nombreTapa.value.trim(),
                            'descripcion': descripcion.value.trim(),
                            'direccion': direccion.value.trim(),
                            'telefono': telefono.value.trim(),
                            'latitud': latitud.value.trim(),
                            'longitud': longitud.value.trim(),
                            'hora_apertura': horaApertura.value.trim(),
                            'hora_cierre': HoraCierre.value.trim(),
                        }
                        
                        console.log(tapa_modificada);

                        let option = {
                            method: 'put',
                            mode: 'cors',
                            headers:{
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(tapa_modificada),
                        }

                        fetch('http://localhost/DWES/www/proyectoTapasJs/php/modificar.php', option)
                        .then(res =>{
                            if(res.status === 200){
                                return res.json();
                            }else{
                                alert("No se pudo modificar la tapa");
                            }
                        })

                        .then(data =>{
                            console.log(data);
                           
                            
                        })
                    }else{
                        console.log("no");
                    }
                }) 

                cerrar.click();
                placeholderModificacion(data);
                
            })
        }
    }
    // render(data);
    
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
    creadorTarjeta(data)

    let btnAnterior = document.getElementById('btnAnterior');
    let btnSiguiente = document.getElementById('btnSiguiente');
    let numeroPagina = document.getElementById('numPage');
    
    btnSiguiente.addEventListener('click', ()=>{
        if(data.slice((numPage + 1) * tapasPerPage, ((numPage + 1) * tapasPerPage) + tapasPerPage).length > 0){
            numPage++;
            numeroPagina.textContent++;
            creadorTarjeta(data);
        }
    })

    btnAnterior.addEventListener('click', ()=>{
        if(numPage > 0){
            numPage--;
            numeroPagina.textContent--;
            creadorTarjeta(data);
        }
    })
    // render(data)
})



