import * as path from "path";
import * as fs from "fs";
import { ingestCanonicalDocs } from "./markdown";
import type { KnowledgeDB } from "../contracts";

/**
 * Current knowledge version.
 * Bump this when the schema, source format, or chunking strategy changes.
 */
const KNOWLEDGE_VERSION = "whitepaper-v1";

async function main() {
  // Resolve to the repository root (apps/knowledge-api/src/ingest -> root)
  const repoRoot = path.resolve(__dirname, "../../../../");
  const docsDir = path.join(repoRoot, "website", "docs");

  console.log(`[Ingest] Repository root:  ${repoRoot}`);
  console.log(`[Ingest] Ingestion source: ${docsDir}`);
  console.log(`[Ingest] Version:          ${KNOWLEDGE_VERSION}`);
  console.log();

  try {
    const chunks = await ingestCanonicalDocs(repoRoot);
    console.log(`[Ingest] Ingested ${chunks.length} canonical chunks.\n`);

    // Log each chunk for verification
    for (const chunk of chunks) {
      console.log(
        `  [${String(chunk.order).padStart(2, "0")}] ${chunk.title}  →  ${chunk.sourcePath}`,
      );
    }
    console.log();

    // ── Build versioned knowledge DB ─────────────────────────
    const db: KnowledgeDB = {
      version: KNOWLEDGE_VERSION,
      ingested_at: new Date().toISOString(),
      source_dir: "website/docs",
      chunk_count: chunks.length,
      chunks,
    };

    // ── Atomic write ─────────────────────────────────────────
    // Write to a temp file first, then rename.
    // fs.renameSync is atomic on the same filesystem, so readers
    // of knowledge-db.json never see a partially-written file.
    // This ensures re-ingest replaces the previous version cleanly.
    const dbPath = path.join(__dirname, "../../knowledge-db.json");
    const tmpPath = dbPath + ".tmp";

    fs.writeFileSync(tmpPath, JSON.stringify(db, null, 2));
    fs.renameSync(tmpPath, dbPath);

    console.log(`[Ingest] Knowledge DB written to ${dbPath}`);
    console.log(`[Ingest] Done.`);
  } catch (error) {
    console.error("[Ingest] Ingestion failed:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
