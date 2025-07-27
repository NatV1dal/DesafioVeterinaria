const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === 'registrar') {
    const [ , nombre, edad, tipo, color, enfermedad] = argumentos
    registrar(nombre, edad, tipo, color, enfermedad);
}
if (operacion === 'leer') {
    leer();
}
