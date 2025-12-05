import dayjs from "dayjs";
import { getCalendarClient } from "./googleCalendar";

const CALENDAR_ID = process.env.CALENDAR_ID!;

if (!CALENDAR_ID) {
  throw new Error("Environment variable CALENDAR_ID is not defined.");
}

// export async function checkAvailability(date: string, duration: number = 30) {
//   const calendar = await getCalendarClient();

//   const startOfDay = dayjs(date).startOf("day").toISOString();
//   const endOfDay = dayjs(date).endOf("day").toISOString();

//   const response = await calendar.freebusy.query({
//     requestBody: {
//       timeMin: startOfDay,
//       timeMax: endOfDay,
//       timeZone: "America/Lima",
//       items: [{ id: CALENDAR_ID }],
//     },
//   });

//   const busySlots = response.data.calendars?.[CALENDAR_ID]?.busy || [];

//   // Definir horarios de trabajo
//   const workStart = dayjs(date).hour(9).minute(0);
//   const workEnd = dayjs(date).hour(18).minute(0);

//   const availableSlots: string[] = [];
//   let slot = workStart;

//   while (slot.add(duration, "minute").isBefore(workEnd)) {
//     const slotStart = slot;
//     const slotEnd = slot.add(duration, "minute");

//     const overlaps = busySlots.some(b => {
//       return (
//         dayjs(b.start).isBefore(slotEnd) &&
//         dayjs(b.end).isAfter(slotStart)
//       );
//     });

//     if (!overlaps) {
//       availableSlots.push(slotStart.format("HH:mm"));
//     }

//     slot = slot.add(duration, "minute");
//   }

//   return availableSlots;
// }

export async function checkAvailability(date: string, duration: number = 30) {
  const calendar = await getCalendarClient();

  const startOfDay = dayjs(date).startOf("day").toISOString();
  const endOfDay = dayjs(date).endOf("day").toISOString();

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: startOfDay,
      timeMax: endOfDay,
      timeZone: "America/Lima",
      items: [{ id: CALENDAR_ID }],
    },
  });

  const busySlots = response.data.calendars?.[CALENDAR_ID]?.busy || [];

  // Horario laboral
  const workStart = dayjs(date).hour(9).minute(0);
  const workEnd = dayjs(date).hour(18).minute(0);

  const availableSlots: string[] = [];
  let slot = workStart;

  // Generar horarios disponibles considerando conflictos
  while (slot.add(duration, "minute").isBefore(workEnd)) {
    const slotStart = slot;
    const slotEnd = slot.add(duration, "minute");

    const overlaps = busySlots.some(b => {
      return (
        dayjs(b.start).isBefore(slotEnd) &&
        dayjs(b.end).isAfter(slotStart)
      );
    });

    if (!overlaps) {
      availableSlots.push(slotStart.format("HH:mm"));
    }

    slot = slot.add(duration, "minute");
  }

  // FILTRAR HORARIOS PASADOS SI ES HOY
  const isToday = dayjs().isSame(dayjs(date), "day");
  let filteredSlots = availableSlots;

  if (isToday) {
    const now = dayjs();
    filteredSlots = availableSlots.filter(time => {
      const slotTime = dayjs(`${date} ${time}`, "YYYY-MM-DD HH:mm");
      return slotTime.isAfter(now);
    });
  }

  return filteredSlots;
}
