//exercício 1

let numero1 = document.getElementById("n1");
let numero2 = document.getElementById("n2");
let operador = document.getElementById("op");

function calculo() {
  let li = document.createElement("li");
  let resultado = eval(numero1.value + operador.value + numero2.value);
  li.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${resultado}`;
  document.getElementById("resultado").appendChild(li);
}

//exercício 2

let valor = document.getElementById("numero");

function resultado2() {
  let cedulas = [100, 50, 20, 10, 5, 2];
  let valortotal = valor.value;
  let cedulasfinais = [];
  let li = document.createElement("li");

  for (let i = 0; i < cedulas.length; i++) {
    let cedula = cedulas[i];
    let cedulatotal = Math.floor(valortotal / cedula);
    valortotal = valortotal % cedula;
    cedulasfinais.push(cedulatotal);
  }

  li.innerHTML = `
        ${cedulasfinais[0]} notas de 100,
        ${cedulasfinais[1]} notas de 50,
        ${cedulasfinais[2]} notas de 20,
        ${cedulasfinais[3]} notas de 10,
        ${cedulasfinais[4]} notas de 5,
        ${cedulasfinais[5]} notas de 2,
    `;
  document.getElementById("resultado2").appendChild(li);
}

// Exercício 3
let lista = document.getElementById("lista");
let resultList = document.getElementById("resultado3");

function ordenarlista() {
  let list = lista.value.split(",");
  list = list.map((item) => parseInt(item));
  let sortedList = bubblesort(list);

  let li = document.createElement("li");

  li.innerHTML = `[${sortedList}]`;
  resultList.appendChild(li);
}

function bubblesort(list) {
  let i;
  let j;
  let temp;

  for (i = 0; i < list.length; i++) {
    for (j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}
