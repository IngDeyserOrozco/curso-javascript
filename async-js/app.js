// // Callback en Foreach

// const ciudades = ['Londres', 'New York', 'Los Angeles', 'Miami', 'Madrid', 'Viena', 'Italia'];

// // Inline Callback
// ciudades.forEach((ciudad)=>{
//     console.log(ciudad);
// })

// // Listado de Paises
// const paises = ['Colombia', 'Argentina', 'España', 'Mexico', 'Inglaterra', 'Francia', 'Polonia'];

// // Se agrega un nuevo pais despues de 2 segundos

// function nuevoPais(pais, callback){
//     setTimeout(()=>{
//         paises.push(pais);
//         callback();
//     }, 2000);
// };


// // Los paises se muestran despues de 1 Segundo
// function mostrarPaises(){
//     setTimeout(()=>{

//         let html = '';

//         paises.forEach((pais)=>{
//             html += `<li>${pais}</li>`;
//         });

//         document.getElementById('app').innerHTML = html;

//     }, 1000);
// };


// // Agregar un nuevo Pais
// nuevoPais('Alemania', mostrarPaises);

// // Mostrar los paises
// mostrarPaises();


// Promises

// function alerta(){
//     alert('Prueba con funcion');
// }
// const esperando = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(alerta);
//     }, 5000)
// });

// esperando.then((alerta)=>{
//     alerta();
// });

const aplicarDescuento = new Promise((resolve, reject)=>{
    const descuento = true;
    if(descuento){
        resolve('Descuento Aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then((mensaje)=>{
    console.log(mensaje);
}).catch((error)=>{
    console.log(error);
})