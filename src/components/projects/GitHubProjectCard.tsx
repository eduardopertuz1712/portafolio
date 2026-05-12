"use client"

import { Star, GitBranch } from "@phosphor-icons/react";
import Link from "next/link";

interface GitHubProjectCardProps {
  title: string;
  description: string;
  language: string;
  stars: number;
  githubUrl: string;
  updatedAt: string;
}

export default function GitHubProjectCard({
  title,
  description,
  language,
  stars,
  githubUrl,
  updatedAt,
}: GitHubProjectCardProps) {
  const formattedDate = new Date(updatedAt).toLocaleDateString("es-ES", {
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
      <div className="group h-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg/10 hover:-translate-y-2 transform transition-all duration-300 cursor-pointer flex flex-col">

        {/* Header con lenguaje */}
        <div className="bg-linear-to-r from-cyan-400/10 to-violet-400/10 dark:from-cyan-400/20 dark:to-violet-400/20 p-6 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white line-clamp-2 group-hover:text-cyan-500 transition">
            {title}
          </h3>
          {language && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500" />
              {language}
            </p>
          )}
        </div>

        {/* Descripción */}
        <div className="p-6 flex-1">
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer con stats */}
        <div className="px-6 pb-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              {stars > 0 && (
                <span className="flex items-center gap-1 hover:text-yellow-500 transition">
                  <Star size={14} weight="fill" />
                  {stars}
                </span>
              )}
              <span className="flex items-center gap-1">
                <GitBranch size={14} />
                Ver en GitHub
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-500">
              {formattedDate}
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}
