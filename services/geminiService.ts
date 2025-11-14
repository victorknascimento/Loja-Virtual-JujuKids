
import { GoogleGenAI } from "@google/genai";

// Assume API_KEY is set in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY for Gemini is not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateProductDescription = async (
  productName: string,
  category: string
): Promise<string> => {
  if (!API_KEY) {
    return "Serviço de IA indisponível. Por favor, configure a chave da API.";
  }

  try {
    const prompt = `Crie uma descrição de produto curta, atraente e amigável para uma loja de roupas infantis. O produto é "${productName}" na categoria "${category}". A descrição deve ter no máximo 2 frases e destacar o conforto e o estilo. Fale em português do Brasil.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating description with Gemini:", error);
    return "Não foi possível gerar a descrição. Tente novamente.";
  }
};
