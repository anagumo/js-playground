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
if (0 > -1) {
	console.log("0 es mayor que -1");
}

if (-2 > -1) {
	console.log("-2 es mayor que -1");
} else {
	console.log("-2 no es mayor que -1");
}

let animal = "Zorro";

if (animal == "Gato" || animal == "Perro") {
	console.log(`${animal} es un animal de casa`);
} else {
	console.log(`${animal} no es un animal de casa`);
}

let systemPassword = "1998";
let loginAttempts = 1;
let inputPassword = "1341";

if (passwordInput == systemPassword && loginAttempts <= 3) { // 1. Password sea válido y puedas entrar
	console.log("Bienvenido a tu banca");
} else if (inputPassword != systemPassword && loginAttempts <= 3) {
	console.log("Tu contraseña es incorrecta");
} else if (inputPassword != systemPassword && loginAttempts == 3) {
	console.log("Lo sentimos, tu cuenta ha sido bloqueada");
} else if (loginAttempts > 3) { // 2. Password sea válido pero que tu cuenta esté bloqueada
	console.log("Lo sentimos, tu cuenta está bloqueada");
}
