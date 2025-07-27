const fs = require('fs');

//registrar nueva cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    const nuevaCita = {
        nombre,edad,tipo,color,enfermedad
    }
    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2)) 
    console.log('Cita registrada correctamente');
}

// leer citas
const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(citas);
    console.log('Citas registradas');
}

//exportar

module.exports = {registrar, leer};
