import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const MODEL_NAME = "gemini-2.5-flash";
const SYSTEM_INSTRUCTION = `Eres un asistente de IA amigable y útil. Responde a las preguntas de forma concisa y clara.`;

let aiClient: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

function initGeminiClient(apikey?: string) {
    if (!apikey) {
        if (!API_KEY){
            throw new Error("API_KEY is not defined");
        }
        aiClient = new GoogleGenAI({ apiKey: API_KEY });
    }
    return aiClient;
}

export const initGeminiChat = (): Chat => {
    if (chatSession){
        return chatSession;
    }

    const client = initGeminiClient();

    chatSession = client?.chats.create({
        model: MODEL_NAME,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION
        },
    });
    
    return chatSession;
}