let palabra = "ARBOL"
let intentos = 6;

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar)

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO == palabra){
        terminar
        ("<h1>ganaste! :)</h1>")
        return
    }
    for (let i in palabra) {
        if (palabra[i] == INTENTO[i]) {
            console.log(INTENTO[i], 'verde') 
            console.log("verde")
        } else if(palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
    intentos--
    if (intentos==0){
        alert("perdiste")
    }
}         



function leerIntento(){
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase()
    return intento
}
function terminar (mensaje) {
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML= mensaje;
}