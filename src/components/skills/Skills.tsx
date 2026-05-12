import skills from "@/data/skills";
import Reveal from "../ui/Reveal";

export default function Skills() {
  return (
    <Reveal>

    <section className="py-20">

      <div className="rounded-[2rem] bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl/10 p-10">

        <h2 className="text-4xl font-bold mb-10 text-slate-950 dark:text-slate-100">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-slate-100 hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>

  </Reveal>
  );
}