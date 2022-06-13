function leiamais(){
    var maisinformacoes=$("#mais")[0];
    var btnmaisinformacoes=$("#btnmaisinformações")[0];

    if(maisinformacoes.style.display === "none"){
        maisinformacoes.style.display = "inline";
        btnmaisinformacoes.innerHTML ="Menos informações"
    }else{
        maisinformacoes.style.display = "none";
        btnmaisinformacoes.innerHTML ="Mais informações" 
    }
}

function buttonNewAss() {
    $('#myModal').modal('show');
}

function fecharModal() {
    $('#myModal').modal('hide');
}

const tableBodyy = document.querySelector("#tabela-curriculo");

$.ajax({
    url: "http://127.0.0.1:3081/doacaoselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
            console.log(element.IDDoacao);
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDDoacao}</th>
                <td>${element.Evento}</td>
                <td>${element.Data}</td>
                <td>${element.Ano}</td>
                <td>${element.Descrição}</td>
                <td>${element.Organização}</td>
                <td><button onclick="editDoacao(${element.IDDoacao})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deleteDoacao(${element.IDDoacao})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                  <button onclick="viewDoacao(${element.IDDoacao})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                </td>
        </tr>

        `
        tableBodyy.appendChild(tr);
        });
    }
});

function salvarAss() {
    const inputTitulo = document.querySelector("input[name='Evento']").value;
    const inputDescricao = document.querySelector("input[name='Data']").value;
    const inputData = document.querySelector("input[name='Ano']").value;
    const inputHora = document.querySelector("input[name='Descrição']").value;
    const inputValor = document.querySelector("input[name='Organização']").value;


    var settings = {
        "url": "http://127.0.0.1:3081/userinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "Evento": inputEvento,
            "Data": inputData,
            "Ano": inputAno,
            "Descrição": inputDescrição,
            "Organização": inputOrganização,

        }
      };
      
      $.ajax(settings);
}


function editEvento(id) {
    console.log(id);
    $.ajax({
        url: "http://127.0.0.1:3081/users",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                var editarDo = `
                    <div id="myModal`+id+`"class="modal customizar">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content customize">
                            <div class="modal-body">
                            <div class="mb-1" id="teste23">
                            <label for="exampleInputEmail1" class="form-label"></label>Titulo:

                            <div id="displaytt">
                                <input disabled onfocusout="disableField(1)" class="form-control" type="text" id="inputEdit1" placeholder="${element.tituloDoacao}" value="${element.tituloDoacao}"></input>
                                <button onclick="enableField(1)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>

                            </div>
                            <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(2)" class="form-control" type="text" id="inputEdit2" placeholder="${element.descricaoDoacao}" value="${element.descricaoDoacao}"></input>
                            <button onclick="enableField(2)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>Valor:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(3)" class="form-control" type="text" id="inputEdit3" placeholder="${element.valorDoacao}" value="${element.valorDoacao}"></input>
                            <button onclick="enableField(3)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-4">
                            <label for="exampleInputEmail1" class="form-label"></label>Data:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(4)" class="form-control" type="text" id="inputEdit4" placeholder="${element.dataDoacao}" value="${element.dataDoacao}"></input>
                            <button onclick="enableField(4)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-4">
                            <label for="exampleInputEmail1" class="form-label"></label>Horário:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(5)" class="form-control" type="text" id="inputEdit5" placeholder="${element.horarioDoacao}" value="${element.horarioDoacao}"></input>
                            <button onclick="enableField(5)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-6">
                            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(6)" class="form-control" type="text" id="inputEdit6" placeholder="${element.comproDoacao}" value="${element.comproDoacao}"></input>
                            <button onclick="enableField(6)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            </div>
                            <div class="modal-footer">
                            <button onclick="editVal(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
                            <button onclick="fecharVal(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    `
    if(element.IDDoacao == id){
        document.getElementById("modal").innerHTML = editarDo;
        $('#myModal' + id).modal('show');
    }
            });
        }
    });
};

function fecharVal(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

function editVal(id) {
    var edit1 = document.getElementById('inputEdit1').value;
    var edit2 = document.getElementById('inputEdit2').value;
    var edit3 = document.getElementById('inputEdit3').value;
    var edit4 = document.getElementById('inputEdit4').value;
    var edit5 = document.getElementById('inputEdit5').value;
    var edit6 = document.getElementById('inputEdit6').value;

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/doacaoupdate',
        data: {IDDoacao: id, tituloDoacao: edit1, descricaoDoacao: edit2, valorDoacao: edit3, dataDoacao: edit4, horarioDoacao: edit5, comproDoacao: edit6},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

// TESTE

function viewDoacao(id) {
    $.ajax({
        url: "http://127.0.0.1:3081/doacaoselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const divvv = `
        <div id="myModal`+id+`"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <p class="textAA">${element.tituloDoacao}</p>
          </div>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
            <p class="textAA">${element.descricaoDoacao}</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"></label>Valor:
            <p class="textAA">${element.valorDoacao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Data:
            <p class="textAA">${element.dataDoacao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Horário:
            <p class="textAA">${element.horarioDoacao}</p>
          </div>
          <div class="mb-6">
            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
            <p class="textAA">${element.comproDoacao}</p>
          </div>
            </div>
            <div class="modal-footer">
            <button onclick="fecharform(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar formulário</button>
            </div>
        </div>
        </div>
    </div>
    `
    if(element.IDDoacao == id){
        document.getElementById("modal").innerHTML = divvv;
        $('#myModal' + id).modal('show');
    }
            });
        }
    });
};

function fecharform(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

function searchFilter() {
    var input, filter, table, tr, td, i, txtValue;
  
    input = document.getElementById("inputSearchID");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}


