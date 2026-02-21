const botaoLeitura = document.getElementById("leituraButton");
const removerLeitura = document.getElementById("sairLeituraButton");
const divHeader = document.getElementById("backgroundHeaderId");
const divIntro = document.getElementById("servicos");
const divLocal = document.getElementById("local");
const divSobre = document.getElementById("sobre");
const divProdutos = document.getElementById("produtos");
const divContato = document.getElementById("contatos");

function modoEscuro(){
    document.body.style.backgroundColor = "#00937dff";
    
    divHeader.classList.remove("background-header");
    divHeader.classList.add("background-header-nova-cor");

    divIntro.classList.remove("intro-page");
    divIntro.classList.add("intro-page-new-color");
    
    divLocal.classList.remove("start-page");
    divLocal.classList.add("start-page-new-color");

    divSobre.classList.remove("mid-page");
    divSobre.classList.add("mid-page-new-color");

    divProdutos.classList.remove("end-page");
    divProdutos.classList.add("end-page-new-color");

    divContato.classList.remove("final-page");
    divContato.classList.add("final-page-new-color");
}
function modoClaro(){
    document.body.style.backgroundColor = "#68E3D1";

    divHeader.classList.add("background-header");
    divHeader.classList.remove("background-header-nova-cor");

    divIntro.classList.add("intro-page");
    divIntro.classList.remove("intro-page-new-color");

    divLocal.classList.add("start-page");
    divLocal.classList.remove("start-page-new-color");

    divSobre.classList.add("mid-page");
    divSobre.classList.remove("mid-page-new-color");

    divProdutos.classList.add("end-page");
    divProdutos.classList.remove("end-page-new-color");

    divContato.classList.add("final-page");
    divContato.classList.remove("final-page-new-color");
}

botaoLeitura.addEventListener("click", modoEscuro);
removerLeitura.addEventListener("click", modoClaro);