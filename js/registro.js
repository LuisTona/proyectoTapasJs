const form = document.querySelector('form')
const nombre = document.getElementById('nombre');
const correo = document.getElementById('mail');
const contraseña = document.getElementById('pass');
const errorMensaje = document.querySelectorAll('.error-message');
const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passExp = /[a-zA-Z0-9._%&@€]{8,}/;
const nombreExp=/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

let campo = [
    {campo: nombre, expresion: nombreExp, valor: 0},
    {campo: correo, expresion: regExp, valor: 2},
    {campo: contraseña, expresion: passExp, valor: 4},
];

// Validaciones del nombre
nombre.addEventListener('blur', ()=>{
    validacionExpresiones(nombre, nombreExp, 0);
});

// Validaciones del correo
correo.addEventListener('blur', ()=>{
    validacionExpresiones(correo, regExp, 2);
});

contraseña.addEventListener('blur', ()=>{
    validacionExpresiones(contraseña, passExp, 4);
});



document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

 
    let valido = true;
    if(comprobacionUsuarios(nombre.value)){
        campo.forEach(({campo, expresion, valor}) => {
           if(valido){
                valido = validacionExpresiones(campo, expresion, valor);
           }

            if(campo.value.trim() === ''){
                campo.classList.add('incorrecto');
                errorMensaje[valor].style.display = 'block';
            
            }
        });
      
                
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
    
            if(valido && nombre.value.trim() !== '' && correo.value.trim() !== '' && contraseña.value.trim() !== ''){
                let options = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                }
            
                fetch("http://localhost/DWES/www/proyectoTapasJs/php/registro.php", options)
                .then(res=>{
                    if(res.status === 201){
                        return res.json();
                    }else{
                        manejadorErrores(valido);
                    }
                })
                
                .then(data=>{
                    if(data){
                        window.location.href = 'login.html'
                    }
                })

            }   
    } 
    
});

// Funcion para hacer una validacion a todos los elementos y expresiones regulares
function validacionExpresiones(elemento, expresion, numError){
    if(elemento.value.trim() ===''){
        elemento.classList.add('incorrecto');
        errorMensaje[numError].style.display = 'block';
        errorMensaje[numError + 1].style.display = 'none';
        return false;

    }else if((!expresion.test(elemento.value) ) ){
        elemento.classList.add('incorrecto');
        errorMensaje[numError].style.display = 'none';
        errorMensaje[numError + 1].style.display = 'block';
        return false;

    }else if(expresion.test(elemento.value)){
        elemento.classList.remove('incorrecto');
        errorMensaje[numError + 1].style.display = 'none';
        errorMensaje[numError].style.display = 'none';
        return true;

    }
}

function comprobacionUsuarios(user){
    let usuarios = localStorage.getItem('usuario');
    usuarios = JSON.parse(usuarios);

    if(usuarios == null){
        return true;
    }else if(usuarios.nombre == user){
        return false;
    }else{
        return true;
    }
}

function manejadorErrores(valido){
    if(contraseña.value === ''){
        alert("Las contraseñas no coinciden");
    }else if(!valido){
        alert('hay algun campo incorrecto');
    }else if(!comprobacionUsuarios(nombre.value)){
        alert('este usuario esta registrado');
    }else{
        alert("Falta algun campo por rellenar");
    }
}