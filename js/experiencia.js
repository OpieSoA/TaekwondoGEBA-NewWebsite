document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Inicio como practicante: 3 de abril de 2010
  const startPractica = new Date("2010-04-03");
  let yearsPractica = currentYear - startPractica.getFullYear();

  // Si aún no llegó el 3 de abril este año, restamos 1
  const thisYearAnniversary = new Date(currentYear, 3, 3); // Abril = 3 (base 0)
  if (currentDate < thisYearAnniversary) {
    yearsPractica--;
  }

  // Experiencia adicional desde 2005
  const yearsAdicional = currentYear - 2005;
  document.getElementById("years-adicional").textContent = yearsAdicional;

  // Inicio como profesor: 2017
  const yearsProfesor = currentYear - 2017;

  document.getElementById("years-practicante").textContent = yearsPractica;
  document.getElementById("years-profesor").textContent = yearsProfesor;
});
