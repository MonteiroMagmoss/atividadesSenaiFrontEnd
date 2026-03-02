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
            return;
        }
        if(temperatura > 10 && temperatura < 50){
            message.textContent = "Água ta boa";
            return;
        }
        if(temperatura > 50 && temperatura < 100){
            message.textContent = "Ta querendo virar lagosta?"
            return;
        }
    }
    //message.textContent = temperatura;
});