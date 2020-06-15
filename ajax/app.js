
// cargarDatos();

document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos(){
    // Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Abrir conexion
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga la pagina
    // xhr.onload = function(){

    //     // 200: Correcto  |   403 : Prohibido   |   404: No encontrado
    //     if(this.status === 200){
    //         // console.log(this.responseText);
    //         document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);

        if(this.readyState === 4 && this.status == 200){
            console.log(this.responseText);
        }
    }

    // Ready status
    /*
    0: No inicializado
    1: Conexión establecida
    2: Recibido
    3: Procesado
    4: Respuesta Lista
    */ 

    // Enviamos la peticion
    xhr.send();
}