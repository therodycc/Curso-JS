# Algunos conceptos de javascript

**java script** es un lenguaje interpretado. Aqui para declarar variables no se tiene que poner el tipo de datos ya que este reconoce de que tipo es por si solo.
Siempre se debe de usar el punto y coma al final

Esta linea nos obliga a usar correctamente 
estructura de javascript
``` javascript
"use strict";
````

Y existen dos tipos de lenguajes que son 
* **compilado:** si hay error se para 
* **interpretado:** sigue aunque haya error
# Creacion de archivos JS

Para crear archivos javascripts hay que ponerle siempre nombre.js 
para que se sepa que es de tipo javascript

Para enlazar nuestro documento javascript a el html 
debemos de ponerlo dentro de una etiqueta
```javascript
 <script src="main.js"></script>
```
Y este debe de ir al final del documento


# Operadores de comparacion

> 
* *< menor*
* *> mayor*
* *<= menor o igual*
* *>= mayor o igual*
* *== se deben de parecer*
* *=== Los valores deben de ser del mismo tipo*
* *!== Los valores deben de ser de direferentes tipos*



* *&& esto es igual a Y* 
* *|| esto es igual a O* 

# Respuestas de datos
* **undefined** = quiere decir que la variable no tiene valor
* **Nan**       = quiere decir que no se puede efectuar una operacion
             porque hay una variable que no tiene valor
* **null**     = que no contiene nada

# Operadores ternarios 

Es como un if pero rapido es decir resumido

``` javascript

let n1 = 3;
let n2 = 4;

let n3 = n1 > n2 ? "El numero mayor es " +n1 : "El numero mayor es " +n2;
console.log(n3);

```

# Metodos


Una funcion es un metodo es decir un trozo de codigo
que tiene una funcion y que lo podemos reutilizar cuando queramos*/

# Operaciones rapidas

* num1 **+=** num2 ;
* num1 **-=** num2 ;
* num1 ***=** num2 ;
* num1 **/=** num2 ;
* num1 **++** ;
* num1 **--** ;