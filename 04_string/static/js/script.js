// Uso de strings ejemplo

let nombre = "Mauricio"; // Variable tipo texto

function usarString() {
  let nombre = prompt("Ingrese su nombre")
  let primeraLetra = nombre[0];
  let ultimaLetra = nombre[nombre.length - 1];
  alert("primeraLetra es: " + primeraLetra +
    "\nÚltima letra es: " + ultimaLetra);
}

// tarea: imprimir Segunda letra 
// y penultima del apellido

function usarStrings() {
  let apellido = prompt("Ingrese su apellido")
  let segundaLetra = apellido[1];
  let penultimaLetra = apellido[apellido.length - 2];
  alert("segunda letra es: " + segundaLetra +
    "\nPenltima letra es: " + penultimaLetra);
}