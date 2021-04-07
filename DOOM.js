// El modelo de objeto de documento (DOM) proporciona 
// otras formas de presentar, guardar y manipular este
//  mismo documento. El DOM es una representación completamente
//   orientada al objeto de la página web y puede ser 
//   modificado con un lenguaje de script como JavaScript.
const div1 = document.getElementById("Div1");

div1.innerHTML = 'Texto cambiado desde javascript';
// esto inyecta los stilos en la etiqueta del html seleccionada
// Y este estilo funciona aunque ya tengamos estilos en una hoja aparte porque se le da prioridad a los stilos inline
div1.style.fontSize = '25px';

const p1 = document.getElementsByClassName("parrafo1");

p1[1].innerHTML = 'Texto cambiado';