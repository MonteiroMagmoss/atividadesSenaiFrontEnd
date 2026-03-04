document.getElementById("verificarButton").addEventListener("click", function(){
    let temperatura = document.getElementById("temperaturaInput").value;
    let message = document.getElementById("mensagem");
    let estacaoAno = document.getElementById("estacao").value;

    if(isNaN(temperatura)){
        alert("Digite uma temperatura válida entre 1 e 99 graus.");
        return;
    }
    if(temperatura <=0){
        alert("O valor digitado corresponde a temperatura da água em estado sólido! Digite o valor para a água no estado líquido.");
        return;
    }
    if(temperatura >= 100){
        alert("O valor digitado corresponde a água no estado gasoso! Digite um valor para a água no estado líquido.");
        return;
    }

    let temperaturaMuitoGelada = 1;
    let temperaturaGelada = 10;
    let temperaturaFria = 20;
    let temperaturaMorna = 30;
    let temperaturaQuente = 40;
    let temperaturaMuitoQuente = 50;

    if(estacaoAno === "inverno"){
        temperaturaGelada = 20;
        temperaturaFria = 30;
        temperaturaMorna = 40;
        temperaturaQuente = 50;
        temperaturaMuitoQuente = 60;
    }
    else if(estacaoAno === "verao"){
        temperaturaGelada = 5;
        temperaturaFria = 10;
        temperaturaMorna = 20;
        temperaturaQuente = 30;
        temperaturaMuitoQuente = 40;
    }
    else if(estacaoAno === "primavera" || estacaoAno === "outono"){
        temperaturaGelada = 10;
        temperaturaFria = 20;
        temperaturaMorna = 30;
        temperaturaQuente = 40;
        temperaturaMuitoQuente = 50;
    }

    if(temperatura > 0 && temperatura < 100){
        if(temperatura < temperaturaMuitoGelada){
            message.textContent = "Você está bebendo água no frigorífico?";
            message.style.color = "white";
            message.style.textShadow = "1px 1px 5px white";
            return;
        }
        else if(temperatura < temperaturaGelada){
            message.textContent = "Água muito Fria";
            message.style.color = "blue";
            message.style.textShadow = "1px 1px 5px blue";
            return;
        }
        else if(temperatura < temperaturaFria){
            message.textContent = "Água Fria";
            message.style.color = "cyan";
            message.style.textShadow = "1px 1px 5px blue";
            return;
        }
        else if(temperatura < temperaturaMorna){
            message.textContent = "Água Agradável";
            message.style.color = "green";
            message.style.textShadow = "1px 1px 5px green";
            return;
        }
        else if(temperatura < temperaturaQuente){
            message.textContent = "Água Quente";
            message.style.color = "yellow";
            message.style.textShadow = "1px 1px 5px orange";
            return;
        }
        else if(temperatura < temperaturaMuitoQuente){
            message.textContent = "Água Muito Quente";
            message.style.color = "orange";
            message.style.textShadow = "1px 1px 5px orange";
            return;
        }
        else{
            message.textContent = "Ta querendo virar lagosta?"
            message.style.color = "red";
            message.style.textShadow = "1px 1px 5px red";
            return;
        }
    }
    
    //message.textContent = temperatura;
});