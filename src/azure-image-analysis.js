// azure-image-analysis.js

import axios from 'axios';

const subscriptionKey = 'YOUR_AZURE_SUBSCRIPTION_KEY';
const endpoint = 'YOUR_AZURE_ENDPOINT_URL';  // Deve terminar com '/vision/v4.0/analyze'

export const analyzeImage = async (imageUrl) => {
    try {
        const response = await axios.post(
            endpoint,
            { url: imageUrl },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': subscriptionKey
                },
                params: {
                    visualFeatures: 'Categories,Description,Color',  // Personalize conforme necessário
                    details: '',
                    language: 'en'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao analisar imagem:", error);
        throw error;
    }
}
