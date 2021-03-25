// BucleWhile
const meses = ["enero", "febrero", "marzo", "abril",
    "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"];

var contador = 0;
while (contador < meses.length) {
    console.log(meses[contador++]);
}


var nombre, edad ;
nombre = prompt("introduce tu nombre");
edad = prompt("introduce tu edad");

while(edad < 0 || edad > 105 || isNaN(edad) ){
    edad = prompt("introduce una edad valida!!!");
}