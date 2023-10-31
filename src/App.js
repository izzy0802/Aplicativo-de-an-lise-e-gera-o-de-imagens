import React, { useState } from 'react';
import React from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(''); // Estado para armazenar a URL da imagem

  const handleImageAnalysis = () => {
    // Lógica para análise de imagem
    console.log('Analisando imagem:', imageUrl);
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
