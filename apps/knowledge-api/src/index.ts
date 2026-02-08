import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { queryHandler } from "./api/query";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.post("/knowledge/query", queryHandler);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Knowledge API running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `Ollama Host: ${process.env.OLLAMA_HOST || "http://localhost:11434"}`,
  );
});
