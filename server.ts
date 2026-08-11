import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for the Career Advisor Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body; // array of { role: 'user' | 'model', text: string }

    const ai = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const chat = ai.chats.create({
      model: "gemini-3.1-pro-preview",
      config: {
        systemInstruction: "Jesteś profesjonalnym, empatycznym Doradcą Zawodowym wspierającym osoby z niepełnosprawnościami. Twoim zadaniem jest pomoc w ulepszaniu CV, przygotowywaniu do rozmów kwalifikacyjnych, udzielanie porad na temat praw pracowniczych (np. orzeczenia, PFRON, SODiR) oraz wspieranie w trudnościach na rynku pracy. Bądź uprzejmy, zwięzły i pomocny. Pamiętaj, że reprezentujesz portal nowypracownik.pl",
      }
    });

    // Replay previous messages
    if (messages && messages.length > 1) {
      for (let i = 0; i < messages.length - 1; i++) {
         const m = messages[i];
         // We can't strictly replay messages in the current simple chat API if it strictly expects new turns, 
         // but we can pass the whole history as `contents`.
         // Better yet, just use generateContent for standard conversation history
      }
    }

    // Let's use generateContent for simplicity and pass the conversation history properly
    const contents = messages.map((m: any) => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: "Jesteś profesjonalnym, empatycznym Doradcą Zawodowym wspierającym osoby z niepełnosprawnościami na polskim rynku pracy. Twoim zadaniem jest pomoc w ulepszaniu CV, przygotowywaniu do rozmów kwalifikacyjnych, udzielanie porad na temat praw pracowniczych (orzeczenia o stopniu niepełnosprawności, PFRON) oraz wspieranie w trudnościach. Bądź uprzejmy, merytoryczny i zwięzły. Reprezentujesz portal nowypracownik.pl",
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Przepraszamy, wystąpił błąd podczas łączenia z Doradcą. Spróbuj ponownie później." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
