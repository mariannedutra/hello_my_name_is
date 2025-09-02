function App() {

  // Função no estilo JavaScript "puro" para lidar com o clique
  const handleEnviar = (): void => {
    // 1. Pegamos a referência do elemento input no DOM e informamos ao TS que é um input
    const inputElement = document.getElementById("nomeInput") as HTMLInputElement | null;

    // 2. Pegamos a referência do elemento h1 no DOM e informamos ao TS que é um h1
    const h1Element = document.getElementById("titulo") as HTMLHeadingElement | null;

    // 3. Verificamos se os elementos foram encontrados antes de usá-los
    if (inputElement && h1Element) {
      const nomeDigitado: string = inputElement.value;

      // 4. Modificamos o conteúdo do h1 diretamente
      if (nomeDigitado) {
        h1Element.innerText = `Olá, meu nome é ${nomeDigitado}!`;
      } else {
        h1Element.innerText = `Olá, meu nome é ___!`;
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center', width: '100vw'}}>
      <h1 id="titulo">Olá, meu nome é ___!</h1>
      
      <div>
        <input 
          id="nomeInput"
          type="text" 
          placeholder="Digite seu nome" 
          style={{ padding: '8px', marginRight: '10px'}}
        />
        
        <button onClick={handleEnviar} style={{ padding: '8px' }}>
          Enviar
        </button>
      </div>
      </div>

  );
}

export default App;