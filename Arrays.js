// arrays

let articulos = ["Rojo","Azul","Verde","Mamey"];

let articles = new Array("hola","hello","hi");

console.log(articles[0]);
console.log(articles[1]);
console.log(articles[2]);

// Propiedades de los arrays
// length nos muestra la cantidad de elementos de nuestro Array
console.log(articles.length);


// Agrega un elemento al array o varios ya que podemos agregar mas separados por ,
// agrega el siguiente elemento al final
articles.push("Salut");
articles.push("Salut","hii","hoho");

// El método unshift() agrega uno o más elementos 
// al inicio del array, y devuelve la nueva longitud del array.
articulos.unshift("morado","Rosado");

console.log(articles[0]);


// borrar el primer elemento 
articles.shift();


// borrar el ultimo elemento
articles.pop();

// elimina un elemento
articles.splice(articles[2]);

// ver que hay que la ultima posicion del array
console.log("Ultimo elemento = " + articles[articles.length - 1]);


articles.forEach(Item =>{
    console.log(Item);
})

