import { fetchGitHubRepos } from "@/lib/github";
import Reveal from "@/components/ui/Reveal";
import GitHubProjectCard from "./GitHubProjectCard";

export default async function GitHubProjectList() {
  const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "tu-usuario-github";

  let projects = [] as Awaited<ReturnType<typeof fetchGitHubRepos>>;
  let error: string | null = null;

  if (GITHUB_USERNAME === "tu-usuario-github") {
    error = "No has configurado tu usuario de GitHub. Añade NEXT_PUBLIC_GITHUB_USERNAME a tu .env.local.";
  } else {
    try {
      projects = await fetchGitHubRepos(GITHUB_USERNAME);

      if (projects.length === 0) {
        error = "No se encontraron repositorios públicos. Verifica tu usuario de GitHub o revisa si tus repositorios son forks.";
      }
    } catch (err) {
      error = "No se pudieron cargar los proyectos desde GitHub. Por favor, intenta más tarde.";
      console.error("Error fetching GitHub projects:", err);
    }
  }

  return (
    <Reveal>
      <section className="py-20">
        <div className="rounded-4xl bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl/10 p-10">

          <h1 className="text-5xl font-bold mb-3 text-slate-950 dark:text-slate-100">
            Mis Proyectos
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            Mis últimos proyectos públicos en GitHub
          </p>

          {error ? (
            <div className="rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 p-6 flex gap-4">
              <span className="text-2xl leading-none">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">
                  Información
                </h3>
                <p className="text-amber-800 dark:text-amber-300 text-sm">
                  {error}
                </p>
                <p className="text-amber-700 dark:text-amber-400 text-sm mt-2">
                  📝 Configura tu username en las variables de entorno: <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded text-xs">NEXT_PUBLIC_GITHUB_USERNAME</code>
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <GitHubProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  language={project.technologies[0] || ""}
                  stars={project.stars}
                  githubUrl={project.github}
                  updatedAt={project.updatedAt}
                />
              ))}
            </div>
          )}

        </div>
      </section>
    </Reveal>
  );
}
