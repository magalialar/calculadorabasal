function cualEsMayor (n1,n2,n3){
console.log(cualEsMayor(1,2,3))

 if(n1>n2 && n1>n3){
    return n1
 }
else if(n2>n1 && n2>n3){
    return n2
}
else{
    return n3
}
}
let calculadora = document.getElementById ("calculadora") ;

calculadora = document.getElementById

const FLUJO = document.getElementById ("flu") ;
const BOTON = document.getElementById("calcular") ;
const INPUT = document.getElementById( "peso") ;
const ERROR = document.getElementById("error")

BOTON.addEventListener ("click", ()=>{
 let peso1 = INPUT.value ;
    if (peso1 === ''){
        ERROR.style.display = "block";
    } else if (peso1 <= 30){
        FLUJO.innerHTML = holliday (peso) + "cc";
        FLUJO.style.display= "block";
        ERROR.style.display= "none";
    } else {
        FLUJO.innerHTML = superficieCorporal (peso1) + "cc";
        FLUJO.style.display = "block";
        ERROR.style.display = "none";
    }
    if (peso1 <=30) {
        holliday(peso1);
    }
});

function holliday(peso){
  if (peso<=10){
    let volumen = peso*100
    console.log("El volumen diario es", volumen);
  } else if (peso<=20){
    let volumen2 = 1000 + ((peso-10) * 50)
    console.log("El volumen diario es", volumen2 );
  } else if  (peso<=30){
    let volumen3 = 1500 + ((peso-20) * 20)
    console.log("El volumen diario es", volumen3);
  }
} 