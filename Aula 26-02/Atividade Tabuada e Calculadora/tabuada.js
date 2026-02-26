document.getElementById("calcularButton").addEventListener("click", function(){
    let numero = parseInt(document.getElementById("numero").value);
    let range = parseInt(document.getElementById("range").value);

    if(isNaN(numero) || numero <=0){
        alert("Por favor, insira um numero valido maior que zero");
        return;
    };
    if(isNaN(range) || range <=0){
        alert("Por favor, insira um numero valido maior que zero para o limite da tabuada");
        return;
    };

    alert(`Tabuada do ${numero}:`);
    for(let i=1; i<=range; i++){
        alert(`${numero} x ${i} = ${numero * i}`);
    };

    alert("Tabuada finalizada!")
});

document.getElementById("calcularButtonTwo").addEventListener("click", function(){
    const operation = document.getElementById("operations").value;
    
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);

    if(isNaN(numberOne)){
        alert("Insira um numero valido para o primeiro numero");
        return;
    }
    if(isNaN(numberTwo)){
        alert("Insira um numero valido para o segundo numero");
        return;
    }

    if(operation === "soma"){
        alert(`Somando ${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
        return;
    }
    else if(operation === "sub"){
        alert(`Subtraindo ${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
        return;
    }
    else if(operation === "mult"){
        alert(`Multiplicando ${numberOne} x ${numberTwo} = ${numberOne * numberTwo}`);
        return;
    }
    else if(operation === "div"){
        alert(`Dividindo ${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
        return;
    }
    else{
        alert("Escolha uma operação!")
        return;
    }
});