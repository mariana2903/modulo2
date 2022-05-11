function leiamais(){
    var maisinformacoes=document.getElementById("mais");
    var btnmaisinformacoes=document.getElementById("btnmaisinformações");

    if(maisinformacoes.style.display === "none"){
        maisinformacoes.style.display = "inline";
        btnmaisinformacoes.innerHTML ="Menos informações"
    }else{
        maisinformacoes.style.display = "none";
        btnmaisinformacoes.innerHTML ="Mais informações" 
    }
}


