/**
 * Composición
 */

const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${this.nombre}`);
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

const cliente = Cliente('Deyser');
cliente.mostrarNombre();

const empleado = Empleado('Maria');
empleado.mostrarNombre();