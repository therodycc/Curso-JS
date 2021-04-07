// localstorage

// comprobar si el navegador tiene almacenamiento web

if (typeof(Storage)) {
    console.log("Disponible");
}else{
    console.log("No disponible");
}

// Agregar al localStorage
localStorage.setItem(1,"Rody Castro Cuello");
localStorage.setItem(2,"Juliana Cuello");

// obtener un valor del local storage por su clave
var ella =  localStorage.getItem(2);
console.log(ella);


// para almacenar varios valores en el local storage debemos de 
// crear un objecto con los datos y luego convertir ese JSON a string

var persona = {
    edad:20,
    nombre:'Rody Castro Cuello'
}

localStorage.setItem(persona,JSON.stringify(persona));

var per = JSON.parse(localStorage.stringify(persona));

console.log(per.nombre);