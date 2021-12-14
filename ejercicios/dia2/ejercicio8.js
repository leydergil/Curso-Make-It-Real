/*
Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero
(sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es
múltiplo de 5 porque quedaría un residuo de 1.

Escribe un programa que le pida al usuario un número e imprima si es un
múltiplo de 5 o no.

Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario
debe imprimir "No, el número x no es múltiplo de 5".
*/

let numeroEntero = 0;
do{
  console.log("Ingrese un número o presione cero (0) para salir")
  numeroEntero = parseFloat(prompt("Ingrese un número  : "));

  if (numeroEntero === 0){
    console.log("El programa finalizo.");
  }else if(numeroEntero % 5 === 0){
    console.log(`Si, el número ${numeroEntero} es múltiplo 5.\n`);
  }else if(isNaN(numeroEntero)){
    console.log("El valor ingresado no es un número.\n")
  }else{
    console.log(`No, el número ${numeroEntero} no es múltiplo de 5.\n`);
  }
}while (isNaN(numeroEntero) || numeroEntero != 0);

let a = 2;
let b = 4;

console.log(a + b);