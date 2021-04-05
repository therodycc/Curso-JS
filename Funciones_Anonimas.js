function sumar(n1,n2,multiplicar){
    var suma = n1 + n2;
    multiplicar(suma);
    return suma;
}

sumar(5,7,function(d){
    console.log('La suma es ' + d);
    console.log('La multiplicacion del resultado * 2 es: ' + d * 2 );
});

