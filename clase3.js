// Ciclos - Bucles - loops
// Sirve para repetir acciones es decir repetir el mismo código n veces.

//Tipos de ciclos comunes
// while
// for
// for ... of

// Bucle while

const names = ["Pia", "German", "Leyder", "Camilo", "Brillith"]; // Asignamos a names una lista.
console.log(names.length)
let index = 0; // definimos una variable que sirva de indice o contador.
while (index < names.length){ // Iniciamos el ciclo con la condición, que recorrera el arreglo mietras index sea menos que la longitud de la lista.
    const name = names[index]; // asignamos cada nombre a una vrible uno a uno en cada iteración
    console.log(name); // imprimimos
    index++; // Aumentamos el contador.
}


// Bucle for

for (let index = 0; index < names.length; index++){
    const name = names[index];
    console.log(name);
}

// Bucle for ... of  --  Permite acceder al numero de elementos en que estamos trabajando.

for (let name of names){
    console.log(name);
}

/*
Cuando usar un ciclo u otro.

while: llamar a una función que devuelve falso o nulo cuando se completa.

for: hacer un bucle un número conocido de veces.

for ... of: Iterando a través de una colección de elementos de una lista.
*/

// Ejemplo While
let cont = 1;
while (cont <= 10){
console.log(cont);
cont++;
}