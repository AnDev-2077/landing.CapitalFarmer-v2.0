import { google } from "googleapis";
import { semanticSearch } from "../rag/semanticSearch";
import { vectorDB } from "../rag/vectorDB";

export interface RawService {
    keywords: string[];
    text: string;
}

let servicesDB: RawService[] = [];

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE;

export async function loadServicesDB(): Promise<void> {
    if (servicesDB.length > 0) return;

    try {
        

        const auth = new google.auth.GoogleAuth({
            keyFile: process.env.SERVICE_ACCOUNT_KEYFILE_PATH,
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SHEET_RANGE,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) return;

        const loadedServices: RawService[] = rows
            .map(row => {
                if (row.length < 3) return null;

                const keywords = row[0] as string;
                const category = row[1] as string;
                const services = row[2] as string;

                const combinedText = `[${category.toUpperCase()}] ${services.trim()}`;

                return {
                    keywords: keywords.toLowerCase().split(',').map(k => k.trim()),
                    text: combinedText,
                };
            })
            .filter((item): item is RawService => item !== null);

        servicesDB = loadedServices;

    } catch (error) {
        console.error("ERROR leyendo Google Sheets:", error);
    }
}

export const filterContext = async (message: string): Promise<string> => {
    if (vectorDB.length === 0) {
        return "ADVERTENCIA: Servicios no cargados.";
    }

    const results = await semanticSearch(message, 4);

    return `
    INFORMACIÓN RELEVANTE (RAG):
    ---------------------
    ${results.join("\n")}
    ---------------------
    `;
};
