// calendarFunctions.ts
import { FunctionDeclaration, Type } from '@google/genai';

export const calendarFunctions: FunctionDeclaration[] = [
  {
    name: "checkAvailability",
    description: "Verifica la disponibilidad de horarios.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        date: { 
          type: Type.STRING, 
          description: "Fecha para verificar disponibilidad." 
        },
        duration: { 
          type: Type.NUMBER, 
          description: "Duración en minutos.", 
          default: 30 
        },
      },
      required: ["date"],
    },
  },
  {
    name: "createAppointment",
    description: "Crea una cita en el calendario.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        name: { 
          type: Type.STRING, 
          description: "Nombre del cliente." 
        },
        email: { 
          type: Type.STRING, 
          description: "Correo electrónico del cliente." 
        },
        datetime: { 
          type: Type.STRING, 
          description: "Fecha y hora de la cita." 
        },
        duration: { 
          type: Type.NUMBER, 
          description: "Duración en minutos.", 
          default: 30 
        },
      },
      required: ["name", "email", "datetime"],
    },
  },
];