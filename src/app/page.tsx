import { Suspense } from "react";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import ProjectList from "@/components/projects/ProjectList";

function ProjectListFallback() {
  return (
    <section className="py-20">
      <div className="rounded-4xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xl/10 p-10">
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-1/3 bg-slate-300 dark:bg-slate-700 rounded-xl" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-60 rounded-3xl bg-slate-200 dark:bg-slate-800" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />

      <Skills />

      <Suspense fallback={<ProjectListFallback />}>
        <ProjectList />
      </Suspense>
    </main>
  );
}