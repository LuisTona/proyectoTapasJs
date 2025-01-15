import { dataBares } from "./data.js";
import { render } from "./creadorTapas.js";

export function eliminar (id, nombreBar){
    
    for(let bares of dataBares){

        if(bares.nombreBar === nombreBar){

            for(let tapaId in bares.tapas){
                
                if(bares.tapas[tapaId].id === id){

                    bares.tapas.splice(tapaId, 1);
                    if(comprobarEliminacion(id)){
                        render();
                        console.log("eliminado correctamente");
                        return true
                    };
                }
            }
        }
    }
}
function comprobarEliminacion(id){
    
    dataBares.forEach(bares=>{
        bares.tapas.forEach(element=>{
        
            let idTapas = element.id;
            if(id === idTapas){
                console.log('no se puedo eliminar');
                return false;
            }
        })
    })

    return true;
}
