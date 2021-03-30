const abrir = document.getElementById("Hola");

function hola() {
    alert("Hola");
};
abrir.onclick = hola();


abrir.addEventListener("click", hola());




