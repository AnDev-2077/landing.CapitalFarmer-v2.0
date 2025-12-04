export const calendarFunctions = [
  {
    name: "checkAvailability",
    description: "Consulta la disponibilidad de Google Calendar para una fecha específica",
    parameters: {
      type: "object",
      properties: {
        date: { type: "string", description: "Fecha en formato YYYY-MM-DD" },
        duration: { type: "number", description: "Duración en minutos de la cita", default: 30 }
      },
      required: ["date"]
    }
  },
  {
    name: "createAppointment",
    description: "Crea una cita en Google Calendar",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: "Nombre del cliente" },
        email: { type: "string", description: "Correo del cliente" },
        datetime: { type: "string", description: "Fecha y hora en formato ISO" },
        duration: { type: "number", description: "Duración en minutos", default: 30 }
      },
      required: ["name", "email", "datetime"]
    }
  }
];
