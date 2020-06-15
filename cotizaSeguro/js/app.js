// Variables globales
let cl = console.log,
    doc = document;


// Cotizador Constructor

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(seguro){
    /*
        * Americano 1.15
        * Asiatico 1.05
        * Europeo 1.35
     */
     let cantidad;
     const base = 2000000;

     switch(this.marca){
         case 'Americano':
                cantidad = base * 1.15;
             break;
        case 'Asiatico':
                cantidad = base * 1.05;
             break;
        case 'Europeo':
                cantidad = base * 1.35;
             break;
     }

    // Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    // Cada año de diferencia hay que reducir 3% el valor del seguro
     cantidad = cantidad - (cantidad * (diferencia*0.03));

     /** 
      * Si el seguro es básico se múltiplica por 30% mas
      * si el seguro es completo se multiplica por 50% mas
     */

     if(this.tipo === 'basico'){
         cantidad *= 1.3;
     } else {
         cantidad *= 1.5;
     }

     return (cantidad);
}

// Todo lo que se muestra
function Interfaz(){}


// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarMensaje = function (mensaje, tipo){
        const div = doc.createElement('div');
        cl(tipo);
        if(tipo === 'error'){
            div.classList = 'error';
        } else if(tipo === 'exito'){
            div.classList = 'exito';
        }

        div.innerHTML = `${mensaje}`;
        // div.classList = 'mensaje';
        form.insertBefore(div, doc.querySelector(".form-group"));
        if(tipo === 'error'){
            setTimeout(()=>{
                doc.querySelector('.error').remove();
            }, 3000)
        } else if(tipo === 'exito'){
        setTimeout(()=>{
            doc.querySelector('.exito').remove();
        }, 1999)
        }
}

// Imprime el resultado de la cotizacion
Interfaz.prototype.mostrarResultado = function(seguro, total){
    const resultado = doc.getElementById('resultado');

    const div = doc.createElement('div');

    div.innerHTML= `
        <p class='header'><span>..::Resumen de Cotizacion::..<span></p>

        <p>Marca: ${seguro.marca}</p>
        <p>Año: ${seguro.year}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: $${total}</p>
    `;

        const spinner = doc.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(()=>{
            spinner.style.display = 'none';
            resultado.append(div);
        }, 2000);
}   


// Event Listeners
const form = document.querySelector("#cotizar-seguro");

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // Leer la marca seleccionada del select
    const marca = doc.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    // Leer el año seleccionado del select
    const year = doc.querySelector('#anio');
    const yearSelected = year.options[year.selectedIndex].value;
    

    // Lee el valor del radio bottom
    const tipo = doc.querySelector('input[name="tipo"]:checked').value;
    
    // Crear instancia de Interfaz()
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacio
    if(marcaSeleccionada === '' || yearSelected === '' || tipo === ''){
        interfaz.mostrarMensaje('ERROR!!!, Debe Llenar todos los datos', 'error');
    } else {
        // Limpiar resultados anteriores
        const resultado = doc.querySelector("#resultado div");
        if(resultado != null){
            resultado.remove();
        }
        // Instnaciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, yearSelected, tipo);
        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando......', 'exito');
    }

})
let max = new Date().getFullYear(),
      min = max - 20;


const selectAnios = doc.querySelector('#anio');

let option = doc.createElement('option');
    option.value = '0';
    option.innerHTML = '- Seleccionar -';
    selectAnios.appendChild(option);
for(max ; min < max ;max--){
    let option = doc.createElement('option');
    option.value = max;
    option.innerHTML = max;
    selectAnios.appendChild(option);
}