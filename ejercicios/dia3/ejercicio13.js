/* Ejercicio 13
Escribe un programa que le pida al usuario una frase y un número. 
El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, 
el programa debe imprimir "Hola Mundo" 5 veces: */

var frase = "Hola" //prompt("Ingrese una frase! : ");
var num = 15; //parseInt(prompt("Ingrese un Número : ")) ;

for (let index = 0; index < num; index++) {
    console.log(frase);
}