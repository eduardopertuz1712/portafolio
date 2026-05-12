export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
  updated_at: string;
  fork: boolean;
}

export interface ProjectFromGitHub {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  stars: number;
  updatedAt: string;
}

export async function fetchGitHubRepos(username: string): Promise<ProjectFromGitHub[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate cada hora
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filtrar repositorios (excluir forks)
    const filtered = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 16); // Mostrar solo los 6 más recientes

    // Mapear a estructura de proyecto
    return filtered.map((repo) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || "Sin descripción",
      technologies: repo.language ? [repo.language] : [],
      github: repo.html_url,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
