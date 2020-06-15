// Modulo Empresa

// Importando clase Cliente
import { Cliente } from './cliente.js';


// Exportar Variables

export const nombreEmpresa = 'Udemy Course';
export let ahorro = 540000000;
export const categoria = 'Aprendizaje';


// Exportar Funciones

export function mostrarInformacion(nombreEmpresa, ahorro, categoria) {
    return `Cliente: ${nombreEmpresa}   ||  Ahorro: ${ahorro}    || Categoria: ${categoria}`;
};

// Utilizar la clase del Modulo cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
}