import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // --- API routes go before the static/catch-all handlers ---
  app.get("/api/github-contributions", async (_req, res) => {
    const username = "Dweirdgemini";
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return res.status(500).json({ error: "GITHUB_TOKEN not set on server" });
    }

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    try {
      const ghRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      if (!ghRes.ok) {
        const text = await ghRes.text();
        console.error("GitHub GraphQL error:", ghRes.status, text);
        return res.status(502).json({ error: "GitHub API request failed" });
      }

      const data = await ghRes.json();
      const weeks = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;

      if (!weeks) {
        console.error("Unexpected GitHub response shape:", JSON.stringify(data));
        return res.status(502).json({ error: "Unexpected response from GitHub" });
      }

      res.json({ weeks });
    } catch (err) {
      console.error("GitHub contributions fetch error:", err);
      res.status(500).json({ error: "Failed to fetch contributions" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all remaining routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3050;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
