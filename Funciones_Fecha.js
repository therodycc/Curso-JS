"use strict";

const tiempo = document.getElementById("tiempo");

window.addEventListener("load", () => {
    var time = setInterval(() => {
        var fecha = new Date();
        var hora = fecha.getHours().toString();
        var minutos = fecha.getMinutes().toString();
        var segundos = fecha.getSeconds().toString();
        tiempo.innerHTML = hora + ":" + minutos + ":" + segundos;
    }, 1000);
});
