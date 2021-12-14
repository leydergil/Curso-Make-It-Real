//Operadores lógicos o Booleanos

//Mayor que 
if (8>7)
    console.log("Es mayor");

//Menor que 
if (4<7)
    console.log("Es menor");

//Igual sin importar el tipo de datos y hace conversión de tipos
if ("4"==4)
    console.log("Es el mismo numero");

//Igual tanto el valor como el tipo 
if (4===4)
    console.log("Es el mismo numero y tipo");

// Otros operadores
// >= Mayor o Igual
// <= Menor o Igual
// != Diferente comprueba la no igualdad independiente del tipo de dato
// !== Diferente pero verifica valores y tipo de datos

// Declaraciones IF
let statusCode = 400;

if (statusCode === 200){
    console.log("OK!");
}else{
    console.log("Error!");
}


// IF Anidados
statusCode = 20;

if (statusCode === 200){
    console.log("OK!");
}else if (statusCode === 400){
    console.log("Error!");
}else{
    console.log("Unknown status");
}

// Tambien se pueden omitir las llaves de los IF
// Si todo esta en una unica linea

if (statusCode === 200) console.log("OK!");
else if (statusCode === 400) console.log("Error!");
else console.log("Unknown status");

// Operador Ternario
statusCode = 200;
const message = (statusCode === 200) ? "OK" : "Unknown"
    console.log(message)

//Declaraciones Switch y otra sintaxis booleana

/* 
Valores falso Implicitos    
Strings 
    Si la cadena esta vacia es Falso.
Objets
    Objetos null y undefined como Falso.
Numbers
    0 es Falso
*/

const x = 0;

if (x === 0){
    console.log("Es igual a cero")
}

//Como sabemos que cero en Number es falso podemos hacerlo de esta forma
if (!x){ // estamos diciendo si x es falso entonces haga lo que sigue
    console.log("X es 0")
}else{
    console.log("x is not 0")
}

// tener en cuenta que los String son case sensitive
// es decir que minusculas y mayusculas son diferentes.
// Convertir mayúsculas o minúsculas - Considere usar localeCompare

const myName = "leyder";
if (myName === "Leyder"){
    console.log("The values are the same");
}else{
    console.log("The values NOT are the same");
}

// Combinando comparaciones
// and (ambos lados deben ser verdaderos)
// (x & y)
// (x && y)
// or (cualquier lado puede ser verdadero)
// (x | y)
// (x || y)

/*
Atajo para los operadores && and ||
Detiene la evalaución si ya se conoce la respuesta
(x && y) y no evaluado si x es false porque la respues es false
(x || y) o no evaluado si x es true porque la respuesta es true
*/

//Ejemplo

const userName = "jhon";
const userAge = 25;

if (userAge >= 18 || userName.length > 10){
    console.log(`${userName} is an adult and his name is long`);
}

// Sentencias Switch (case)
// Siempre se va a verificar la igualdad en cada caso
const statuscode = 1400
switch (statuscode){
    case 200:
        console.log("OK!");
        break;
    case 400:
    case 500:
        console.log("Error!");
        break;
    default:
        console.log("Unknown value");
        break;
}

// Comprobar si un número random es par, impar o cero
// Usaremos If anidados

const random = Math.floor(Math.random() * 10);
console.log(random)

if (random % 2 === 0 && random > 0){
    console.log(`${random} is pair`);
}else if (random % 2 !== 0 && random > 0){
    console.log(`${random} is odd`);
}else{
    console.log(`${random} is not pair and odd`);
}

// Comprobar si un número random es par, impar o cero
// Usaremos Switch (case)
console.log(random);
switch (random){
    case 1:;
    case 3:;
    case 5:;
    case 7:;
    case 9:;
     console.log("odd");
     break;
     case 2:;
     case 4:;
     case 6:;
     case 8:;
     case 10:;
     console.log("pair");
     break;
     case 0:
         console.log("is zero")
}