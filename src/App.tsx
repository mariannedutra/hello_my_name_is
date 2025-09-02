function App() {
  const nome = " _ _ _ ";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center', width: '100vw'}}>
      <h1>Olá, meu nome é {nome}!</h1>
      
      <div>
        <input 
          type="text" 
          placeholder="Digite seu nome" 
          style={{ padding: '8px', marginRight: '10px'}}
        />
        
        <button style={{ padding: '8px' }}>
          Enviar
        </button>
      </div>
      </div>

  );
}

export default App;