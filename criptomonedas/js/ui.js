
class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        api.obtenerMonedasAPI()
            .then( monedas => {

                // Seleccionamos el Select para las opciones de CryptoMonedas
                const selectCrypto = document.querySelector('#criptomoneda');

                // Recorremos el objeto monedas
                for( const [key, value] of Object.entries(monedas.monedas.Data) ){
                    // console.log(value.Symbol);
                    
                    // Creamos el Elemento option
                    const opcion = document.createElement('option');

                    // le cargamos el valor al elemento option con el Symbol de la CryptoMoneda que viene de la API
                    opcion.value = value.Symbol;    

                    // Agregamos el Texto que tendra el option correspondiente que será el Nombre de la CryptoMoneda el cual viene de la API
                    opcion.appendChild(document.createTextNode(value.CoinName));

                    // vamos agregando las opciones al Select
                    selectCrypto.appendChild(opcion);

                }
            })
    }



    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // Seleccionar Mensajes
        const divMensajes = document.querySelector('.mensajes');
        divMensajes.appendChild(div);

        // Mostrar Contenido
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }


    // Imprime el resultado de la cotizacion

    mostrarResultado(resultado, moneda, crypto){
        
        // En caso de que exista un resultado lo remueve del Dom
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        // Guardar los datos de la respuesta en una variable
        const datosMoneda = resultado[crypto][moneda];
        console.log(datosMoneda);

        // Redondeamos el precio de la Moneda
        const precio = datosMoneda.PRICE.toFixed(2);
        console.log(precio);

        // Redondeamoos digitos de la Variación
        const variacion = Math.round(datosMoneda.CHANGEPCTDAY);

        // Convertimos la fecha de Actualizacion
        const actualizacion = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-CO');

        // Construir El template

        let template = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p> El Precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL}
                        es de : $ ${precio} </p>
                    <p>Variacion del último día: % ${variacion}</p>
                    <p>Última actualización: ${actualizacion}</p>
                </div>
            </div>
        `;

        // Mostramos el Spinner
        this.mostrarOcultarSpinner('block');

        // Insertar el resultado
        setTimeout( ()=>{
            
            // Cargamos el resultado depues de 3 Segundos
            document.querySelector( '#resultado' ).innerHTML = template;

            // Ocultamos el Spinner
            this.mostrarOcultarSpinner( 'none' );

        }, 3000 )
    }


    // Mostrar un spinner de carga al enviar la cotización
    mostrarOcultarSpinner(vista) {
        
        // Se guarda el Spinner en un variable 
        const spinner = document.querySelector('.contenido-spinner');

        // Se le cambia el metodo display segun el parametro que se lea enviado en la Funcion
        spinner.style.display = vista;
    }
}