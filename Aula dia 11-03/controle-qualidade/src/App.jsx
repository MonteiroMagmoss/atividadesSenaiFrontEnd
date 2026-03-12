import { useState } from "react";
import './App.css'

function App (){
  const [usuario, setUsuario] = useState(null); // Null define que o usuário se encontra deslogado
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [listaUsuarios] = useState([
    {id: 1, nome: "Airton Sena", email: "admin@admin.com", senha: "admin", cargo: "admin"},
    {id: 2, nome: "Vendedor 01", email: "usuario@usuario.com", senha: "usuario", cargo: "operador"}
  ]);

  const produtos = [
    {id: 1, nome: "Pino de Retenção", descricao: "Pino de retenção para fixação de peças", preco: 10.0},
    {id: 2, nome: "Parafuso M6", descricao: "Parafuso métrico M6 para montagem geral", preco: 5.0},
    {id: 3, nome: "Arruela de Pressão", descricao: "Arruela de pressão para evitar afrouxamento", preco: 2.0}
  ];

  const realizarLogin = () => {
    const achado = listaUsuarios.find(u => u.email === email && u.senha === senha); // Método find para localizar o usuário com email e senha correspondentes
    if(achado){
      setUsuario(achado);
    }else{
      alert("Email ou senha incorretos!");
    }
  };


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


    //TELA DE LOGIN
  if(!usuario){
    return(
      <>
        <div className="app-container">
          <header className="header"><div className="logo-texto">LOGIN</div></header>
          <div className="form-container">
            <h2>ACESSO AO SISTEMA</h2>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <label>Senha:</label>
            <input type="password" onChange={(e) => setSenha(e.target.value)} />
            <button className="loginButton" onClick={realizarLogin}>ENTRAR!</button>
          </div>
        </div>
      </>
    );
  }
  //TELA PRINCIPAL APÓS LOGIN
  return(
    <div className="app-container">
      <header className="header">
        <div className="logo-texto">SISTEMA DE PRODUTOS</div>
        <span>Bem-vindo, {usuario.nome}! ({usuario.cargo})</span>
        <button className="sairButton" onClick={() => setUsuario(null)}>SAIR!</button>
      </header>
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Painel de Controle</h1>

        {usuario.cargo === "admin" ? (
          // Area do Admin
          <section>
            <h2 style={{color: '#cc4996'}}>Gerenciamento de Equipe</h2>
            <table className="tabela-admin">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Colaborador</th>
                  <th>Cargo</th>
                </tr>
              </thead>
              <tbody>
                {listaUsuarios.map(u => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.nome}</td>
                    <td>{u.cargo.toUpperCase()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          </section>
        ) : (
          // Area do Operador
          <section>
            <h2 style={{color: '#4f8dcd'}}>Estoque de Vendas</h2>
            <div className="galeria">
              {produtos.map(s => (
                <div className="item" key={s.id}>
                  <p className="fonte">{s.nome}</p>
                  <p>Preço Sugerido: R$ {s.preco.toFixed(2)}</p>
                  <button style={{background: '#2ecc71', color: 'white'}}>Vender</button>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App;