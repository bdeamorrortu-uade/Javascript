let firstName;
let lastName;
let favoriteColor;

// Ejercicio 1: Variables con datos personales al azar
function getHardcodedData() {
  firstName = "Belén";
  lastName = "de Amorrortu";
  favoriteColor = "Azul";

  document.getElementById(
    "result-1"
  ).innerHTML = `Bienvenid@ ${firstName} ${lastName}! Color favorito: ${favoriteColor}`;
}

// Ejercicio 2: Ingresar datos del usuario
function askUserData() {
  firstName = prompt("Ingrese su nombre: ");
  lastName = prompt("Ingrese su apellido: ");
  favoriteColor = prompt("Ingrese su color favorito: ");

  document.getElementById(
    "result-2"
  ).innerHTML = `Bienvenid@ ${firstName} ${lastName}! Color favorito: ${favoriteColor}`;
}

// Ejercicio 3: Calcular días vividos
function calculateDaysLived() {
  const dateOfBirthValue = document.getElementById("date-of-birth").value;

  if (!dateOfBirthValue) {
    return alert("Por favor, ingrese una fecha de nacimiento");
  }

  const dateOfBirth = new Date(dateOfBirthValue);
  const currentDate = new Date();

  const difference = currentDate - dateOfBirth;
  const daysLived = Math.floor(difference / (1000 * 60 * 60 * 24));

  document.getElementById(
    "result-3"
  ).innerHTML = `${firstName} ${lastName}, has vivido aproximadamente ${daysLived} días.`;
}

function resetResults() {
  firstName = "";
  lastName = "";
  favoriteColor = "";

  document.getElementById("result-1").innerHTML = "";
  document.getElementById("result-2").innerHTML = "";
  document.getElementById("result-3").innerHTML = "";
}
