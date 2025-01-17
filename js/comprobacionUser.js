//con esta funcion comprobamos si un usuario no a sido logeado, de ser asi, se guarda como usuario invitado en el localstorage
//para su posterior uso.

export function comprobarUsuario(){
    
    let acceso = document.getElementById('acceso');

    if(localStorage.getItem('userInfo') === null){
        localStorage.setItem('invitado', 'invitado');
        acceso.style.display = 'block';
        let eliminar = document.getElementById('eliminar');
        let modificar = document.getElementById('modificarModal');
        let favoritos = document.getElementById('filtroFav');
        favoritos.style.display = 'none';
        eliminar.style.display = 'none';
        modificar.style.display = 'none';
        return false;
    }else{
        controlUsuarios();
        return true;
    }
}

//con esta funcion controlamos si un usuario logeado es admin o user normal 
// si el usuario logeado es admin, este proda añadir, modificar o eliminar 
//si el usuario es user, este solo podra ver la galeria de tapas y añadir tapas a favoritos
export function controlUsuarios(){

    if(JSON.parse(localStorage.getItem('userInfo')).rol === 'admin'){
        
        identificadorUsuario();

    }else if(JSON.parse(localStorage.getItem('userInfo')).rol === 'user'){
        
        identificadorUsuario();

        let insertar = document.getElementById('insertar');
        let eliminar = document.getElementById('eliminar');
        let modificar = document.getElementById('modificarModal');

        insertar.style.display = 'none';
        eliminar.style.display = 'none';
        modificar.style.display = 'none';
    }
}
//con esta funcion permitimos al usuario poder cerrar sesion
export function logOut(){
    let userIdentificado = document.getElementById('userIdentificado');
    userIdentificado.style.display = 'none';
    
    localStorage.removeItem('userInfo');
    window.location.href = './index.html';
}


//con esta funcion reutilizamos el codigo para poner el nombre de un usuario normal o un admin
//
function identificadorUsuario(){
    let acceso = document.getElementById('acceso');
    acceso.style.display = 'none';
    
    let userIdentificado = document.getElementById('userIdentificado');
    let identificador = document.getElementById('identificador');
    let logout = document.getElementById('logOut');
        
        
    identificador.textContent = JSON.parse(localStorage.getItem('userInfo')).name;
    userIdentificado.style.display = 'block';
    logout.addEventListener('click', logOut);
}