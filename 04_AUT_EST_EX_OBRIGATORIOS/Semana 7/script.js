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
