let nombreDeBar = document.getElementById('nombreBar');
let nombreDeTapa = document.getElementById('nombreTapa');
let descripcion = document.getElementById('descripcion');
let titulo = document.getElementById('titulo');
let direccion = document.getElementById('direccion');
let telefono = document.getElementById('telefono');
let latitud = document.getElementById('latitud');
let longitud = document.getElementById('longitud');
let horaApertura = document.getElementById('hora_apertura');
let HoraCierre = document.getElementById('hora_cierre');

// let insertarIngredientes = document.getElementById('insertarIngredientes');
// let ingredientesNuevos = '';

// //Con esta funcion hacemos que el formulario se rellene con los datos de cada tapa
// //para que el usuario pueda modificarla
export function placeholderModificacion(data){
    titulo.textContent = 'Modificar Tapa';
    for(let bares of data){
        if(localStorage.getItem('id_tapa') === bares.id_tapa){
            nombreDeBar.value = bares.nombre_bar;
            nombreDeTapa.value = bares.nombre_tapa;
            descripcion.value = bares.descripcion;
            direccion.value = bares.direccion;
            telefono.value = bares.telefono;
            latitud.value = bares.latitud;
            longitud.value = bares.longitud;
            horaApertura.value = bares.hora_apertura;
            HoraCierre.value = bares.hora_cierre
            ingredientes(bares.ingredientes);
        }
    }
}

// //En esta funcion implementamos la logica para modificar la tapa
// export function modificar(id, barNombre){
//     for(let bares of dataBares){
        
//         if(bares.nombreBar === barNombre){
//             for(let tapaId in bares.tapas){
//                 if(bares.tapas[tapaId].id === id){
//                     ingredientesNuevos = ingredientesAñadidos();
//                     let nuevaTapa ={
//                         id: id,
//                         nombreTapa: nombreDeTapa.value.trim(),
//                         imagenTapa: imagenSeleccionada(),
//                         descripcion: descripcion.value.trim(),
//                         'ingredientes':ingredientesNuevos
//                     }
//                     bares.nombreBar = nombreDeBar.value.trim();
//                     bares.tapas.splice(tapaId, 1, nuevaTapa);
//                     render(dataBares);
//                     document.getElementById('volver').click();
//                 }
//             }
//         }
//     }

// }

// //Con esta funcion podemos modificar los ingredientes de la tapa que queremos modificar
export function ingredientes(tapa){
    let tapas = tapa.split(',');
    insertarIngredientes.innerHTML = ' ';
    for(let k = 0; k < tapas.length; k++){
        let label = document.createElement('label');
        label.for = `ingrediente${Math.floor((insertarIngredientes.children.length + 1)/2)+1}`;
        label.textContent = 'ingrediente ' + (Math.floor((insertarIngredientes.children.length + 1)/2)+1)
        let input = document.createElement('input');
        input.type = 'text';
        input.name = `ingrediente${Math.floor((insertarIngredientes.children.length + 1)/2)+1}`;
        input.setAttribute('id', 'ingrediente' + (Math.floor((insertarIngredientes.children.length + 1)/2)+1))
        input.value = tapas[k];
        insertarIngredientes.append(label);
        insertarIngredientes.append(input);
    }
}