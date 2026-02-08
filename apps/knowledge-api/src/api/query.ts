import { Request, Response } from "express";
import { KnowledgeQuerySchema } from "../schemas/knowledge";
import { searchChunks } from "../retrieval/search";
import { rankChunks } from "../retrieval/rank";
import { ModelGateway } from "../models/gateway";
import { OllamaProvider } from "../models/ollama";

// Initialize Model Gateway
const ollamaUrl = process.env.OLLAMA_HOST || "http://localhost:11434";
const modelName = process.env.LLM_MODEL || "llama3.1";
const gateway = new ModelGateway(new OllamaProvider(ollamaUrl, modelName));

/**
 * Standard response when no matching documentation is found.
 * Used both as a direct API response and as the fallback the LLM
 * is instructed to produce when context doesn't cover the question.
 */
const NOT_FOUND_ANSWER =
  "This topic is not covered in the current documentation. " +
  "Please check the docs site directly or rephrase your question.";

export const queryHandler = async (req: Request, res: Response) => {
  try {
    // 1. Validate Request
    const body = KnowledgeQuerySchema.parse(req.body);
    const { query, domains, app_context } = body;

    console.log(
      `[Query] App: ${app_context} | Domains: ${domains.join(",")} | Query: ${query}`,
    );

    // 2. Retrieval — search the canonical knowledge DB
    const rawChunks = await searchChunks(query, domains);
    if (rawChunks.length === 0) {
      return res.json({
        answer: NOT_FOUND_ANSWER,
        references: [],
        model: modelName,
        confidence: 0,
      });
    }

    // 3. Ranking — score and limit to top results
    const rankedChunks = rankChunks(rawChunks, query);

    // 4. Context Assembly
    //    Each chunk maps 1:1 to a real Docusaurus page (sourcePath).
    //    The LLM prompt (in ollama.ts) instructs the model to answer
    //    ONLY from this context — no outside knowledge.
    const context = rankedChunks
      .map((c) => `[${c.title}](${c.sourcePath})\n${c.content}`)
      .join("\n\n---\n\n");

    // 5. Generation — LLM answers strictly from retrieved context
    const answer = await gateway.generate({
      query,
      context,
      stream: false,
    });

    // 6. Response — references point to real Docusaurus doc pages
    const references = rankedChunks.map((c) => ({
      title: c.title,
      url: c.sourcePath,
    }));

    res.json({
      answer,
      references,
      model: modelName,
      confidence: rankedChunks.length > 0 ? 0.9 : 0, // Placeholder
    });
  } catch (error: any) {
    console.error("[Query] Failed:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
