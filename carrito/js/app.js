// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
// Listeners
cargarEventListeners();

function cargarEventListeners(){
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    // Cuand se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar documento, mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
};


// Funciones
// Función que añade el curso al carrito

function comprarCurso(e){
    e.preventDefault();

    // Delegation para agregar-carrito
   if(e.target.classList.contains('agregar-carrito')){
       const curso = e.target.parentElement.parentElement;
       //Eviamos el curso seleccionado para tomasr sus datos
       leerDatosCurso(curso);
   };
}


// Lee los datos del curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }


    insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><img src=${curso.imagen} width=100></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>   
    `;

    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
};

// Eliminar el curso del carrito del DOM
function eliminarCurso(e){
    e.preventDefault();

    let curso;
    if(e.target.classList.contains('borrar-curso')){
            e.target.parentElement.parentElement.remove();
            curso = (e.target.getAttribute('data-id'))
    };
    eliminarCursoLocalStorage(curso);
};

// Elimina los curso del carrito en el DOM
function vaciarCarrito(e){
    // La forma lenta
    // listaCursos.innerHTML = '';

    // La forma rapida(recomendada)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    localStorage.clear();

    return false;
}

// Almacena cursos del carrito a Local Storage

function guardarCursoLocalStorage(curso){
    let cursos;

    cursos = obtenerCursosLocalStorage();
    
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}


// Comprueba si hay en Local Storage
function  obtenerCursosLocalStorage(){
    let cursos;
    // Revisamos los valores de Local Storage
    if(localStorage.getItem('cursos') === null){
        cursos = [];
    }else {
        cursos = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursos;
}


// Imprime los cursos de Local Storage en el carrito
function leerLocalStorage(){
    let cursos;

    cursos = obtenerCursosLocalStorage();

    cursos.forEach((curso)=>{
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src=${curso.imagen} width=100></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>   
        `;
    
        listaCursos.appendChild(row);
    });
}

// Elimina el curso por el ID en Local Storage

function eliminarCursoLocalStorage(curso){
    let cursos;
    // 
    cursos = obtenerCursosLocalStorage();

    cursos.forEach((cursoLS, index)=>{
        if(cursoLS.id === curso ){
            cursos.splice(index, 1)
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursos));
}
