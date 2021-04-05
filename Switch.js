'use strict';

var Numero = 0;
numero = prompt("Digite un numero del 1 al 3");
parseInt(numero);

switch (numero) {
    case 1:
        console.log("Hola numero 1");
        break;
    case 2:
        console.log("Hola numero 2");
        break;
    case 3:
        console.log("Hola numero 3");
        break;

    default:
        console.log("No has obedecido al mandato");
        break;
}