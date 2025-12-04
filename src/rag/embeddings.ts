import { GoogleGenAI } from "@google/genai";

const embeddingClient = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function embedText(text: string): Promise<number[]> {
    const result = await embeddingClient.models.embedContent({
        model: "models/gemini-embedding-001",
        contents: text
    });

    return result.embeddings?.[0].values ?? [];
}
