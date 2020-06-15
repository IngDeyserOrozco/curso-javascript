class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, Tu Saldo actual es de: $${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al Cajero`;
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        super(nombre,saldo);
        this.telefono = telefono;
        this.tipo = tipo; 
    }
}

const empresa = new Empresa('Argos', 3100000, 7770000, 'Constructora');

console.log(empresa.imprimirSaldo());

