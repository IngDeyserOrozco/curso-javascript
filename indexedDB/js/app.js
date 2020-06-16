// Modulo app.js

let DB;

// Selectores de la Interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    administra = document.querySelector('#administra');


// Esperar con el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Crear la Base de Datos
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error se envia a la consola
    crearDB.onerror = () => console.log('Hubo un error');

    // Si todo está bien mostrar en consola y crear la base de datos
    crearDB.onsuccess = () => {
        console.log('Todo listo!!')

        // Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB);

        mostrarCitas();
    };

    // Este método solo corre una vez y es ideal para crear el Schema de la Base de Datos
    crearDB.onupgradeneeded = (e) => {
        // El evento es la misma base de datos
        let db = e.target.result;


        // Definir el objecstore, toma 2 parametros el nombre de la base de datos y segundo las opciones
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });


        // Crear los indices y campos de la Base de Datos, createIndex: 3 Parametros, nombre, key, opciones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
    }


    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }

        // En IndexedDB se utilizan las transacciones

        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');

        let peticion = objectStore.add(nuevaCita);

        console.log(peticion);

        peticion.onsuccess = () => {
            form.reset();
        }

        transaction.oncomplete = () => {
            console.log('Cita Agregada!!!');
            mostrarCitas();
        };
        transaction.onerror = () => console.log('Hubo un error!!!');
    }


    function mostrarCitas() {
        // Eliminar las citas Anteriores
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        // Creamos un ObjectStore

        let objectStore = DB.transaction('citas').objectStore('citas');

        // Esto retorna una peticion
        objectStore.openCursor().onsuccess = (e) => {
            // Cursor se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;

            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');


                citaHTML.innerHTML = `
                    <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}<span/> </p>
                    <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}<span/> </p>
                    <p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}<span/> </p>
                    <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}<span/> </p>
                    <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}<span/> </p>
                    <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}<span/> </p>
                `;
                // Boton de borrar
                const btnBorrar = document.createElement('button');
                btnBorrar.classList.add('borrar', 'btn', 'btn-danger')
                btnBorrar.innerHTML = `<span aria-hidden="true">X</span> Borrar`;
                btnBorrar.onclick = borrarCita;
                citaHTML.appendChild(btnBorrar);

                // append en el padre
                citas.appendChild(citaHTML);

                // Consultar los próximos registros
                cursor.continue();

            } else {
                if (!citas.firstChild) {
                    administra.textContent = 'Agrega Citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registro';
                    citas.appendChild(listado);
                } else {
                    administra.textContent = 'Administra tus citas';
                }
            }
        }
    }

    function borrarCita(e) {
        let element = e.target.parentElement;
        let idCita = parseInt(element.getAttribute('data-cita-id'));


        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');

        let peticion = objectStore.delete(idCita);

        transaction.oncomplete = () => {
            element.parentElement.removeChild(element);

            console.log(`Se eliminó la cita con el ID: ${ idCita }`);

            if (!citas.firstChild) {
                administra.textContent = 'Agrega Citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registro';
                citas.appendChild(listado);
            } else {
                administra.textContent = 'Administra tus citas';
            }
        }
    }

})