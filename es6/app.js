// Expresiones Regulares

let valor, expReg;

expReg = /[0-9]/;
valor = 1992;


// Una fecha en exp regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/
valor = '20-10-2018';

// Hora 10:30
expReg = /\d\d:\d\d \D\D/
valor = '10:30 AM';

// Negar la expresion
expReg = /[^0-9]/;
valor = 'hola';

// La sisntaxis {1,2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/
valor = '10-10-2019';


// Letras o Números
expReg = /\w+/;
valor = 'Mensaje de Prueba';

// 

console.log(expReg.test(valor));