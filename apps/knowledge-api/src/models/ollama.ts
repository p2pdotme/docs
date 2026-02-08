import axios from "axios";
import { LLMProvider, LLMGenerateInput } from "./gateway";

export class OllamaProvider implements LLMProvider {
  private baseUrl: string;
  private model: string;

  constructor(
    baseUrl: string = "http://localhost:11434",
    model: string = "llama3.1",
  ) {
    this.baseUrl = baseUrl;
    this.model = model;
  }

  async generate(input: {
    query: string;
    context: string;
    stream?: boolean;
  }): Promise<string> {
    // ── System prompt ──────────────────────────────────────────
    // The model MUST answer only from the provided context.
    // If the context doesn't cover the question, it must say so
    // explicitly rather than guessing or using outside knowledge.
    const prompt = `You are a documentation assistant for the P2P Foundation.
Answer the user's question based ONLY on the following documentation context.
If the answer is not contained in the context below, respond with exactly:
"This topic is not covered in the current documentation."
Do NOT guess, speculate, or use any knowledge outside of the provided context.

Context:
${input.context}

Question:
${input.query}
`;

    try {
      const response = await axios.post(`${this.baseUrl}/api/generate`, {
        model: this.model,
        prompt: prompt,
        stream: false, // TODO: Support streaming
      });

      return response.data.response;
    } catch (error) {
      console.error("Ollama generation failed:", error);
      throw new Error("Failed to generate response from Ollama");
    }
  }
}
