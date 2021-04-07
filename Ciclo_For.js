// Ciclo_For

// for(let i = 1; i <= 5; i++ ){
//     console.log(i + " y  2");
// }



// var DiasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

// for(var i = 0 ; i < 7; i++){

//     console.log(DiasSemana[i]);

// }
// for(var i = 0 ; i < DiasSemana.length; i++){

//     console.log(DiasSemana[i]);

// }



// Ejercicio 

var trabajadores = new Array();

var persona = "";

var contador= 0;


while(persona != "Salir")
{    persona = "paloma";
    // persona = prompt("Trabajador a agregar");
    trabajadores[contador] = persona;
    contador++;
    persona = "Salir";
}



for(var i = 0 ; i < trabajadores.length ; i ++){
    console.log(trabajadores[i]);
}