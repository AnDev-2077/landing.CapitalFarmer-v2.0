import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const calendar = google.calendar("v3");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: SCOPES,
});

export async function getCalendarClient() {
  const authClient = await auth.getClient();
  return google.calendar({ version: "v3", auth: authClient });
}
