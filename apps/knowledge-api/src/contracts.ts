/**
 * Local type definitions for the knowledge system.
 *
 * Source of truth: packages/contracts/knowledge.ts
 * Keep these in sync with the shared contracts package.
 *
 * Why a local copy?
 *   The shared contracts live outside this package's rootDir (src/).
 *   TypeScript's rootDir check applies even to `import type` paths,
 *   so importing directly from ../../../../packages/contracts/ causes
 *   TS6059 errors.  Since every export is a pure type/interface
 *   (zero runtime footprint), a local barrel avoids the issue without
 *   adding build tooling or new dependencies.
 */

export type KnowledgeDomain = "docs:whitepaper" | "docs:sdk";

/**
 * A single canonical documentation chunk.
 * Each chunk = one file in website/docs/ (the same files Docusaurus renders).
 */
export interface KnowledgeChunk {
  /** Full markdown body (frontmatter stripped) */
  content: string;
  /** Knowledge domain, e.g. "docs:whitepaper" */
  domain: KnowledgeDomain;
  /** Docusaurus URL path, e.g. "/whitepaper/abstract" */
  sourcePath: string;
  /** Human-readable title from frontmatter */
  title: string;
  /** Sort order derived from filename prefix / sidebar_position */
  order: number;
  /** SHA-256 hash of content for change detection */
  content_hash: string;
  /** ISO-8601 timestamp of last ingestion */
  last_updated: string;
}

/**
 * Versioned knowledge database.
 * Written atomically during ingestion; read by the retrieval layer.
 */
export interface KnowledgeDB {
  /** Version identifier, e.g. "whitepaper-v1" */
  version: string;
  /** ISO-8601 timestamp of when this DB was produced */
  ingested_at: string;
  /** Relative path that was ingested */
  source_dir: string;
  /** Total chunk count (for quick sanity checks) */
  chunk_count: number;
  /** The chunks themselves */
  chunks: KnowledgeChunk[];
}

export interface KnowledgeQueryRequest {
  query: string;
  domains: KnowledgeDomain[];
  app_context: string;
  audience?: "public" | "internal";
  stream?: boolean;
}

export interface KnowledgeReference {
  title: string;
  url: string;
}

export interface KnowledgeQueryResponse {
  answer: string;
  references: KnowledgeReference[];
  model: string;
  confidence: number;
}
