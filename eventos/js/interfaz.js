class Interfaz {
    constructor() {
        // Inicializa la app al instanciar
        this.init();

        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // Método para cuando inicialice la app
    init() {
        this.imprimirCategorias();
    }

    // Imprimir categorias
    imprimirCategorias() {
        const litaCategorias = eventbrike.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;

                // Selecionar el select de categorias;
                const selectCategoria = document.querySelector('#listado-categorias');

                // Recorremos el arreglo e imprimimos los <option>
                cats.forEach( cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                });
            });
    }

    // Método para imprimir mensajes, 2 paramentros: mensaje y clases
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;

        // Agregar texto
        div.appendChild(document.createTextNode(mensaje));

        // Buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        // Quitar el alert despues de 3 segundos
        setTimeout(()=>{
            this.limpiarMensaje();
        }, 3000)
    }

    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}