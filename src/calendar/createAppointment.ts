import dayjs from "dayjs";
import { getCalendarClient } from "./googleCalendar";

const CALENDAR_ID = process.env.CALENDAR_ID;

export async function createAppointment(name: string, email: string, datetime: string, duration: number = 30) {
  const calendar = await getCalendarClient();

  const start = dayjs(datetime);
  const end = start.add(duration, "minute");

  const event = {
    summary: `Cita con ${name}`,
    description: `Reserva realizada por el bot`,
    start: { dateTime: start.toISOString(), timeZone: "America/Lima" },
    end: { dateTime: end.toISOString(), timeZone: "America/Lima" },
    attendees: [{ email }],
  };

  const response = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: event,
  });

  return {
    message: "Cita creada exitosamente",
    eventId: response.data.id,
    start: start.format("YYYY-MM-DD HH:mm"),
  };
}