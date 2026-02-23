const botao = document.getElementById("verificarButton");
const inputNome = document.getElementById("campoNome");
const inputIdade = document.getElementById("campoIdade");
const resultado = document.getElementById("mensagem");

const inputComprimento = document.getElementById("campoComprimento");
const inputLargura = document.getElementById("campoLargura");
const calcularButton = document.getElementById("calcular");
const areaText = document.getElementById("areaText");

botao.addEventListener("click", () => {
    const nome = String(inputNome.value);
    const idade = Number(inputIdade.value);

    if(nome === "" || idade === ""){
        resultado.innerText = "Por favor, preencha todos os campos";
        resultado.style.color = "orange";
        return;
    }
    if(idade >= 18){
        resultado.innerText = "Olá, " + nome + "! Acesso liberado";
        resultado.style.color = "green";
    } else{
        resultado.innerText = "Sinto muito, " + nome + ". Acesso negado";
        resultado.style.color = "red";
    }
    inputNome.value = "";
    inputIdade.value = "";
});

calcularButton.addEventListener("click", ()=>{
    const ladoX = Number(inputComprimento.value);
    const ladoY = Number(inputLargura.value);
    const area = ladoX * ladoY;

    if(ladoX === "" || ladoY === ""){
        areaText.innerText = "Resultado: Insira um valor válido"
        areaText.style.color = "orange";
        return;
    } else{
        areaText.innerText = "Reultado: " + area;
        areaText.style.color = "green";
    }
    inputComprimento.value = "";
    inputLargura.value = "";
});