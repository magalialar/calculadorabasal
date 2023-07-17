/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */

console.log("Hola")
//Crea una variable numero y asígnale un valor de tipo number.
var a = 1;

//Crea una variable texto y asígnale un valor de tipo string.
let miVariable = "Programando Paraguay"
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let variable = true
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false
//Crea una variable nulo y asígnale un valor de tipo null.
let vacío = null
//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.

//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.

console.log(a,typeof a)
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(miVariable)
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.

//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.

//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(vacío, typeof vacío)

//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, typeof indefinido)
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.




/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
let numero = Number (prompt ("Ingrese un numero") ) 
if(numero> 10) {
    console.log("Es Mayor")
} else if (numero < 10) {
    console.log("Es menor")
} else if (numero === 10) {
 console.log("Es igual a 10")
}


//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let num = 8
if(num % 2 == 0) {
    console.log("Es par")
} else{
    console.log("Es impar")
}


//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let caracter = "A"

if(caracter === "a" ||
caracter === "e" ||
caracter === "i" ||
caracter === "o" ||
caracter === "u" ) {
    console.log("El caracter es una vocal")
} else {
    console.log("Es una consonante")
}



//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una conson

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.

let  numero2 = Number (prompt ("Ingrese un numero") )
if(numero2>= 18) {
    console.log("Es Mayor de edad")
} else if (numero2 < 18) {
    console.log("Es menor de edad")
}else if (numero2 === 18){

}


//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.

let dias= [
    "domingo",
    "lunes",
    "marrtes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
]
let input = 2
console.log(dias[input-1] )


//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.


function suma (numero1, numero2){
    return numero1+numero2
}

console.log("La suma es "+suma(5,8))

//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function IsPar (numero) {
    if(numero %2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(IsPar(9))
console.log(IsPar(8))


//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
console.log("La suma del array es:" + sumarArray([1,2,3,4,5,6]))
//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.

let miArray = [
    "hola",
    "chau",
    "buenos dias"
]
let tamaño = miArray.length;
for (let i = 0; i<tamaño; i ++) {
 console.log(miArray[i],miArray[i].length)
}

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
const persona = {
    nombre: "Magali",
    edad: 20,
    ciudad: "Fram"
};
function obtenerValores(objeto){
    return Object.values(objeto);
}
console.log(obtenerValores(persona));

//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function encontarNumeroMasGrande (array) {
let max = array [0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}  
return max;
}
console.log(encontarNumeroMasGrande([1,2,3,4,5,6]));

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function ordenarNumeros(array) {
    return array.sort((a,b)=> a - b);
}
console.log(ordenarNumeros([5,2,8,1,4]));
//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function encontrarElementosComunes(array1,array2) {
    return array1.filter(value => array2.includes(value));
}
console.log(encontrarElementosComunes([1,2,3,4,5],[4,5,6,7]));
//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function convertiraAMayusculas(array){
    return array.map(string => string.toUpperCase());
}
console.log(convertiraAMayusculas(["hola","mundo"]));
//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function sumaAcumulativa(array) {
    let sum = 0;
    return array.map(num => sum += num);
}
console.log(sumaAcumulativa([1,2,3,4,5]));


//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log("termino")

//Escribe un bucle while que imprima en la consola los números del 1 al 5.
let i = 1;
while( i < 5) {
 console.log(i)
 i++
}

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.





//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
