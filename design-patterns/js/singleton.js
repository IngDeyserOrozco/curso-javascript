// Singleton


const alumnos = {
    // Todos los alumnos
    listaAlumnos: [],


    // Obtener un alumno
    get: (id => alumnos.listaAlumnos[id]),


    // Crear un alumno 
    crear: ((datos) => {
        alumnos.listaAlumnos.push(datos);

    }),


    // Listar todos los alumnos
    listado: () => { return alumnos.listaAlumnos; }

}


const infoAlumno = {
    nombre: 'Deyser',
    edad: 20
}

const infoAlumno2 = {
    nombre: 'Maria',
    edad: 22
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();

const alumno = alumnos.get(0);
console.log(alumno);