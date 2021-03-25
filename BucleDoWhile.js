
var nombre, edad ;
nombre = prompt("introduce tu nombre");
edad = prompt("introduce tu edad");



do{
    edad = prompt("introduce una edad valida!!!");
}while(edad < 0 || edad > 105 || isNaN(edad) )




// numero aleatorio entre 0 y 100
var aleatorio = Math.round(Math.random() * 100);

var minum = 0 ;
var intentos = 0;
do{
 minum = prompt("Introduce un numero");

if (aleatorio > minum ) {
    alert("Mas alto");
}
if (aleatorio < minum){
    alert("Mas bajo");
}
}while(aleatorio != minum);

alert("Correcto");