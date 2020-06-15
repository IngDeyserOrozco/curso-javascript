// // Async Await

// async function obtenerClientes(){
//     // Crear un promise
//     const clientes = new Promise((resolve, reject)=>{
//         setTimeout( ()=>{
//             resolve('Clientes Descargados...');
//         }, 5000 )
//     });

//     // Error o no
//     const error = true;

//     if( !error ){
//         const response = await clientes;
//         return response;
//     } else {
//         await Promise.reject('Hubo un error');
//     }
// }

// obtenerClientes()
//     .then( response => console.log(response) )
//     .catch( error => console.log(error) );

// Async Await API Real

async function leerTodos(){
    // Esperar la respuesta
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    // Procede cuando la respuesta esta echa
    const datos = await response.json();

    return datos;
}

leerTodos()
    .then( datos => console.log(datos));