import { dataBares } from "./data.js";
import { dataUsuarios } from "./data.js";
import { comprobarUsuario } from "./comprobacionUser.js";

render();

export function render(){
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
        gridTapas.append(tarjetaTapa);
    }
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
        console.log(user);
    }
}


