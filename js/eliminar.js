import { dataBares } from "./data.js";
import { render } from "./creadorTapas.js";

let btn = document.getElementById('eliminar');


btn.addEventListener('click', (event)=>{
    event.preventDefault();
    
    let id = localStorage.getItem('id'); 
    dataBares.forEach(bares=>{
        bares.tapas.forEach(element=>{
            let idTapas = element.id;
            if(id === idTapas){
                // dataBares.pop();
                // render();
                console.log("eliminado correctamente");
            }else{
                console.log("No se pudo eliminar");
            }
        })
    })
})

