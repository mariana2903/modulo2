//exercício 1

function adicionar() {
  let quantidade = parseFloat(document.getElementById("produto").value);
  let adicionar = quantidade + 1;
  document.getElementById("produto").value = adicionar;
}

function excluir() {
  let quantidade = parseFloat(document.getElementById("produto").value);
  let excluir = quantidade - 1;
  document.getElementById("produto").value = excluir;
}

//exercício 2

function troca() {
  var numero1 = parseFloat(document.getElementById("numero1").value);
  var numero2 = parseFloat(document.getElementById("numero2").value);

  var numero = numero1;

  numero1 = numero2;
  numero2 = numero;

  alert(
    "Antes:\n" +
      "numero1=" +
      document.getElementById("numero1").value +
      "\n" +
      "numero2=" +
      document.getElementById("numero2").value +
      "\n\n" +
      "trocado:\n" +
      "numero1=" +
      numero1 +
      "\n" +
      "numero2=" +
      numero2 +
      "\n\n"
  );
}

//exercício 3

function telefone() {
  var celular = document.querySelector("#telefone").value;
  let valido = false;
  let verificado = [];

  let numerovalido = [
    "(",
    ")",
    "-",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  for (let caracter of celular) {
    if (numerovalido.includes(caracter)) {
      verificado.push(caracter);
    }
  }

  if (verificado.length === 14) {
    valido = true;
  }

  if (
    valido == true &&
    celular[0] == "(" &&
    celular[3] == ")" &&
    celular[9] == "-"
  ) {
    alert("Número válido");
  } else {
    alert("Número inválido");
  }
}

//exercício 4

function valortotal() {
  let passageiros = parseInt(document.getElementById("pessoas").value);
  let turno1 = document.getElementById("diurno");
  let turno2 = document.getElementById("noturno");
  let valor = 0;
  
  if (turno1.checked == true && turno2.checked == false) {
    if (passageiros > 50) {
      valor = passageiros * 200;
      document.querySelector("#total").innerHTML = ` R$${valor}`;
    } else {
      valor = passageiros * 120;
      document.querySelector("#total").innerHTML = ` R$${valor}`;
    }
  } else if (turno2.checked == true && turno1.checked == false) {
    if (passageiros > 50) {
      valor = passageiros * 100;
      document.querySelector("#total").innerHTML = ` R$${valor}`;
    } else {
      valor = passageiros * 80;
      document.querySelector("#total").innerHTML = ` R$${valor}`;
    }
  } else {
    alert("Selecione apenas 1 ou selecione algum turno");
  }
}

//exercício 5
