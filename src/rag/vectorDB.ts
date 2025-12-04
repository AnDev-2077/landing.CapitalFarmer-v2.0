import { RawService } from "../services/loadServicesDB";
import { embedText } from "./embeddings";

export interface VectorItem {
  text: string;
  embedding: number[];
}

export let vectorDB: VectorItem[] = [];

export async function buildVectorDB(services: RawService[]) {
  vectorDB = [];

  for (const service of services) {
    const text = `[${service.category}] ${service.services}`;
    const embedding = await embedText(text);

    vectorDB.push({ text, embedding });
  }
}
