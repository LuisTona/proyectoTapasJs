import { dataBares } from "./data.js";
import { dataUsuarios } from "./data.js";

let gridTapas = document.getElementById('tapasGrid');

render(dataBares);

function render(data){
    data.forEach(element => {
        let name = element.nombreBar; 
        console.log(element);
        creadorTarjeta(name, element.tapas);
    });
}

function creadorTarjeta(nombreBar, tapas){
    // vamos a crear las tarjetas

    for(let i in tapas){
        let tarjetaTapa = document.createElement('div');
        tarjetaTapa.className = 'tapasTitle'
        tarjetaTapa.append(creadorLike()); 
        tarjetaTapa.append(creadorNombreBar(nombreBar)); 
        tarjetaTapa.append(creadorImagenTapa(tapas[i]));
        tarjetaTapa.append(creadorDescripcion(tapas[i]));
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

function creadorDescripcion(descripcion){
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

