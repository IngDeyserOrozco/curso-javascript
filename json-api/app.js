document.querySelector('#cargar').addEventListener('click', cargarApi);


function cargarApi() {
    // Crear el objeto
    const xhr = new XMLHttpRequest();

    // Abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Cargar y leer datos
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let post = JSON.parse(xhr.response),
                contenido = '';

            post.forEach((post)=>{
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p> 
                `
            }) 
            
            document.getElementById('listado').innerHTML = contenido; 
        }
    }

    // Enviar la conexion
    xhr.send()
}