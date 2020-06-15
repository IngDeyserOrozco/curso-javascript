// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.querySelector("#enviar-mail");
const resetBtn = document.querySelector("#resetBtn");




// Listenners
eventListeners();
function eventListeners(){
    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campus del formulario
    email.addEventListener('blur', validarCampo);

    asunto.addEventListener('blur', validarCampo);

    mensaje.addEventListener('blur', validarCampo);


    // Boton envuar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton reset
    resetBtn.addEventListener('click', resetFormulario);
}

// Funciones
function inicioApp(){
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}

// Valida que el campo tenga algo escrito
function validarCampo(){

    // Se valida la longitug del texto
    validarLongitud(this);

    // Validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

// Resetear el formulario
function resetFormulario(e){
    e.preventDefault();
    formularioEnviar.reset();
}

// Cuando se envia el correo
function enviarEmail(e){
    e.preventDefault();

    // Spinner al presionar enviar
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // Gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.dispaly = 'block';

    // Ocultar Spinner y mostrar Gif de Enviado
    setTimeout(()=>{
        spinner.style.display = 'none';

        document.querySelector("#loaders").appendChild(enviado);
        setTimeout(()=>{
            enviado.remove();
            formularioEnviar.reset();
            console.log('correo enviado');
        }, 5000);
    }, 3000);
}

function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

