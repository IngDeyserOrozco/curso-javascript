// Mediator

const Vendedor = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {

    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, e iniciamos en ${precio}`);
    },

    vendido: (comprador) => {
        console.log(`Vendido a ${comprador.nombre} (Sonido de mazo) `);
    }
}

Comprador.prototype = {
    oferta: (mensaje, comprador) => {
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: (usuario) => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Instanciar las clases
const juan = new Comprador('Juan');
const deyser = new Comprador('Deyser');
const maria = new Comprador('Maria');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(deyser);
subasta.registrar(maria);

vendedor.oferta('Mustang 1966', 3000);
juan.oferta(3500, juan);
deyser.oferta(4500, deyser);
maria.oferta(7000, maria);

vendedor.vendido(maria);