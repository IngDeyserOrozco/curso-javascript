class EventBrite {
    constructor() {
        this.token_auth = 'VSO4TRISXRV4PLNXA66Y';
        this.ordenar = 'date';
    }

    // Método para obtener los eventos
    async obtenerEventos(evento, categoria) {
        const respuestaEvento = fetch(``)
    }



    
    // Método para obtener las categorias en init()
    async obtenerCategorias() {
        // Consultar las categorias a la API de EventBrike
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Resperar la respuesta de las categorias y convertirla en JSON
        const categorias = await respuestaCategorias.json();

        // Devolvemos el resultado
        return {
            categorias
        }
    }
}