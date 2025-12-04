"use server";

import { sendMessageStream } from "../services/geminiService";
import { checkAvailability } from "../calendar/calendarService";
import { createAppointment } from "../calendar/createAppointment";

export async function sendMessageAction(message: string) {
  try {
    const stream = await sendMessageStream(message);

    return (async function* () {
      for await (const chunk of stream) {
        if (chunk.text) {
          yield chunk.text;
        }

        // 💡 Solución: Busca el FunctionCall dentro de candidates/parts
        // Esto es lo que reemplaza a 'chunk.tool_call'
        const functionCall = chunk.candidates?.[0]?.content?.parts?.find(
          (part) => part.functionCall
        )?.functionCall;

        if (functionCall && functionCall.args) {
          const { name, args } = functionCall;

          console.log("TOOL CALL:", name, args);

          if (name === "checkAvailability") {
            const result = await checkAvailability(args.date as string, args.duration as number);

            yield JSON.stringify({
              tool: name,
              result,
            });
          }

          if (name === "createAppointment") {
            const result = await createAppointment(
              args.name as string,
              args.email as string,
              args.datetime as string,
              args.duration as number
            );

            yield JSON.stringify({
              tool: name,
              result,
            });
          }
        }
      }
    })();
  } catch (error) {
    console.error("Error in sendMessageAction:", error);
    throw new Error("Failed to process chat message");
  }
}