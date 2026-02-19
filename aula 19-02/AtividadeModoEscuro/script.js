const botaoLeitura = document.getElementById("leituraButton");
const removerLeitura = document.getElementById("sairLeituraButton");
const divHeader = document.getElementById("backgroundHeaderId");
const divIntro = document.getElementById("servicos");

function modoEscuro(){
    document.body.style.backgroundColor = "#00937dff";
    divHeader.classList.add("background-header-nova-cor");
    divIntro.classList.add("intro-page-new-color");
}
function modoClaro(){
    document.body.style.backgroundColor = "#68E3D1";
    divHeader.classList.remove("background-header-nova-cor");
    divIntro.classList.remove("intro-page-new-color");
}

botaoLeitura.addEventListener("click", modoEscuro);
removerLeitura.addEventListener("click", modoClaro);