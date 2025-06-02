// Declaración de variables
let anioNacimiento = 2008;
let nota = 5.5;
let mascota = "Michi";
let valorBooleano = true;
let quePasaGente = "Que pasa gente";
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";
let colores = "Rojo";
let usuario = { nombre: "Mauricio", edad: 16 };
let correo = { correo: "mauricioflores@liceovvh.cl" }

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Número entero: " + anioNacimiento);
}

function mostrarNota() {
  alert("Número decimal: " + nota);
}

function mostrarMascota() {
  alert("Cadena de texto: " + mascota);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarQuePasaGente() {
  alert("texto: " + quePasaGente);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
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

function mostrarUsuario() {
  alert("Usuario : " + JSON.stringify(usuario));
}

function mostrarCorreo() {
  alert("Correo: " + JSON.stringify(correo));
}