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

    app.get("/api/github-projects", async (_req, res) => {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return res.status(500).json({ error: "GITHUB_TOKEN not set on server" });
    }

    try {
      // Personal repos
      const personalRes = await fetch(
        `https://api.github.com/users/Dweirdgemini/repos?sort=updated&per_page=10&type=owner`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      // Org repos (private + public), explicitly from ballerprofile
      const orgRes = await fetch(
        `https://api.github.com/orgs/ballerprofile/repos?sort=updated&per_page=10&type=all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!personalRes.ok || !orgRes.ok) {
        const personalText = !personalRes.ok ? await personalRes.text() : null;
        const orgText = !orgRes.ok ? await orgRes.text() : null;
        console.error("GitHub repos error:", { personalText, orgText });
        return res.status(502).json({ error: "GitHub API request failed" });
      }

      const personalRepos = await personalRes.json();
      const orgRepos = await orgRes.json();

      const allRepos = [...personalRepos, ...orgRepos];

      const cleaned = allRepos
        .map((r: any) => ({
          name: r.name,
          description: r.description,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          html_url: r.html_url,
          updated_at: r.updated_at,
          private: r.private,
          org: r.owner?.login !== "Dweirdgemini" ? r.owner?.login : null,
        }))
        .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 6);

      res.json(cleaned);
    } catch (err) {
      console.error("GitHub projects fetch error:", err);
      res.status(500).json({ error: "Failed to fetch projects" });
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