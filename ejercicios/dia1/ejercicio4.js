/*
Escribe un programa que le pida al usuario su año 
de nacimiento e imprima su edad actual en la consola 
con la frase "Tienes X años". Por ejemplo, asumiendo 
que el año actual es 2020 y el usuario ingresa 2000, 
el programa debe imprimir en la consola:
*/

var currentYear = new Date();
var year = currentYear.getFullYear()
const yearOfBirth = parseInt(prompt("Ingrese el año de nacimiento AAAA "));
console.log(`Año Atual ${year} - tu fecha de nacimiento ${yearOfBirth} = ${year - yearOfBirth} años`);