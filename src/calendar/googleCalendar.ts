import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const calendar = google.calendar("v3");

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.SERVICE_ACCOUNT_KEYFILE_PATH,
  scopes: SCOPES,
});

export async function getCalendarClient() {
  const authClient = await auth.getClient();
  return google.calendar({ version: "v3", auth: authClient });
}
