// Builder


class Formulario {
    constructor() {
        this.campos = [];
    }

    agregarCampo(tipo, texto) {
        let campos = this.campos;

        let campo;

        switch (tipo) {
            case 'text':
                campo = new InputText(texto);
                break;

            case 'email':
                campo = new InputEmail(texto);
                break;

            case 'button':
                campo = new Boton(texto);
                break;

            default:
                throw new Error('Tipo ni valido' + tipo);
        }

        campos.push(campo);
    }

    obtenerFormulario() {
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;

        for (let i = 0; i < campos; i++) {
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }

        return form;
    }
}

class Inputs {
    constructor(texto) {
        this.texto = texto;
    }
}

class InputText extends Inputs {
    constructor(texto) {
        // Cargamos el parametro texto
        super(texto);
    }

    crearElemento() {
        // Creamos el elemento Input
        const inputText = document.createElement('input');

        // Agregarmos el atributo type para especificar de que tipo es el input 
        inputText.setAttribute('type', 'text');

        /* Agregamos el atributo placehodler para agregar el texto al placeholder que viene desde el parametro texto*/
        inputText.setAttribute('placeholder', this.texto);

        // Retornamos el elemento
        return inputText;
    }
}

class InputEmail extends Inputs {
    constructor(texto) {
        // Cargamos el parametro texto
        super(texto);
    }

    crearElemento() {
        // Creamos el elemento Input
        const inputEmail = document.createElement('input');

        // Agregarmos el atributo type para especificar de que tipo es el input 
        inputEmail.setAttribute('type', 'email');

        /* Agregamos el atributo placehodler para agregar el texto al placeholder que viene desde el parametro texto*/
        inputEmail.setAttribute('placeholder', this.texto);

        // Retornamos el elemento
        return inputEmail;
    }
}

class Boton extends Inputs {
    constructor(texto) {
        // Cargamos el parametro texto
        super(texto);
    }

    crearElemento() {
        // Creamos el elemento Input
        const button = document.createElement('button');

        // Agregarmos el atributo type para especificar de que tipo es el input 
        button.setAttribute('type', 'submit');

        /* Agregamos el atributo placehodler para agregar el texto al placeholder que viene desde el parametro texto*/
        button.textContent = this.texto;

        // Retornamos el elemento
        return button;
    }
}




// Instanciar Formulario
const formulario = new Formulario();
formulario.agregarCampo('text', 'Añade tu Nombre');
formulario.agregarCampo('text', 'Añade tu Apellido');
formulario.agregarCampo('email', 'Añade tu Correo');
formulario.agregarCampo('button', 'Enviar Formulario');


// Renderizar en el HTML
document.addEventListener('DOMContentLoaded', () => {

    // Buscamos el div #app y ahí cargamos el formulario
    document.querySelector('#app').appendChild(formulario.obtenerFormulario())
});