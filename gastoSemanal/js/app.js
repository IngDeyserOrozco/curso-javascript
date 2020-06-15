// Variables Globales
const presupuestoUsuario = prompt("..::Cual es tu presupuesto semanal");
let cantidadPresupuesto;
const form = document.querySelector('#agregar-gasto');
const btn = document.querySelector('.btn');
// const nombreGasto = document.querySelector('#gasto');
// const cantidadGasto = document.querySelector('#cantidad');


// Clases
// Clase de Presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    // Metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}

// Clase de Interfaz
class Interfaz{
    insertarPresupuesto(cantidad){
        // Varibales de los span para insertar
        const presupuestoSpan = document.querySelector("span#total");
        const restanteSpan = document.querySelector("span#restante")

        // insertar html a los span
        presupuestoSpan.innerHTML = `${cantidad.presupuesto}`;
        restanteSpan.innerHTML = `${cantidad.restante}`;

    }

    imprimirMensajes(mensaje, tipo){
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            div.classList.add('alert-danger');
        } else { 
            div.classList.add('alert-success');
        }

        div.appendChild(document.createTextNode(mensaje));
 
        // Insertar en el DOM
        document.querySelector('.primario').insertBefore(div, form);

        // quitar el alert despues de 3 segundos
        setTimeout(()=>{
            document.querySelector('.primario .alert').remove();
            form.reset();
        },2000);
    }

    // Inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad){
        const gastosListado = document.querySelector('#gastos ul');
        
        // Crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        // Insertar el gasto
        li.innerHTML = `
            <span>${nombre}<span> &nbsp &nbsp &nbsp
            <span class="badge badge-primary badge.pill">$${cantidad}</span>
        `;
        gastosListado.appendChild(li);            
    }

    // Comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `${presupuestoRestanteUsuario}`;

        this.comprobarPresupuesto();

    }

    // Cambia de color el presupuesto restante
    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        const restante = document.querySelector('.restante');
        if(presupuestoRestante <= (presupuestoTotal/3) ){
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger'); 
        } else if(presupuestoRestante <= (presupuestoTotal/2)){
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning'); 
        }
    }
}




// Event Listeners
document.addEventListener('DOMContentLoaded', ()=>{

    // btn.disabled = true;

    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    } else {
        // Instanciar un presopuesto
       cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        // instanciar la clase de Interfaz
        const interfaz = new Interfaz();
        interfaz.insertarPresupuesto(cantidadPresupuesto);

    };
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;
    
    // Instanciar la clase Interfaz
    const interfaz = new Interfaz();

    if(nombreGasto === '' || cantidadGasto === ''){
        // Toma 2 paramentros el mensaje y el tipo de mensaje
        interfaz.imprimirMensajes('Hubo un error', 'error');
    } else {
        // Insertar en el HTML  
        interfaz.imprimirMensajes('Correcto!!!', 'correcto');
        form.reset();
        interfaz.agregarGastoListado(nombreGasto, cantidadGasto);
        interfaz.presupuestoRestante(cantidadGasto);
    }

    


});

// cantidadGasto.addEventListener('blur',()=>{
//     if(cantidadGasto.value !== '' && nombreGasto.value !== ''){
//         btn.disabled = false;
//     }
// });

// nombreGasto.addEventListener('blur',()=>{
//     if(cantidadGasto.value !== '' && nombreGasto.value !== ''){
//         btn.disabled = false;
//     }
// });

