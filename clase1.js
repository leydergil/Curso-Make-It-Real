//Declarando variables
let num = 100;
var num2 = 20;
const num3 = 2

// Operadores arimeticos básicos
console.log(num + num2); // Suma
console.log(num - num3); // Resta
console.log(num * num2); // Multiplicación
console.log(num / num3); // División
console.log(num % num3); // Modulo  (Sobrante, restante o residuo)
console.log(++num); // Incremento
console.log(--num2); // Decremento
console.log(++num2);


//Comprobando Tipos, Operador Typeof devuelve una cadena del tipo datos primitivo
typeof undefined; // "undefined"
typeof 0; // "Number"
typeof 10n; // "bigint"
typeof true; //"bolean"
typeof "foo"; // "string"
typeof Symbol("id"); // symbol
typeof Math; // "object" (1)
typeof null; // "object" (2)
typeof alert; // "function" (3)

// Los tipos de datos pueden cambiar

let x = "someting";
 x = 1; // Cambia el vaor de X y el tipo

 x = 1 + "Hello";  // Le concatena lo que tenga x con "Hello"

 // problemas de Igualdad
 x = 0 == ""; // true, tipo coaccionado
 x
 x = 0 === ""; // false, tipo respetado
 x

 //El Objeto Math
 let numero = 100;
 console.log(Math.PI); // Pi
 console.log(Math.sqrt(numero)) //Raíz cuadrada

 // Numeros y cadenas

 /* Conversión entre números y cadenas
    parseInt() y parseFloat() 
        Conviente cadenas númericas a números
        Agrega caracteres no númericos puede tener resultados no deseados
        parseFloat() es para números de punto flotante con punto decimal

    toString()
        Convierte números en cadenas númericas.
*/
let num4 = "150"; // Es un string de números enteros
console.log(parseInt("100")); //Lo convierte a Entero
console.log(parseInt(num4)); //Lo convierte a Antero
console.log(parseInt("ABC")); //No es un Número
console.log(parseInt("0xF"));// Numero Hexadecimal convertido a Entero

let flot1 = "1.50"; // es un string de numeros flotantes
console.log(parseFloat("1.00")); // Lo convierte a Float
console.log(parseFloat(flot1)); // Lo convierte a Float
console.log(parseFloat("ABC")); // No es un Número

// Conversión de números en cadenas
let num5 = 150;
let flot2 = 1.50;

console.log(num5.toString()); //Lo convierte en string
console.log(flot2.toString()); 
console.log((100).toString());
typeof num5;