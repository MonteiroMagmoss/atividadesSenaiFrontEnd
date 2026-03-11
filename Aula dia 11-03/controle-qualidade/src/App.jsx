import { useState } from "react";
import './App.css'

function App (){
  const[medida, setMedida] = useState(0);


  const valorAlvo = 50.0;
  const tolerancia = 0.5;

  let mensagemStatus;
  let classeVisual;

  if(medida === 0){
    mensagemStatus = "Aguardando leitura do paquimetro";
    classeVisual = "cinza";
  } else if(medida >=(valorAlvo - tolerancia) && medida <= (valorAlvo + tolerancia)){
    mensagemStatus = `Aprovada: ${medida}mm está dentro da tolerancia`;
    classeVisual = "verde";
  }else{
    mensagemStatus = `Reprovado: ${medida}mm está fora dos limites`;
    classeVisual = "vermelho";
  }

  return(
    <div className="painel">
      <h2>Controle de Qualidade 1.0</h2>
      <p>Peça: Pino de Retenção</p>
      <hr />

      <div className="input-area">
        <label>Insira a medida em (mm)</label>
        <input 
          type="number" 
          step="0.01" 
          onChange={(e) => setMedida(parseFloat(e.target.value) || 0)} 
        />
      </div>
      <div className={`resultado ${classeVisual}`}>
        {mensagemStatus}
      </div>
      <p style={{marginTop: '20px', fontSize: '0.8rem', color: '#888'}}>
        Alvo: {valorAlvo}mm | Limite 49.5mm a 50.5mm
      </p>
    </div>
  )
}

export default App;