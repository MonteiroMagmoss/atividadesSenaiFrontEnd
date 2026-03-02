let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let isGameRunning = true;
const maxAttempts = 5;

document.getElementById("guessButton").addEventListener("click", function(){
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if(isNaN(guess) || guess < 1 || guess > 20){
        alert("Número inválido! Digite um número de 1 a 20");
        return;
    }
    if(isGameRunning){
        attempts++;

        if(guess !== secretNumber){
            message.textContent = `Esse não é o número sorteado, você ainda tem ${maxAttempts - attempts} tentativas`;
            message.style.color = "orange";
            message.style.textShadow = "1px 1px 2px orange";
        }
        if(guess === secretNumber){
            isGameRunning = false;
            message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
            message.style.color = "greenyellow";
            message.style.textShadow = "1px 1px 2px green";
            return;
        }
        if(attempts >= maxAttempts){
            isGameRunning = false;
            message.textContent = `Fim de jogo! O numero correto era ${secretNumber}`;
            message.style.color = "red";
            message.style.textShadow = "1px 1px 2px red";
            return;
        }
    }
    if(!isGameRunning){
        document.getElementById("restartButton").addEventListener("click", function(){
            let newSecretNumber = Math.floor(Math.random()*20) + 1;
            secretNumber = newSecretNumber;
            attempts = 0;
            message.textContent = "";
            isGameRunning = true;
        });
    }
});