import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function DisplayResults({ imageUrl, results }) {
  if (!results) return null;

  return (
      <div>
          <h2>Resultados da Análise:</h2>
          <img src={imageUrl} alt="Analyzed" width="200" />
          <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
  );
}


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);


  const handleImageAnalysis = async () => {
    setIsLoading(true);
    try {
        const result = await analyzeImage(imageUrl);
        setResults(result);
    } catch (error) {
        console.error("Erro ao chamar a API:", error);
    } finally {
        setIsLoading(false);
    }
};


  const handleImageGeneration = () => {
    // Lógica para geração de imagem
    console.log('Gerando imagem com prompt:', imageUrl);
  };

  return (
    <div className="App">
      <h1>Título da Aplicação</h1>

      <input 
        type="text" 
        placeholder="Insira a URL da imagem ou o prompt" 
        value={imageUrl} 
        onChange={(e) => setImageUrl(e.target.value)} 
      />

      <button onClick={handleImageAnalysis}>Analisar Imagem</button>
      <button onClick={handleImageGeneration}>Gerar Imagem</button>

      {isLoading && <p>Analisando imagem...</p>}
      <DisplayResults imageUrl={imageUrl} results={results} />
    </div>
  );
}

export default App;
