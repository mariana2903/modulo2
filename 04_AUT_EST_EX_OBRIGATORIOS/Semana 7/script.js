//exercício 1

function adicionar(){
  let quantidade = parseFloat(document.getElementById("produto").value)
  let adicionar = quantidade+1
  document.getElementById("produto").value=adicionar

}

function excluir(){
  let quantidade = parseFloat(document.getElementById("produto").value)
  let excluir = quantidade-1
  document.getElementById("produto").value=excluir
}

//exercício 2

function troca() {
  var numero1 = parseFloat(document.getElementById("numero1").value);
  var numero2 = parseFloat(document.getElementById("numero2").value);

  var numero = numero1;

  numero1 = numero2;
  numero2 = numero;

  alert("Antes:\n"+
        "numero1="+document.getElementById("numero1").value+"\n"+
        "numero2="+document.getElementById("numero2").value+"\n\n"+
        "trocado:\n"+
        "numero1="+numero1+"\n"+
        "numero2="+numero2+"\n\n");
}

//exercício 3

var telefone = '(31)9923-99288';
var [0,1,2,3,4,5,6,7,8,9]
var regex = new RegExp \(\d{2}\)\s\d{4,5}\-\d{4}
if (regex.test(telefone)) { 
    console.log("Válido");
}
else console.log("Inválido");

//exercício 4


//exercício 5

