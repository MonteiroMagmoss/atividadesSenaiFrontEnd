document.getElementById("startButton").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numero").value);
    
    if(isNaN(numero) || numero <= 0){
        alert("Por favor insira um número válido!");
        return;
    }
    alert("Iniciando contagem regressiva");
    while(numero >=0){
        alert(`Contagem: ${numero}`);
        numero--;
    }
    alert("Contagem Finalizada!");
});