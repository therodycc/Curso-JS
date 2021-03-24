let n1 = prompt("Introduce un numero");
let n2 = prompt("Introduce otro numero");

// La funcion isNaN() verifica que no sea numero
// pero le agregamos el signo ! al principio para expresar los contrario
// Es decir que si sea numero


if (!isNaN(n1) && !isNaN(n2)){
    let resultado = parseInt(n1) + parseInt(n2); 
    console.log(resultado);
}else {
    console.log("Debe de digitar numeros no letras");
}