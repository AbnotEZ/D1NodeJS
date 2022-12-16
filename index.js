const { registrarPaciente, leerPaciente } = require("./operaciones.js");

const arguments = process.argv.slice(2);

const select = (selector) => {
    if (selector === "registrar") {
        registrarPaciente(arguments[1], arguments[2],arguments[3],arguments[4],arguments[5]);
    } 
    if (selector === "leer") {
        leerPaciente();
    } 
    };
    
    select(arguments[0]);

