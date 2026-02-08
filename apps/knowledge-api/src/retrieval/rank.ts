import type { KnowledgeChunk } from "../contracts";

/**
 * Rank and limit retrieved chunks by relevance to the query.
 *
 * MVP: keyword-frequency scoring with document order as tiebreaker.
 * TODO: Replace with a cross-encoder or reranker model.
 */
export function rankChunks(
  chunks: KnowledgeChunk[],
  query: string,
): KnowledgeChunk[] {
  const queryTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2);

  return chunks
    .map((chunk) => ({
      chunk,
      score: calculateScore(chunk, queryTerms),
    }))
    .sort((a, b) => {
      // Primary: relevance score descending
      if (b.score !== a.score) return b.score - a.score;
      // Tiebreaker: document order ascending (earlier sections first)
      return a.chunk.order - b.chunk.order;
    })
    .slice(0, 5) // Return top 5
    .map((r) => r.chunk);
}

function calculateScore(chunk: KnowledgeChunk, terms: string[]): number {
  let score = 0;
  const titleLower = chunk.title.toLowerCase();
  const contentLower = chunk.content.toLowerCase();

  for (const term of terms) {
    // Title match is worth more (topical relevance signal)
    if (titleLower.includes(term)) score += 10;
    // Content match
    if (contentLower.includes(term)) score += 5;
  }

  return score;
}
