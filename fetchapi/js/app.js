document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarAPI);


function cargarTXT(){
    fetch('datos.txt')
        .then( response => response.text() )
        .then((data) => document.getElementById('resultado').innerHTML = data)
        .catch( error => console.log(error))
}

function cargarJSON(){
    fetch('empleados.json')
        .then( response => response.json() )
        .then( empleados =>{
            empleados.forEach( (empleado) =>{

                let template = '';

                empleados.forEach((empleado, index)=>{
                    template += `
                        <ul>
                            Empleado #${index+1}
                            <li>Nombre: ${empleado.nombre}</li>
                            <li>Funcion: ${empleado.puesto}</li>
                        </ul>
                    `
                })

                document.getElementById('resultado').innerHTML = template;
            })
        })
        .catch( error=> console.log(error) );
}


function cargarAPI(){
    fetch('https://picsum.photos/list')
        .then( response => response.json() )
        .then( (images) =>{
            let template = '';
            
            images.forEach((image)=>{
                template += `
                    <li>
                        <a target="_blank" href="${image.post_url}">Ver imagen</a> 
                        Autor: ${image.author}
                    </li>
                `
            });

            document.getElementById('resultado').innerHTML = template;
        })
        .catch( error=> console.log(error) );

}