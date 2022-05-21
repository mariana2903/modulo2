let numero1 = document.getElementById("n1");
let numero2 = document.getElementById("n2");
let operador = document.getElementById("op");

function calculo() {
    let li=document.createElement("li")
  let resultado = eval(numero1.value + operador.value + numero2.value);
  li.innerHTML=`${numero1.value} ${operador.value} ${numero2.value} = ${resultado}`
  document.getElementById("resultado").appendChild(li)
}



