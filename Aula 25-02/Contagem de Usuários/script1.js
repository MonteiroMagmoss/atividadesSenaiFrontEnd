let numero = 0; 

window.onload = function() {
    let contador = localStorage.getItem("reloads");

    if(contador === null){
        contador = 0;
    }

    contador++;

    if(contador === 10){
        document.getElementById("hidden-box").hidden = false;
    }

    localStorage.setItem("reloads", contador);

    document.getElementById("usuarios").innerText = "Usuário número " + contador;
}; 

document.getElementById("startButton").addEventListener("click", function () {
    //window.location.reload(); recarrega a pagina
    localStorage.removeItem("reloads");
});