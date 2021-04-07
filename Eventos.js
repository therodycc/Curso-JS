const abrir = document.getElementById("Hola");
const cerrar = document.getElementById("cerrar");

function hola() {
    alert("Hola");
};
abrir.onclick = hola();


abrir.addEventListener("click", hola());

cerrar.addEventListener("click" ,()=>{
    console.log("cerrado");
});




