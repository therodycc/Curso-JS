// parametros rest
// cuando no sabemos cuantos parametros vamos a recibir

// lo hacemos de siguiente forma 
// parametro rest = ...comidas
// todos los demas parametros despues de los dos primeros se almacenan en un array
function comidas(comida1,comida2, ...comidas){
    console.log(comida1);
    console.log(comida2);
    console.log(comidas);
}

comidas('Arroz con huevo', 'Habichuelas con dulce', 'Carne guisada', 'Chacá');

