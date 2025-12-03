"use server";

import { sendMessageStream } from "../../services/geminiService";

export async function sendMessageAction(message: string) {
    try {
        const stream = await sendMessageStream(message);

        // We need to return a stream that the client can consume.
        // Since we can't pass the raw Gemini stream directly because it might contain non-serializable data,
        // we will wrap it in a simple async generator.

        return (async function* () {
            for await (const chunk of stream) {
                const text = chunk.text;
                if (text) {
                    yield text;
                }
            }
        })();

    } catch (error) {
        console.error("Error in sendMessageAction:", error);
        throw new Error("Failed to process chat message");
    }
}
