import { vectorDB } from "./vectorDB";
import { embedText } from "./embeddings";

function cosineSimilarity(a: number[], b: number[]) {
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dot / (normA * normB);
}

export async function semanticSearch(query: string, k = 3) {
    const queryEmbedding = await embedText(query);

    const scored = vectorDB.map(item => ({
        text: item.text,
        score: cosineSimilarity(queryEmbedding, item.embedding),
    }));

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, k).map(r => r.text);
}
