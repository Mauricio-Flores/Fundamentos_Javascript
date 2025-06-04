// Declaración de variables
let anioNacimiento = 2008; // tipo numerico 
let nota = 5.5; // tipo númerico decimal  
let mascota = "Michi"; // string
let valorPi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679 ; // valor verdader o falso BOOLEAN (0 , 1)
let quePasaGente = "Que pasa gente"; // tipo cadena de texto
let usuario = { nombre: "Mauricio", edad: 16 }; // 
let valorTamañoUniverso; // sin valor asignado, tipo indefinido
let valorNulo = null; // valor nulo, tipo objeto
const mes = "Julio"; // constante, tipo cadena de texto
let colores = "Rojo"; // tipo cadena de texto // Objeto con propiedades nombre y edad
let correo = { correo: "mauricioflores@liceovvh.cl" } // Objeto con propiedad correo

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Número entero: " + anioNacimiento);
}

function mostrarNota() {
  alert("Número decimal: " + nota);
}

function mostrarMascota() {
  alert("texto: " + mascota);
}

function mostrarPi() {
  alert("Número decimal" + valorPi);
}

function mostrarQuePasaGente() {
  alert("texto: " + quePasaGente);
}

function mostrarUsuario() {
  alert("Objeto persona: " + JSON.stringify(usuario));
}

function mostrarTamañoDelUniverso() {
  alert("Tamaño del universo: " + valorTamañoUniverso);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}

function mostrarColorFavorito() {
  alert("Color favorito: " + colores);
}

function mostrarCorreo() {
  alert("Correo: " + JSON.stringify(correo));
}

function mostrarResultado() {
  alert (6 > 5);
}