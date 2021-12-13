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

