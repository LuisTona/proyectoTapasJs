export function comprobarUsuario(){
    
    let acceso = document.getElementById('acceso');

    if(localStorage.getItem('userInfo') === null){
        localStorage.setItem('invitado', 'invitado');
        acceso.style.display = 'block';
        return false;
    }else{
        controlUsuarios();
        return true;
    }
}

export function controlUsuarios(){

    if(JSON.parse(localStorage.getItem('userInfo')).rol === 'admin'){
        let acceso = document.getElementById('acceso');
        acceso.style.display = 'none';
        
        let userIdentificado = document.getElementById('userIdentificado');
        let identificador = document.getElementById('identificador');
        let logout = document.getElementById('logOut');
           
            
        identificador.textContent = JSON.parse(localStorage.getItem('userInfo')).name;
        userIdentificado.style.display = 'block';
        logout.addEventListener('click', logOut);
            
    }else if(JSON.parse(localStorage.getItem('userInfo')).rol === 'user'){
        let acceso = document.getElementById('acceso');
        acceso.style.display = 'none';
        
        let userIdentificado = document.getElementById('userIdentificado');
        let identificador = document.getElementById('identificador');
        let logout = document.getElementById('logOut');
        let insertar = document.getElementById('insertar');
        let modificar = document.getElementById('modificar');
        let eliminar = document.getElementById('eliminar');
        
        identificador.textContent = JSON.parse(localStorage.getItem('userInfo')).name;
        userIdentificado.style.display = 'block';
        insertar.style.display = 'none';
        modificar.style.display = 'none';
        eliminar.style.display = 'none';
        logout.addEventListener('click', logOut);
    }
}

export function logOut(){
    let userIdentificado = document.getElementById('userIdentificado');
    userIdentificado.style.display = 'none';
    
    localStorage.removeItem('userInfo');
    window.location.href = './index.html';
}