import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState(''); // Estado para armazenar a URL da imagem

  const handleImageAnalysis = async () => {
    try {
        const result = await analyzeImage(imageUrl);
        console.log(result);
        // Trate os resultados conforme necessário
    } catch (error) {
        console.error("Erro ao chamar a API:", error);
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
    </div>
  );
}

export default App;
