// É preciso importar também o useEffect
import { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState(" _ _ _ ");
  const [valorInput, setValorInput] = useState("");

  const [imagemPokemonUrl, setImagemPokemonUrl] = useState(null);

  useEffect(() => {
    const buscarPokemon = async () => {
      // Ignora a busca se o nome for o inicial
      if (nome === " _ _ _ ") {
        return;
      }

      // Gera um ID de Pokémon aleatório (existem mais de 1000)
      const pokemonId = Math.floor(Math.random() * 898) + 1;
      
      try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const dados = await resposta.json();
        
        // Pega a URL da arte oficial do Pokémon
        const urlDaImagem = dados.sprites.other['official-artwork'].front_default;
        
        setImagemPokemonUrl(urlDaImagem); // Atualiza o estado com a nova URL

      } catch (erro) {
        console.error("Falha ao buscar Pokémon:", erro);
        setImagemPokemonUrl(null); 
      }
    };

    buscarPokemon();

  // Este efeito roda toda vez que 'nome' mudar
  }, [nome]);

  const handleEnviar = () => {
    if (valorInput) {
      setNome(valorInput);
    }
  };

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
      
      <div style={{ marginTop: '30px', height: '300px', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        { imagemPokemonUrl ? 
          <img src={imagemPokemonUrl} alt={`Pokémon para ${nome}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          : <span> </span>
        }
      </div>
    </div>
  );
}

export default App;