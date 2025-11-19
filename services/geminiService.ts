export const generateProductDescription = async (productName: string, category: string): Promise<string> => {
    console.warn("API_KEY for Gemini is not set. AI features will be disabled.");
    return "Serviço de IA indisponível. Por favor, configure a chave da API.";
};
