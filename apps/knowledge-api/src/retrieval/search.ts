import * as fs from "fs";
import * as path from "path";
import type {
  KnowledgeChunk,
  KnowledgeDomain,
  KnowledgeDB,
} from "../contracts";

// ------------------------------------------------------------------
// In-memory cache of the knowledge DB.
// Re-loaded when the file's version or ingested_at changes (i.e.
// after a re-ingest).  This avoids re-reading on every request
// while still picking up new data after ingestion.
// ------------------------------------------------------------------

let cachedDB: KnowledgeDB | null = null;

/**
 * Load the versioned knowledge DB from disk.
 * Returns the chunks array, or [] if the DB doesn't exist yet.
 */
function loadChunks(): KnowledgeChunk[] {
  const dbPath = path.join(__dirname, "../../knowledge-db.json");

  if (!fs.existsSync(dbPath)) {
    console.warn(
      '[Search] Knowledge DB not found. Run "npm run ingest" first.',
    );
    return [];
  }

  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const db: KnowledgeDB = JSON.parse(data);

    // Re-use cache if version and timestamp haven't changed
    if (
      cachedDB &&
      cachedDB.version === db.version &&
      cachedDB.ingested_at === db.ingested_at
    ) {
      return cachedDB.chunks;
    }

    cachedDB = db;
    console.log(
      `[Search] Loaded knowledge DB v${db.version} ` +
        `(${db.chunk_count} chunks, ingested ${db.ingested_at})`,
    );
    return db.chunks;
  } catch (err) {
    console.error("[Search] Error loading knowledge DB:", err);
    return [];
  }
}

/**
 * Search chunks by keyword matching within the specified domains.
 *
 * MVP implementation: simple keyword search on title + content.
 * TODO: Replace with vector similarity search (embeddings).
 */
export async function searchChunks(
  query: string,
  domains: KnowledgeDomain[],
): Promise<KnowledgeChunk[]> {
  const chunks = loadChunks();

  // Tokenize query into meaningful terms (> 2 chars)
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2);

  if (terms.length === 0) return [];

  return chunks.filter((chunk) => {
    // Domain filter
    if (!domains.includes(chunk.domain)) return false;

    const titleLower = chunk.title.toLowerCase();
    const contentLower = chunk.content.toLowerCase();

    // Match if ANY term appears in the title, or at least half in the content
    const titleMatch = terms.some((t) => titleLower.includes(t));
    const contentMatchCount = terms.filter((t) =>
      contentLower.includes(t),
    ).length;

    return titleMatch || contentMatchCount >= Math.ceil(terms.length / 2);
  });
}
