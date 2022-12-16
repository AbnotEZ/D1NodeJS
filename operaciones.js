const fs = require("fs");

const registrarPaciente = (nombre, edad, tipo, color, enfermedad) => {
  
  const archivoJson = fs.readFileSync("citas.json", "utf8");
  const data = JSON.parse(archivoJson);

  const cita = {
    nombre: nombre,
    edad : edad,
    tipo : tipo,
    color : color,
    enfermedad :enfermedad,
  };


  fs.writeFileSync("citas.json", JSON.stringify([...data, cita]));
};

const leerPaciente = () => {
  const archivo = fs.readFileSync("citas.json", "utf8");
  
  JSON.parse(archivo).forEach((archivo) => {
    console.log(archivo);
  });

  

};
module.exports = {
  registrarPaciente,
  leerPaciente,
};