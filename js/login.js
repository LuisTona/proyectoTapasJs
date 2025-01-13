import { dataUsuarios } from "./data.js";

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nameInput = document.getElementById('user').value;
    let passInput = document.getElementById('pass').value;
    for(let user of dataUsuarios){
        if(user.name == nameInput && user.pass == passInput){
            
            let dataUser = {
                name:`${user.name}`,
                pass:`${user.pass}`,
                mail:`${user.mail}`,
                rol:user.rol
            }

            localStorage.setItem('userInfo', JSON.stringify(dataUser));
            localStorage.removeItem('invitado');
            window.location.replace('./index.html');
        }   
    }
})