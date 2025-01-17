import { dataBares } from "./data.js";
import { dataUsuarios } from "./data.js";
import { comprobarUsuario } from "./comprobacionUser.js";
import { eliminar } from "./eliminar.js";
import { modificar, placeholderModificacion } from "./modificar.js";


render();

export function render(){
    let grid = document.getElementById('tapasGrid');
    grid.innerHTML = ' ';
    dataBares.forEach(element => {
        let name = element.nombreBar; 
        creadorTarjeta(name, element.tapas);
    });
}

export function creadorTarjeta(nombreBar, tapas){
    // vamos a crear las tarjetas
    let gridTapas = document.getElementById('tapasGrid');
    
    for(let i in tapas){
        let tarjetaTapa = document.createElement('div');
        tarjetaTapa.className = 'tapasTitle'
        tarjetaTapa.setAttribute('tpsId', `${tapas[i].id}`)
        if(comprobarUsuario()){
            tarjetaTapa.append(creadorLike()); 
        }
        tarjetaTapa.append(creadorNombreBar(nombreBar)); 
        tarjetaTapa.append(creadorImagenTapa(tapas[i]));
        tarjetaTapa.append(creadorDescripcion(tapas[i], nombreBar));
        tarjetaTapa.append(creadorBoton());
        tarjetaTapa.addEventListener('click', (e)=>{
            if(e.target.getAttribute('id') == 'informacion'){
                modalContenido(e.target.parentNode, tapas, nombreBar);
            }
        })
        gridTapas.append(tarjetaTapa);
    }
}
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
function creadorLike(){
    let imgSvg = document.createElement('img');
    imgSvg.src = './svg/corazon.svg';
    imgSvg.alt = 'Me gusta';
    imgSvg.className = 'like';
    imgSvg.addEventListener('click', (e)=>{meGusta(e)});

    return imgSvg;
}

function creadorNombreBar(name){
    let nombreBar = document.createElement('p');
    let strong = document.createElement('strong');
    strong.innerText = name;
    nombreBar.append(strong);
    return nombreBar;
}

function creadorImagenTapa(imagen){
    let a = document.createElement('a');
    let img = document.createElement('img');
    img.src = imagen.imagenTapa;
    img.alt = 'foto de tapas de ' + imagen.nombreTapa;
    a.append(img);
    return a;
    
}

function creadorDescripcion(descripcion, nombreBar){
    let div = document.createElement('div');
    let strong = document.createElement('strong');
    let br = document.createElement('br');

    div.className = 'descripcionTapas';
    strong.innerText = descripcion.nombreTapa;

    div.append(strong);
    div.append(br);
    div.append(`${descripcion.descripcion}`);
    return div;
}

function meGusta(e){
    for(let user of dataUsuarios){
        if(user.name == JSON.parse(localStorage.getItem('userInfo')).name){
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

function modalContenido(elemento, tapa, nombreBar){
    let footerModal = document.getElementById('modalFooter');
    let infoModal ='<button type="button" class="btn btn-danger" id="eliminar">Eliminar</button><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close">Cerrar</button><button type="button" class="btn btn-primary" id="modificarModal">Modificar</button>'
    footerModal.innerHTML = ' ';
    footerModal.innerHTML = infoModal;

    let tituloModal = document.getElementById('tituloModal');
    tituloModal.textContent= nombreBar;
    
    let eliminarTapa = document.getElementById('eliminar');
    let cerrar = document.getElementById('cerrar');
    
    let btnModalmodificar = document.getElementById('modificarModal');

    let nombreTapaModal = document.getElementById('nombreTapaModal');
    
    for(let i of tapa){

        if(elemento.getAttribute('tpsid') == i.id){
            
            nombreTapaModal.textContent = i.nombreTapa;
            let ingredientes = document.getElementById('ingredientes');
            ingredientes.innerHTML = '';
            for(let t of i.ingredientes){
                let li = document.createElement('li');
                li.innerHTML = t;
                ingredientes.append(li);
                
            }
            
            const borrar = ()=>{
                if(eliminar(i.id, nombreBar)){
                    cerrar.click();
                    eliminarTapa.removeEventListener('click', borrar);
                }else{
                    alert('ha ocurrido un error al eliminar la tapa');
                }
            }
            
            eliminarTapa.addEventListener('click', borrar);
            
            let btnModificar = document.getElementById('modificar');

            btnModalmodificar.addEventListener('click', ()=>{
                
                let formInsertar = document.getElementById('formInsertar');
                let tapas = document.getElementById('tapas');
                let enviar = document.getElementById('enviar');

                let modificacion= ()=>{
                    modificar(i.id, nombreBar);
                    btnModificar.removeEventListener('click', modificacion);
                }

                btnModificar.style.display = 'block';
                enviar.style.display = 'none';
                formInsertar.style.display = 'flex';
                tapas.style.display = 'none';
                placeholderModificacion(i.id, nombreBar)
                btnModificar.addEventListener('click', modificacion)
                cerrar.click();

            })
        }
    }
    render();
    
}




