class API {
    async obtenerDatos() {

        // Establecemos la cantidad de la paginacion
        const total = 1000

        // Guardanmos la URL en una variable
        const url = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`;

        // Obtener los datos desde la API
        const response = await fetch(url);

        // Retornamos los datos en formato JSON
        const responseJson = await response.json();

        return {
            responseJson
        };
    }
}