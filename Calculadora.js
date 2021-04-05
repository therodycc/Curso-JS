var cifra = "";
var acumulado = 0;
Sumar = false;
Restar = false;
Multiplicar = false;
Dividir = false;

function Display_Numeros(numero) {
  document.getElementById("Display").value = cifra + numero;
  cifra = document.getElementById("Display").value;
}



const tatsuma = document.getElementById("btnsumar");
tatsuma.onclick = function Sumar() {
  acumulado += parseInt(cifra);
  document.getElementById("Display").value = acumulado;
  cifra = "";
  Sumar = true;
};



const tatrestar = document.getElementById("btnrestar");
tatrestar.onclick = function Restar() {
//   if (Sumar) {

//     acumulado += parseInt(cifra);
//     document.getElementById("Display").value = acumulado;

//   } else if (Restar) {
    acumulado = acumulado - parseInt(cifra);
    document.getElementById("Display").value = acumulado;
//   } else if (Multiplicar) {
//     acumulado *= parseInt(cifra);
//     document.getElementById("Display").value = acumulado;
//   } else if (Dividir) {
//     acumulado /= parseInt(cifra);
//     document.getElementById("Display").value = acumulado;
//   }

  Dividir = false;
  Multiplicar = false;
  Sumar = false;
  Restar = true;
};




const tatmultiplicar = document.getElementById("btnmultiplicar");
tatmultiplicar.onclick = function Multiplicar() {
  acumulado *= parseInt(cifra);
  document.getElementById("Display").value = acumulado;
  Multiplicar = true;
};




const tatdividir = document.getElementById("btndividir");
tatdividir.onclick = function Dividir() {
  acumulado /= parseInt(cifra);
  document.getElementById("Display").value = acumulado;
  Dividir = true;
};




const tatresultado = document.getElementById("btnresultado");
tatresultado.onclick = function Resultado() {
  if (Sumar == true) {
    document.getElementById("Display").value = acumulado + parseInt(cifra);
  } else if (Restar) {
    document.getElementById("Display").value = acumulado - parseInt(cifra);
  } else if (Multiplicar) {
    document.getElementById("Display").value = acumulado * parseInt(cifra);
  } else if (Dividir) {
    document.getElementById("Display").value = acumulado / parseInt(cifra);
  }
};
