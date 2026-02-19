//Pegar o elemento no HTML
const botao = document.getElementById("meuBotao");

let cores = ["red", "blue", "green"];

//Criando uma funcao para mudar de cor
function mudarCor(){

    let randomNumber;
    let randomColor;

    randomNumber = Math.floor(Math.random() * cores.length);
    randomColor = cores[randomNumber];

    document.body.style.backgroundColor = randomColor;
    console.log("o numero é " + randomNumber);
    //alert(randomNumber);
}

//Ouvir   clique para chamar a funcao
botao.addEventListener("click", mudarCor);