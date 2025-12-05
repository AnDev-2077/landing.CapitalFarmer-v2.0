"use server";

import { sendMessageStream } from "../services/geminiService";

export async function sendMessageAction(message: string) {
  try {
    // El stream que recibimos aquí ya es la RESPUESTA FINAL
    // (Gemini ya ejecutó las herramientas internamente en el servicio si fue necesario)
    const stream = await sendMessageStream(message);

    return (async function* () {
      for await (const chunk of stream) {
        // En la SDK @google/genai, chunk.text() suele ser una función 
        // o una propiedad getter que extrae el texto de manera segura.
        // Si te da error, intenta con 'chunk.text' sin paréntesis.
        const text = chunk.text; 

        if (text) {
          yield text;
        }
      }
    })();
  } catch (error) {
    console.error("Error in sendMessageAction:", error);
    throw new Error("Failed to process chat message", { cause: error });
  }
}