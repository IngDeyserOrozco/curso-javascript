// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}


function obtenerAutos() {
    return [{
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2016,
            precio: 30000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        }


    ];
};

// Datos para la Busqueda
let datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: '',
}

// EventListeners DOM Loaded

const autos = obtenerAutos();

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
})


// EventListeners para el Formulario
const marca = document.querySelector('#marca');

marca.addEventListener('input', e => {

    datosBusqueda.marca = e.target.value;
    // Mandar llamar la funcion Filtrar Auto
    filtrarAuto();
});

const year = document.querySelector('#year');

year.addEventListener('input', e => {

    datosBusqueda.year = parseInt(e.target.value);
    // Mandar llamar la funcion Filtrar Auto
    filtrarAuto();
})

const minino = document.querySelector('#minimo');

minino.addEventListener('input', e => {

    datosBusqueda.minimo = parseInt(e.target.value);
    // Mandar llamar la funcion Filtrar Auto
    filtrarAuto();
})

const maximo = document.querySelector('#maximo');

maximo.addEventListener('input', e => {

    datosBusqueda.maximo = parseInt(e.target.value);
    // Mandar llamar la funcion Filtrar Auto
    filtrarAuto();
})

const puertas = document.querySelector('#puertas');

puertas.addEventListener('input', e => {

    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la funcion Filtrar Auto
    filtrarAuto();
})

function mostrarAutos(autos) {

    // Leer el elemento resultado
    const contenedor = document.querySelector('#resultado')

    // Limpiar el html   de los autos
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');

        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: $ ${auto.precio} - Color: ${auto.color}</p>
        `;

        contenedor.appendChild(autoHTML);
    })

}

function filtrarAuto() {
    const response = obtenerAutos()
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas);

    if (response.length) {
        mostrarAutos(response);
    } else {
        alert('No hay resultados');
    }
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto
    }
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } else {
        return auto
    }
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto
    }
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto
    }
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return autos.puertas = datosBusqueda.puertas
    } else {
        return auto
    }
}