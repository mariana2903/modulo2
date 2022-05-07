const g = 10
let velocidadeinicial = document.getElementById ("v0");
let tempomax = document.getElementById("resultado1")
let alturamax = document.getElementById("resultado2")
 
function tempototal(velocidade) {
    return velocidade/g;   
}

function hmax(velocidade) {
    return velocidade**2/2*g
}

function calculo(){
    let value = parseFloat(velocidadeinicial.value)
    tempomax.innerHTML = "tempo total" + tempototal(value) +"s"
    alturamax.innerHTML = "altura máxima" + hmax(value) + "m"
}



