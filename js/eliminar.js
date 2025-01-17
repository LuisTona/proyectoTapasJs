import { dataBares } from "./data.js";
import { render } from "./creadorTapas.js";


//La funcionalidad de esta funcion es eliminar la tapa seleccionada 
export function eliminar (id, nombreBar){
    for(let bares of dataBares){

        if(bares.nombreBar === nombreBar){
            for(let tapaId in bares.tapas){
                
                if(bares.tapas[tapaId].id === id){
                    if(confirm("¿Seguro que quieres eliminarlo?")){
                        bares.tapas.splice(tapaId, 1);
    
                        if(comprobarEliminacion(id)){
                            render(dataBares);
                            alert("eliminado correctamente");
                            return true;
                        }else{
                            return false;
                        }
                    }
                }
            }
        }
    }
}

//En esta funcion comprobamos que se a realizado la eliminacion 
function comprobarEliminacion(id){
    
    dataBares.forEach(bares=>{
        bares.tapas.forEach(element=>{
        
            let idTapas = element.id;
            if(id === idTapas){
                alert.log('no se pudo eliminar');
                return false;
            }
        })
    })
    return true;
}
