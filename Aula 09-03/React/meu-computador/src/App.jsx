import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const botaoImg = document.getElementById("botao");
  const message = document.getElementById("mensagem");

  const [count, setCount] = useState(1);

  function atualizarContador() {
    setCount((count) => count + 1);

    if(count % 2 !== 0){
      botaoImg.classList.remove("botao-img");
      botaoImg.classList.add("botao-img-alt");
      message.textContent = "Desligado";
      return;
    }
    else if(count % 2 === 0){
      botaoImg.classList.remove("botao-img-alt");
      botaoImg.classList.add("botao-img");
      message.textContent = "Ligado";
      return;
    }
    else{
      alert("deu pau");
      return;
    }
  };

  return (
    <>
      <div>
        <h1>Controle de Equipamento</h1>
        <p>Painel de Operação do Torno CNC</p>
        <div class="botao-img" id="botao"></div>
      </div>
      <div className="card">
        <button onClick={atualizarContador}>
          Ligar/Desligar
        </button>
        <p id="mensagem"></p>
      </div>
    </>
  )
}

export default App
