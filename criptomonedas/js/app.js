const api = new API("3ef24df4973d669bcac1503d95d1e56e87410b8df2f8bb4b6ff6549e215677f0");
const ui = new Interfaz();

api.obtenerMonedasAPI();


// Leer el formulario

const formulario = document.getElementById('formulario');

// Eventlistener
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Leer la moneda seleccionada
    const moneda = document.querySelector('#moneda');
    const monedaSeleccionada = moneda.options[moneda.selectedIndex].value;

    const criptoMoneda = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMoneda.options[criptoMoneda.selectedIndex].value;

    // Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' && criptoMonedaSeleccionada === ''){
        
        // Arrojar una alerta de error
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    
    } else {

        // Consumir la API
        api.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then( data => {
                ui.mostrarResultado(data.response.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
            .catch(() =>{
                ui.mostrarMensaje('No existe Cambio para Esta CryptoMoneda, Intentalo Nuevamente', 'alert bg-danger text-center');
            });
    }
})