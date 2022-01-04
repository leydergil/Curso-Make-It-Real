/* Ejercicio 12
Escribe un programa que le pida al usuario ingresar una frase. 
El programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces. */

var frase = "Hola" //prompt("Ingrese una frase! : ");
var num = 10; //parseInt(prompt("Ingrese un Número : ")) ;

for (let index = 0; index < num; index++) {
    console.log(frase);
}