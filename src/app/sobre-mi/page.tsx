export default function SobreMiPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20 text-slate-950 dark:text-slate-100">

      <div className="rounded-[2rem] bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl/10 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Sobre mí
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* QUIEN SOY */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-4">
              Quién soy
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Soy desarrollador Full Stack enfocado en crear
              interfaces modernas, rápidas y responsivas
              utilizando tecnologías como Next.js,
              React y Tailwind CSS.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              Me apasiona el desarrollo web y disfruto
              aprender nuevas tecnologías para seguir
              mejorando mis habilidades como desarrollador.
            </p>

          </div>

          {/* TECNOLOGIAS */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-4">
              Tecnologías
            </h2>

            <div className="grid grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">

              <span>• Next.js</span>
              <span>• React</span>
              <span>• TypeScript</span>
              <span>• JavaScript</span>
              <span>• Tailwind CSS</span>
              <span>• Python</span>
              <span>• MySQL</span>
              <span>• GitHub</span>

            </div>

          </div>

          {/* EXPERIENCIA */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-4">
              Experiencia
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              He participado en proyectos colaborativos
              como Catalyst, Kiosko y E-commerce,
              desarrollados durante mi formación en Riwi.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              Actualmente continúo adquiriendo experiencia
              práctica en desarrollo frontend y backend.
            </p>

          </div>

          {/* HABILIDADES */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-4">
              Habilidades
            </h2>

            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-sm">
                Trabajo en equipo
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-sm">
                Adaptabilidad
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-sm">
                Comunicación efectiva
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-sm">
                Resiliencia
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-sm">
                Perseverancia
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}