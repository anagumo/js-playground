// 3-Basic Control Flow
// 3a Comparison Operators
let yes = true;
let nop = false;
console.log(`Yes: ${yes}, Nop: ${nop}`);

// Boolean Operators
let doesOneEqualTwo = 1 == 2; // => false
console.log(doesOneEqualTwo);
console.log(typeof(doesOneEqualTwo)); // => Boolean

let doesOneNotEqualTwo = (1 != 2); // => true
let alsoTrue = !(1 == 2) // => true
console.log(doesOneNotEqualTwo);
console.log(alsoTrue);

let isOneGreaterThanTwo = (1 > 2); // => false
let isOneLessThanTwo = (1 < 2); // => true
console.log(isOneGreaterThanTwo);
console.log(isOneLessThanTwo);

// Triple Comparison
let isEqualValue = "2" == 2; // => true
let isEqualValueAndType = "2" === 2; // => false
console.log(`"2" == 2: ${isEqualValue}`);
console.log(`"2" === 2: ${isEqualValueAndType}`);

// Logic Boolean
// AND, OR
let and = (3 == 3) && (1 != 2); // => true
let or = (3 == 2) || (1 != 2); // => false

if (3 != 3 && 1 != 2) {
  console.log("Ambas condiciones se cumplen");
} else if (3 == 2 || 1 != 2) {
  console.log("Almenos una condición es verdadera");
} else {
  console.log("Ninguna condición es verdadera");
}

// String Equality
let equalNames = "Ariana" == "David";
let orderNames = "Bety" < "Beto";
console.log(equalNames);
console.log(orderNames);

// Toggling a bool
let switchState = true;
switchState = !switchState;
console.log(`Estado del switch: ${switchState}`);
console.log(`Estado del switch: ${!switchState}`);

// 3b If Statement
// We use if to validate a condition it's true
if (0 > -1) {
  console.log("Yep, 0 es mayor que -1");
}

// And else to validate if is false
let animal = "Zorro";

if (animal == "Gato" || animal == "Perro") {
  console.log(`${animal} es un animal de casa`);
} else {
  console.log(`${animal} no es un animal de casa`);
}

let systemPassword = "1998";
let loginAttempts = 1;
let passwordInput = "1341";

if (passwordInput == systemPassword && loginAttempts <= 3) { // 1. Password sea válido y puedas entrar
  console.log("Bienvenido a tu banca");
} else if (passwordInput != systemPassword && loginAttempts <= 3) {
  console.log("Tu contraseña es incorrecta");
} else if (passwordInput != systemPassword && loginAttempts == 3) {
  console.log("Lo sentimos, tu cuenta ha sido bloqueada");
} else if (loginAttempts > 3) { // 2. Password sea válido pero que tu cuenta esté bloqueada
  console.log("Lo sentimos, tu cuenta está bloqueada");
}

// Encapsulating Variables
let hoursStudied = 40
let price = 0

if (hoursStudied > 8) {
  let extraHours = hoursStudied - 8
  price = extraHours * 50
  hoursStudied -= extraHours
}

price += hoursStudied * 25
console.log(`Tienes que pagar: ${price}`)

// Ternary Operator
// <Condition> ? True : False
let a = 7
let b = 13

if (a > b) {
  console.log(`${a} es mayor que ${b}`)
} else {
  console.log(`${b} es mayor que ${a}`)
}

let max = (a > b) ? a : b
console.log(`${max} es mayor`)

// Falsy Values
function isFalsy(param) { 
  return param ? `${param} evalua a verdadero` : `${param} evalua a falso`
}

let falsy = false // => false
console.log(isFalsy(falsy))
let falsy2 // => undefined
console.log(isFalsy(falsy2))
falsy = null // => null
console.log(isFalsy(falsy))
falsy = 0 // => 0
console.log(isFalsy(falsy))
falsy += falsy2 // => NaN
console.log(isFalsy(falsy))
falsy = "" // 
console.log(isFalsy(falsy))

// Mini-Excercise
function isEmpty(text) {
  return text == ""
}

let name = "David"
console.log(isEmpty(name))

// 3c Loops
// While - condition is true
let number = 1

while(number <= 10) {
  let result = number * 2;
  console.log(`2 * ${number} = ${result}`)
  number += 1
}

// Breaking out of a loop
while(true) {
  console.log("*");
  if (number > 10) {
    break
  }
}

// Do While
let x = 0
let y = 0

do {
  x += 1;
  console.log(`Do while: ${x}`);
} while (x < 10);

while (y < 10) {
  y += 1;
  console.log(`While: ${y}`);
}
