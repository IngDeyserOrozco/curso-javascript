// Observer ( tambien se le conoce como suscriptor - publicador)

let observer = {
    obtenerOfertas: function(callback) {
        if (typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },

    cancelarOfertas: function(callback) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },

    publicarOferta: function(oferta) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === "function") {
                this.subscribers[i](oferta);
            }
        }
    },

    crear: function(objeto) {
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

// Vendedores
const udemy = {
    nuevoCurso: function() {
        const curso = 'Nuevo curso de Javascript';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function() {
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}


// Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const juan = {
    compartir: function(oferta) {
        console.log(`Excelente oferta!! ${oferta}`);
    }
}

const karen = {
    interesa: function(oferta) {
        console.log(`Me interesa la oferta de ${oferta}`);
    }
}


facebook.obtenerOfertas(juan.compartir);
facebook.obtenerOfertas(karen.interesa);

udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(karen.interesa);


facebook.nuevoAnuncio();
udemy.nuevoCurso();