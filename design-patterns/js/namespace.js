// Name Space

const arepaApp = {}

arepaApp.menu = [{
        plato: 'Pizza',
        precio: 12000
    },
    {
        plato: 'Hamburguesa',
        precio: 8000
    },
    {
        plato: 'Hog Dog',
        precio: 9000
    },
    {
        plato: 'Salchipapa',
        precio: 6000
    }
];


// Funciones
arepaApp.funciones = {
    ordenar: id => {
        console.log(`
            Tu Pedido: ${arepaApp.menu[id].plato} Se esta preparando
        `);
    },

    agregarPlato: plato => {
        arepaApp.menu.push(plato);
        console.log(arepaApp.menu);
    },

    mostrarMenu: menu => {
        let menuT = `
            Bienvenido a ArepaApp
        `;
        menu.forEach((plato, index) => {
            menuT += (`
                ${index}: ${plato.plato} $ ${plato.precio}
            `);
        })

        console.log(menuT);
    }
}


console.log(arepaApp);
arepaApp.funciones.ordenar(2);
const picada = {
    plato: 'Picada Mixta',
    precio: 15000
}

const suizo = {
    plato: 'Suizo',
    precio: 13000
}

const { menu } = arepaApp;

arepaApp.funciones.agregarPlato(picada);
arepaApp.funciones.agregarPlato(suizo);
arepaApp.funciones.mostrarMenu(menu);