document.getElementById("filtrarButton").addEventListener("click", function(){
    let numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const resultadoImpares = document.getElementById("resultado-impares");

    
    if(isNaN(numero) || numero <=0){
        alert("Por favor, insira um numero válido maior que zero.");
        return;
    }
    let pares = "Números pares (ignorando multiplos de 5):\n ";
    let impares = "Números impares: "
    
    //for(indice (começo); indice (final); incremento)    ---- Estrutura do for
    
    // NUMEROS PARES!!
    for(let i = 1; i <= numero; i++){
        if(i % 2 !== 0){
            continue; //Pula os numeros impares
        }
        if(i % 5 === 0){
            continue; //Pula multiplos de 5
        }

        if (i >= 50){
            break; //Parar o loop
        }

        let indexColor = "";
        
        indexColor += 
        `
            <span class="destaque-index">${i} </span>
        `;
        
        pares += indexColor;
        
        //pares += i + " "; //concatenacção antiga
    }
    //resultado.textContent = pares; //Impressão antiga
    resultado.innerHTML = pares;
    
    for(let t = 0; t <= numero; t++){
        if(t % 2 == 0){
            continue;
        }
        if(t >= 50){
            break;
        }

        let tColor = "";
        
        tColor += 
        `
            <span class="destaque-index-impar">${t} </span>
        `;
        impares += tColor;
    }

    resultadoImpares.innerHTML = impares;
});