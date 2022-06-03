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


