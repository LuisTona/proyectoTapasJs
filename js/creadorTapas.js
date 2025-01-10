import { dataBares } from "./data.js";
import { dataUsuarios } from "./data.js";

let gridTapas = document.getElementById('tapasGrid');
// comprobar si esta logeado
// localStorage.setItem('invitado', 'userAnonimo');
// let userData = localStorage.getItem(userInfo);


render(dataBares);

function render(data){
    data.forEach(element => {
        let name = element.nombreBar; 
        creadorTarjeta(name, element.tapas);
    });
}

function creadorTarjeta(nombreBar, tapas){
    // vamos a crear las tarjetas

    for(let i in tapas){
        let tarjetaTapa = document.createElement('div');
        tarjetaTapa.className = 'tapasTitle'
        if(comprobarUsuario()){
            tarjetaTapa.append(creadorLike()); 
            tarjetaTapa.addEventListener('click', (e)=>{meGusta(e, (tapas[i].nombreTapa + nombreBar).split(' ').join(''))});
        }
        tarjetaTapa.append(creadorNombreBar(nombreBar)); 
        tarjetaTapa.append(creadorImagenTapa(tapas[i]));
        tarjetaTapa.append(creadorDescripcion(tapas[i], nombreBar));
        gridTapas.append(tarjetaTapa);
    }
}

function creadorLike(){
    let imgSvg = document.createElement('img');
    imgSvg.src = './svg/corazon.svg';
    imgSvg.alt = 'Me gusta';
    imgSvg.className = 'like';
    
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
    img.alt = 'foto de tapas de ' + imagen.nombreTapa.toLowerCase();
    a.append(img);
    return a;
    
}

function creadorDescripcion(descripcion, nombreBar){
    let div = document.createElement('div');
    let strong = document.createElement('strong');
    let br = document.createElement('br');

    div.className = 'descripcionTapas';
    strong.innerText = descripcion.nombreTapa;

    strong.setAttribute('id',`${(descripcion.nombreTapa + nombreBar).split(' ').join('')}`);

    div.append(strong);
    div.append(br);
    div.append(`${descripcion.descripcion}`);
    return div;
}

function meGusta(e, nombreTapa){
    
    if(e.target.attributes[0].value == './svg/corazon.svg'){
        e.target.src= './svg/heart-solid.svg';
    }else{
        e.target.src = './svg/corazon.svg';
    }
    for(let user of dataUsuarios){
        // if(user.name == userData.name){
            
        // }
    }
}

export function comprobarUsuario(){
    let acceso = document.getElementById('acceso');
    if(localStorage.getItem('userInfo') === undefined || localStorage.getItem('userInfo') === null){
        localStorage.setItem('invitado', 'invitado');
        acceso.style.display = 'block'
        return false;
    }else{
        return true;
    }
}
