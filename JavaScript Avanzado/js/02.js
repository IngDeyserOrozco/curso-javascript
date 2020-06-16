// this con Explicit Binding

function persona(ele1, ele2) {
    console.log(`Hola soy ${this.nombre} y  me gusta el ${ele1} y ${ele2}`);
}

const info = {
    nombre: 'Deyser',
    trabajo: 'Frontend Developer'
}

const generosMusicales = ['Champeta', 'Salsa', 'Vallenato'];

// Explicit binding con call, cuando pasas arreglo debes colocar todaas las posiciones
persona.call(info, generosMusicales[0], generosMusicales[2]);

// Explicit binding con .apply, ( si toma un arreglo )
persona.apply(info, generosMusicales);

// Explicit binding .bind
const nuevaFn = persona.bind(info, generosMusicales[0], generosMusicales[2]);

nuevaFn();