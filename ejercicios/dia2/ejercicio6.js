/*
Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".
*/

const num = 8 //parseInt(prompt("Ingrese un número: "));

if (num > 10){
  console.log(`${num} es mayor que 10`)
}else if(num < 10){
  console.log(`${num} es menor que 10`)
}else{
  console.log(`${num} es igual que 10`)
}