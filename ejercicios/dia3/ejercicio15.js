/* Ejercicio 15
Escribe un programa para la consola que le pida al usuario un número 
y sume todos los números desde 1 hasta ese número.

Por ejemplo, si el usuario ingresa el número 5, 
el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55. */

let num = 10;
let sum = 0;
for (let index = 1; index <= num; index++) {
        sum = sum + index;
}
console.log(sum);