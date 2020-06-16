/**
 * Classes y Prototypes 2
 */

export class Playlist {
    constructor(nombre) {
        this.nombre = nombre;
    }

    play() {
        console.log(`Reproduciendo a Playlist ${this.nombre}`);
    }

    eliminar() {
        console.log(`Eliminando la Playlist ${this.nombre}`);
    }
};