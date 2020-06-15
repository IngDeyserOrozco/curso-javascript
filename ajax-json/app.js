const btn1 = document.getElementById('boton1');

btn1.addEventListener('click', ()=>{
    const xhr = new XMLHttpRequest();

    xhr.open( 'GET', 'empleado.json', true );

    xhr.onload = ()=>{
        if(xhr.status === 200){
            let empleado = JSON.parse( xhr.response );
            // console.log(empleado);
            const template = `
            <ul>
                <li>ID: ${empleado.id}</li>
                <li>Nombre: ${empleado.nombre}</li>
                <li>Empresa: ${empleado.empresa}</li>
                <li>Actividades: ${empleado.trabajo}</li>
            </ul>
            `

            document.getElementById('empleado').innerHTML = template;
        }
    }

    xhr.send();
});


const btn2 = document.getElementById('boton2');

btn2.addEventListener('click', ()=>{
    const xhr = new XMLHttpRequest();

    xhr.open( 'GET', 'empleados.json', true );

    xhr.onload = ()=>{
        if(xhr.status === 200){
            let empleados = JSON.parse(xhr.response),
                template = '';

            empleados.forEach((empleado)=>{
                template += `
                <ul>
                    <li>ID: ${empleado.id}</li>
                    <li>Nombre: ${empleado.nombre}</li>
                    <li>Empresa: ${empleado.empresa}</li>
                    <li>Actividades: ${empleado.trabajo}</li>
                </ul>
                `
            });

            document.getElementById('empleados').innerHTML = template;
            
        }
    }


    xhr.send();
})