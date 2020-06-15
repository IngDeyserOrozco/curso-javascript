// instaciar las clases
const eventbrike = new EventBrite();
const ui = new Interfaz();

// Listener al buscador

document.querySelector('#buscarBtn').addEventListener('click', (e)=>{
    e.preventDefault();


    // Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // Leer el value del Select
    const categoria = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categoria.options[categoria.selectedIndex].value;

    // Revisar que haya algo escrito en el buscador
    if(textoBuscador !== ''){

        // cuando si hay algo en la busqueda
        eventbrike.obtenerEventos(textoBuscador, categoriaSeleccionada);

    } else {
        // Mostrar Mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el Buscador', 'alert alert-danger mt-4');
    }
})