const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// === PROFESOR 1 ===
// Clases desde 2005 (de 5 en 5)
const yearsProfesor1ClaseRaw = currentYear - 2005;
const yearsProfesor1Clase = Math.floor(yearsProfesor1ClaseRaw / 5) * 5;
document.getElementById(
  "profesor1-clase"
).textContent = `${yearsProfesor1Clase}`;

// Práctica desde febrero de 1986 (de 5 en 5)
let yearsProfesor1Practica = currentYear - 1986;
if (currentDate.getMonth() < 1) {
  // enero = 0, febrero = 1
  yearsProfesor1Practica--;
}
yearsProfesor1Practica = Math.floor(yearsProfesor1Practica / 5) * 5;
document.getElementById(
  "profesor1-practica"
).textContent = `más de ${yearsProfesor1Practica}`;

// === PROFESOR 2 ===
// Clases desde 2017 (normal)
const yearsProfesor2Clase = currentYear - 2017;
document.getElementById(
  "profesor2-clase"
).textContent = `${yearsProfesor2Clase}`;

// Práctica desde 3 abril 2010 (normal)
let yearsProfesor2Practica = currentYear - 2010;
const month = currentDate.getMonth(); // 0 = enero
const day = currentDate.getDate();
if (month < 3 || (month === 3 && day < 3)) {
  yearsProfesor2Practica--;
}
document.getElementById(
  "profesor2-practica"
).textContent = `${yearsProfesor2Practica}`;
