// Ejercicios condiciones IF - ELSE
console.log("conexion con js establecida")

// 1  Solicita la edad del usuario mediante prompt(). Muestra con alert() si puede votar (18 años o más) o no.

function edadVotar() {
  let edad = parseInt(prompt("ingrese su edad")); //input conversion string a numero
  // condicion if - else if - else
  if (edad >= 18) {
    alert("Su edad " + edad + " es aprobada para votar.");
  } else if (edad >= 0 && edad < 18) { // && --------> compuerta "and"
    alert("su  edad " + edad + " no esta aprobada para botar.");
  } else {
    alert("ingrese una valor valido.");
  }
}

// 2  Pide una contraseña con prompt(). Si es igual a "1234", muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado

function contraseña() {
  let clave = 1234
  let pass = parseInt(prompt("ingrese la contraseña"));
  if (pass == 1234) {
    alert("la contraseña es correcta");
  } else {
    alert("la contraseña es incorrecta")
  }
}

// 3 Pide un número por prompt(). Evalúa si el número es par o impar y muestra el resultado con alert().

function parimpar() {
  let par = parseInt(prompt("ingrese numero"));
  if (par & 2 == 0) {
    alert("es par")
  } else {
    alert("es impar")
  }
}

// 4  Solicita la temperatura actual. Si es mayor o igual a 30, muestra “Hace calor”, de lo contrario muestra “Clima agradable”.

function temperatura() {
  let temp = parseInt(prompt("ingrese temperatura"));
  if (temp >= 30) {
    alert("Hace calor")
  } else if (temp >= 15 && temp < 30) {
    alert("Agradable")
  } else if (remp >= -5 && temp <= 15) {
    alert("Hace frio")
  } else {
    alert("Ingrese valor")
  }
}

// 5  Solicita dos números al usuario. Compara ambos y muestra cuál es mayor o si son iguales.

function dosnumeros() {
  let a = parseInt(prompt("ingresa primer numero"));
  let b = parseInt(prompt("ingresar segundo numero"));
  if (a == b) {
    alert("el numero " + a + " es igual a " + b);
  } else if (a > b) {
    alert("el numero " + a + " es mayor a " + b);
  } else {
    alert(b + " es mayor a " + a);
  }
}

// 6  Pide una nota entre 1 y 7. Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”

function promedio() {
  let nota = parseInt(prompt("ingresa tu nota"));
  if (nota >= 4 && nota <= 7) {
    alert("Aprobado");
  } else if (nota >= 8) {
    alert("ingrese un valor correcto")
  } else {
    alert("reprobado");
  }
}

// 7  Pide un nombre de usuario. Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. Si no, muestra “Usuario no reconocido”.
// ayuda 
function Admin() {
  let usuario = prompt("Ingrese su usuario");
  let usu = "admin";
  if (usuario == usu) {
    alert("Bienvenido, Administrador");
  } else {
    alert("Usuario no reconocido");
  }
}

//8  Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.

function letraA() {
  let letra = prompt("Ingrese palabra")
  let letraA = "A"
  if (letra[0] == letraA) {
    alert("Mensaje Acorde")
  } else {
    alert("tu palabra no empieza con mayuscula")
  }
}

//9  Solicita el precio de un producto. Si el precio es mayor a 10000, muestra que aplica descuento. Si no, indica precio normal.

function descuentoProducto() {
  let producto = parseInt(prompt("Ingrese precio"));
  if (producto >= 10000) {
    alert("obtienes tu descuento")
  } else if (producto <= 9999) {
    alert("no obtienes descueto")
  }
}

//10  Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”.

function permisoParaConducir() {
  let respuesta = "si";
  let edad = parseInt(prompt("ingresa edad"))
  let licencia = prompt("¿Tienes licenvia? (si o no)")
  if (edad >= 18 && licencia == respuesta) {
    alert("Puede conducir")
  } else {
    alert("no puede conducir")
  }
}