//Exercício 1

function digitocent() {
  let valor = document.getElementById("digito").value.split("").map(Number);
  if (valor[0] % 2 == 0) {
    alert("número par");
  } else {
    alert("número ímpar");
  }
}

//Exercício 2

function numeroint() {
  let lista = document.getElementById("inteiro").value.split("").map(Number);

  var total = 0;
  for (i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  document.getElementById("resultado2").innerHTML = total;
}

//Exercício 3

function nomes() {
  const nome1 = document.getElementById("nome1").value;
  const nome2 = document.getElementById("nome2").value;
  const nome3 = document.getElementById("nome3").value;

  let lista = [nome1, nome2, nome3];

  let bubbleSort = (lista) => {
    let len = lista.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (lista[j] > lista[j + 1]) {
          let tmp = lista[j];
          lista[j] = lista[j + 1];
          lista[j + 1] = tmp;
        }
      }
    }
    return lista;
  };

  bubbleSort(lista);

  document.getElementById("resultado3").innerHTML = lista;
}

//Exercício 4

let numero4 = document.getElementById("numfib");

function clicar() {
  let fibonacci = [1, 2];
  for (let i = 2; i < numero4.value; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  document.getElementById("resultado4").innerHTML += fibonacci;
}

//Exercício 5

let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");
let resul = document.getElementById("resultado");

const pressionar = () => {
  let encerra = [];
  for (let numero = n1.value; numero <= n2.value; numero++) {
    let isPrime = true;
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      encerra.push(parseInt(numero));
    }
  }

  encerra.map((i) => (document.getElementById("resultado5").innerHTML += `${i}, `));
};
