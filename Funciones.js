
function calculadora(nu1,nu2){
    console.log("suma " + (nu1 + nu2));
    console.log("resta " + (nu1 - nu2));
    console.log("Multiplicacion " + (nu1 * nu2));
    console.log("Divicion " + (nu1 / nu2));
}

function retorno(numero){
    return numero;
}
console.log(retorno(9));

function funcionvar(){
    var edad = 21 ;
    if(true){
        var edad = 22;
        console.log(edad);
    }
    console.log(edad);
}
funcionvar();


function funcionlet(){
    var edad = 21 ;
    if(true){
        var edad = 22;
        console.log(edad);
    }
    console.log(edad);
}
funcionlet();