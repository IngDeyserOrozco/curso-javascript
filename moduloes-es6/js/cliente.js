// Modulo Cliente

// Exportar Variables
export const nombreCliente = 'Deyser';
export let ahorro = 540000;


export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente}  ||  Ahorro: ${ahorro}`;
}

export function mostrarNombre(nombreCliente) {
    return `Nombre del Cliente: ${nombreCliente}`;
}


// Exportar una clase 
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    hacerRetiro(cantidad) {

        ahorro = ahorro - cantidad;
    }
}