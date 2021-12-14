//Para ejecutar los ejercicios debo copiarlos en este archivo index.js

/*
Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
*/

const numeroAleatorio = Math.floor((Math.random() * 10)+1);
const numeroUsuario =  1;//parseInt(prompt("Adivine el número del sistema : "));

if (numeroUsuario > 0 && numeroUsuario < 11){
  if (numeroAleatorio == numeroUsuario){
    console.log("Felicitaciones, ese era! " + numeroUsuario + " es igual a tu número " + numeroAleatorio);
  }else if(isNaN(numeroUsuario)){
    console.log(`${numeroUsuario} no es un número valido`)
  }else{
    console.log("Lo siento, intenta nuevamente! " + numeroAleatorio + " es diferente a tu número " + numeroUsuario);
  }
}else{
  console.log("El número ingresado no esta entre 1 y 10")
}