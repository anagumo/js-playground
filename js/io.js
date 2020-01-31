// 1. Input, processing, output.

// Esto es un comentario
/* Este también es
un comentario */

// Imprimiendo en la consola
console.log("Hola, Mundo");

// Operaciones Aritméticas
console.log("Sumar 4 + 2: " + (4 + 2));
console.log("Restar 9 - 3: " + (9 - 3));
console.log("Multiplicar 2 * 3: " + (2 * 3));
console.log("Dividir 12 / 2: " + (12 / 2));

// Operador Reminder
console.log("El residuo de 13 % 2: " + (13 % 2));

// Funciones Matemáticas
console.log("El mínimo: " + Math.min(9, 10, 30, 2, 0));
console.log("El máximo: " + Math.max(9, 10, 30, 2, 0));
console.log("2 elevado a la 4a: " + Math.pow(2, 4));

// Challenge
var nombre = prompt("Hola, cómo te llamas?");
while (nombre == "") {
  nombre = prompt("Hola, cómo te llamas?");
}
console.log("Bienvenido, " + nombre);

// Variables
var artista = "Red Hot Chili Peppers";
console.log("Primer artista: " + artista);
artista = "Led Zeppelin";
console.log("Segundo artista: " + artista);

var lado = 20
console.log("El área de un cuadrado es: " + (lado * lado));

var isValidPassword = true
var password = prompt("Cuál es tu contraseña?")
if (password == "123") {
  console.log(isValidPassword);
} else {
  isValidPassword = false;
  console.log(isValidPassword);
}

// Constantes
const miNombre = "David";
console.log(miNombre);
//miNombre = "Andrea"; TypeError: Assignment to constant variable.

const pi = 3.14159;
console.log(typeof(pi));

// Incrementos y decrementos
var edad = 30
var fecha = new Date();
if (fecha.getMinutes() == 38) {
  edad += 1
  console.log(edad);
}

edad -= 1
edad *= 1
edad /= 2
