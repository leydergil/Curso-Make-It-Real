//Arrays
/*
Es una lista ordenada de elementos de cualquier tipo.
> Lista o coleccion de valores:
    Los arreglos pueden contener mucho valores diferentes 
    y de diferentes tipos de datos.

> Cada valor tiene un indice:
    un índice es un valor númerico unico que representa los
    datos dentro de una matriz. Corresponde a la posición
    del elemento en esa lista o arreglo.

> Longitud frl arreglo:
    Después de crear un arreglo, puede verificar su longitud 
    en cualquier momento con la propiedad (length) 
    arrayName.length 
*/

//Creando un array vacio
const emptyArray = [];
//Creando un array con datos de diferentes tipos de datos
//Pero se recomeinda trabajar con arrays del mismo tipos en ssus elementos
const array = [5,4,3,2,1,'hola', true, false, [4,3], null, undefined];

//Verificando la longitud de los array
console.log(emptyArray.length); // tiene cero elementos
console.log(array.length);//Tiene 11 elementos

//Como agregar datos a un Array
/*
> Durante la creacion del arreglo:
    Puede crear un arreglo con datos en su declaración
    const array = [1,2,3,4,5];

> Despues de la creación del arreglo:
    Puede agregar datos a un arreglo después que se haya creado.
    Este método requiere asignar el valor a un índice.
    Los índices que ya tienen algún un valor se sobrescriben.
    Hacer un seguimiento de la longitud es importante
    si tiene una longitud fija.

> Cómo puedo acceder a los datos?
    Se puede acceder a los valores de un arreglo por su índice

*/
