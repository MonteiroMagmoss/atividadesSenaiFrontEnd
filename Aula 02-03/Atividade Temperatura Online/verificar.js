document.getElementById("verificarButton").addEventListener("click", function(){
    let temperatura = document.getElementById("temperaturaInput").value;
    let message = document.getElementById("mensagem");

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
    if(temperatura > 0 && temperatura < 100){
        if(temperatura > 0 && temperatura < 10){
            message.textContent = "Água muito Fria";
            message.style.color = "blue";
            message.style.textShadow = "1px 1px 5px blue";
            return;
        }
        if(temperatura >10 && temperatura < 20){
            message.textContent = "Água Fria";
            message.style.color = "cyan";
            message.style.textShadow = "1px 1px 5px blue";
            return;
        }
        if(temperatura > 20 && temperatura < 30){
            message.textContent = "Água Morna";
            message.style.color = "green";
            message.style.textShadow = "1px 1px 5px green";
            return;
        }
        if(temperatura > 30 && temperatura < 40){
            message.textContent = "Água Quente";
            message.style.color = "yellow";
            message.style.textShadow = "1px 1px 5px orange";
            return;
        }
        if(temperatura > 40 && temperatura < 50){
            message.textContent = "Água Muito Quente";
            message.style.color = "orange";
            message.style.textShadow = "1px 1px 5px orange";
            return;
        }
        if(temperatura > 50 && temperatura < 100){
            message.textContent = "Ta querendo virar lagosta?"
            message.style.color = "red";
            message.style.textShadow = "1px 1px 5px red";
            return;
        }
    }
    //message.textContent = temperatura;
});