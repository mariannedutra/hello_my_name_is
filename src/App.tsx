import { useState } from "react";

function App() {
  const [nome, setNome] = useState(" _ _ _ ");
  const [valorInput, setValorInput] = useState("");

  function handleEnviar() {
    if (valorInput) {
        setNome(valorInput);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center', width: '100vw'}}>
      <h1>Olá, meu nome é {nome}!</h1>
      
      <div>
        <input 
          type="text" 
          placeholder="Digite seu nome" 
          value={valorInput}
          onChange={(evento) => setValorInput(evento.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        
        <button onClick={handleEnviar} style={{ padding: '8px' }}>
          Enviar
        </button>
      </div>
      </div>

  );
}

export default App;