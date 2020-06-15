document.getElementById('generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a AJAX e imprimir resultados
function cargarNombres(e){
    e.preventDefault();

    // Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'http://uinames.com/api/?';
    // Si hay origen se agrega a la URL
    if(origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`;
    }

    // Si hay genero se agrega a la URL
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }

    // Si hay cantidad se agrega a la URL
    if(cantidad !== ''){
        url += `amount=${cantidad}&`;
    }


    // CONEXION CON AJAX
    // Iniciar XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Abrimos la conexion
    xhr.open( 'GET', url, true );

    // Datos e impresion en el Template
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let nombres = JSON.parse(xhr.response);
            console.log(nombres);
        }
    }

    // Enviamos la peticion
    xhr.send();
}
