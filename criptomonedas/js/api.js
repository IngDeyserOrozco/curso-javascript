class API {
    constructor(apiKey){
        this.apiKey = apiKey;
    }

    // Obtener todas las monedas
    async obtenerMonedasAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
        
        // Fetch a la API
        const urlObtenerMonedas = await fetch(url);

        // convertir respuesta en JSON
        const monedas = await urlObtenerMonedas.json();


        return {
            monedas
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        
        // Cargamos la url con los parametros recibidos en su lugar correspondiente
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&${this.apiKey}`;

        // consultar en rest API
        const urlConvertir = await fetch(url);

        // Convertir la respuesta a JSON
        const response = await urlConvertir.json();
        

        return {
            response
        }
    }
}