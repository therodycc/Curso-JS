// funciones con paso de parametros 

function suma(num1,num2){
    return num1 + num2;
}
function resta(num1,num2){
    return num1 - num2;
}

console.log(suma(4,7));
console.log(resta(4,7));


// parametro opcional 
// este debe de tener un valor en la inicializacion

function unir(n1,n2,bol = false){
    if (bol == false) {
        return n1 + n2;
    }else{
        return n1 - n2;
    }
}
var result = unir(2,3);

console.log(result);


// Funciones dentro de funciones 
// Si una funcion recibe parametros la que la llama tambien debe de recibir los mismos parametros

function mostrar(num1 = 4 ,num2 = 5, bol = true){
    if (bol == true) {
     var resultado = suma(num1,num2);
    }else{
        var resultado =  resta(num1,num2);
    }
    return resultado;
}

console.log(mostrar());