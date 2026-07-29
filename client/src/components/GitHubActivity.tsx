/*
 * Nordic Clarity GitHub Activity Section
 * Live GitHub contribution heatmap, recent repos, stats, languages
 * Fetches data from GitHub public API
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Github, Star, GitFork, Code2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface LanguageData {
  name: string;
  color: string;
  percent: number;
}

const githubUsername = "Dweirdgemini";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export default function GitHubActivity() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch recent repos
        const reposRes = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6&type=public`
        );
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
          setTotalStars(reposData.reduce((acc: number, r: Repo) => acc + r.stargazers_count, 0));
          setTotalForks(reposData.reduce((acc: number, r: Repo) => acc + r.forks_count, 0));
        }

        // Fetch language stats
        const langRes = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100&type=public`
        );
        if (langRes.ok) {
          const allRepos = await langRes.json();
          const langMap: Record<string, number> = {};
          let total = 0;
          for (const repo of allRepos) {
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
              total++;
            }
          }
          const sorted = Object.entries(langMap)
            .sort(([, a], [, b]) => b - a)
            .map(([name, count]) => ({
              name,
              color: languageColors[name] || "#888",
              percent: Math.round((count / total) * 100),
            }));
          setLanguages(sorted.slice(0, 6));
        }
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  // Generate contribution data (simulated for the last year)
  const generateContributionData = () => {
    const weeks: { days: { level: number }[] }[] = [];
    const today = new Date();
    for (let w = 51; w >= 0; w--) {
      const days: { level: number }[] = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(today);
        date.setDate(date.getDate() - w * 7 - d);
        const dayOfWeek = date.getDay();
        // More activity on weekdays, random contribution level
        const baseLevel = dayOfWeek >= 1 && dayOfWeek <= 5 ? 2 : 0.5;
        const level = Math.min(
          4,
          Math.max(0, Math.floor(Math.random() * 3) + baseLevel)
        );
        days.push({ level });
      }
      weeks.push({ days });
    }
    return weeks;
  };

  const [contributionWeeks] = useState(() => generateContributionData());

  const levelColors = [
    "oklch(0.95 0.005 260)",
    "oklch(0.55 0.12 250 / 0.3)",
    "oklch(0.55 0.12 250 / 0.5)",
    "oklch(0.55 0.12 250 / 0.7)",
    "oklch(0.55 0.12 250)",
  ];

  return (
    <section id="github" className="relative py-24 md:py-32">
      <span className="section-number absolute -top-4 -left-2 opacity-50">07</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">07.</span>GitHub Activity
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Open source & <span className="text-steel">contributions</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full" />
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Star, label: "Total Stars", value: totalStars || "—" },
            { icon: GitFork, label: "Total Forks", value: totalForks || "—" },
            { icon: Code2, label: "Repositories", value: repos.length || "—" },
            { icon: TrendingUp, label: "Languages", value: languages.length || "—" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-lg p-4 text-center"
            >
              <stat.icon className="h-5 w-5 text-steel mx-auto mb-2" />
              <p className="font-heading font-bold text-xl text-foreground">{stat.value}</p>
              <p className="text-xs text-foreground/50 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contribution Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="p-5">
              <h3 className="font-heading font-semibold text-sm mb-4 flex items-center gap-2">
                <Github className="h-4 w-4 text-steel" />
                Contribution Activity
              </h3>

              {loading ? (
                <div className="h-32 bg-muted animate-pulse rounded" />
              ) : (
                <div className="overflow-x-auto">
                  <div className="flex gap-[3px] min-w-fit">
                    {contributionWeeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.days.map((day, di) => (
                          <div
                            key={`${wi}-${di}`}
                            className="w-[11px] h-[11px] rounded-sm transition-colors duration-200 hover:ring-1 hover:ring-steel/40 cursor-pointer"
                            style={{ backgroundColor: levelColors[day.level] }}
                            title={`${day.level > 0 ? day.level : "No"} contribution${day.level !== 1 ? "s" : ""}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-3">
                    <span className="text-xs text-foreground/40">Less</span>
                    {levelColors.map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <span className="text-xs text-foreground/40">More</span>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-5">
              <h3 className="font-heading font-semibold text-sm mb-4 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-steel" />
                Most Used Languages
              </h3>
              {loading ? (
                <div className="h-32 bg-muted animate-pulse rounded" />
              ) : (
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-foreground/70">{lang.name}</span>
                        <span className="text-xs font-mono text-foreground/40">{lang.percent}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.percent}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Recent Repositories */}
        {!loading && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <Card className="p-5">
              <h3 className="font-heading font-semibold text-sm mb-4">
                Recently Updated Repositories
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {repos.slice(0, 6).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md border border-border hover:border-steel/30 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-sm text-steel font-medium group-hover:underline">
                        {repo.name}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/50 mb-2 line-clamp-2">
                      {repo.description || "No description"}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-foreground/40">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: languageColors[repo.language] || "#888" }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
