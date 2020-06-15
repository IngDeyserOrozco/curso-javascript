class UI {
    constructor() {

        // Instaciar la API
        this.api = new API();

        // Crear los Markers con LayerGroup
        this.markers = new L.LayerGroup();

        // Iniciar el Mapa
        this.mapa = this.inicializarMapa();
    }


    inicializarMapa() {


        // Inicializar y obtener la propiedad del mapa

        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);

        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + enlaceMapa + ' ntributors',
                maxZoom: 18,
            }).addTo(map);

        return map;

    }

    mostrarEstablecimientos() {

        // Obtener los datos de la API
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = (datos.responseJson.results);

                // Ejecutar la funcion para mostrar los pines
                this.mostrarPines(resultado);

            });
    }


    mostrarPines(datos) {

        // Limpiar los markers
        this.markers.clearLayers();

        // Recorrer los establecimientos
        datos.forEach(dato => {
            // Destructuring
            const { latitude, longitude, calle, regular, premium } = dato;

            // Crear PopUp
            const opcionesPopup = L.popup()
                .setContent(`
                    <p>Calle ${calle}</p>
                    <p><b>Regular: </b> $ ${regular}</p>
                    <p><b>Premium: </b> $ ${premium}</p>
                `);

            //  Agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopup);

            this.markers.addLayer(marker);
        });

        this.markers.addTo(this.mapa);
    }


    // Buscador
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(datos => {
                // Obtener los datos
                const resultado = datos.responseJson.results;

                // Enviar el JSON y la Busqueda para el filtrado
                this.filtrarSugerencias(resultado, busqueda);
            })
    }

    // Filtrar las sugerencias en base a input
    filtrarSugerencias(resultado, busqueda) {
        // Filtrar con .filter
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
        console.log(filtro);
        // mostrar los pines
        this.mostrarPines(filtro);
    }

}