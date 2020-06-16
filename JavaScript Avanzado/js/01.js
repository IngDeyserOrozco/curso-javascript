// This con implicit binding

const usuario = {
    nombre: 'Deyser',
    edad: 21,
    presentacion() {
        console.log(this.nombre);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion() {
            console.log(this.nombre);
        }
    }
}

usuario.mascota.presentacion();