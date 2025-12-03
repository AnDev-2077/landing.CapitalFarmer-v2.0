import { google, sheets_v4 } from "googleapis";

export interface ServiceEntry {
    keywords: string[];
    text: string;
}

let servicesDB: ServiceEntry[] = [];

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE;

export async function loadServicesDB(): Promise<void> {
    if (servicesDB.length > 0) return; // Evita la recarga

    try {
        // 1. AUTENTICACIÓN
        const auth = new google.auth.GoogleAuth({
            keyFile: process.env.SERVICE_ACCOUNT_KEYFILE_PATH,
            // Scopes necesarios: solo lectura de hojas de cálculo
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });

        // 2. LECTURA DE DATOS
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SHEET_RANGE,
        });

        const rows = response.data.values;

        if (!rows || rows.length === 0) {
            console.warn("Google Sheet está vacío o el rango es incorrecto.");
            return;
        }

        // 3. TRANSFORMACIÓN DE DATOS
        const loadedServices: ServiceEntry[] = rows
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
            .filter((item): item is ServiceEntry => item !== null);

        servicesDB = loadedServices;

    } catch (error) {
        console.error("ERROR FATAL al conectar con Google Sheets:", error);
        console.error("Verifica el ID de la Hoja, el rango, y que la Cuenta de Servicio tenga permisos.");
    }
}

export const filterContext = (message: string): string => {
    if (servicesDB.length === 0) {
        return "ADVERTENCIA: No se pudo cargar la lista de servicios. Pide al cliente que intente más tarde.";
    }

    const lowerMessage = message.toLowerCase();

    const relevantServices = servicesDB.filter(service =>
        service.keywords.some(keyword => lowerMessage.includes(keyword))
    );

    const contextText = relevantServices.map(s => s.text).join('\n');

    return `
    INFORMACIÓN RELEVANTE DE LA BASE DE CONOCIMIENTO (OBLIGATORIO USAR):
    ---
    ${contextText}
    ---
    `;
};