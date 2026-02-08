import { z } from "zod";

export const KnowledgeQuerySchema = z.object({
  query: z.string().min(1),
  domains: z.array(z.enum(["docs:whitepaper", "docs:sdk"])),
  app_context: z.string(),
  audience: z.enum(["public", "internal"]).optional().default("public"),
  stream: z.boolean().optional().default(false),
});

export type KnowledgeQueryRequest = z.infer<typeof KnowledgeQuerySchema>;
