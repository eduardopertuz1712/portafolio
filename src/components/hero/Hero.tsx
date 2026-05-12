"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
} from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center text-slate-950 dark:text-slate-100">

      <div className="grid md:grid-cols-2 gap-10 items-center w-full py-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] bg-white/85 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl/10 p-10"
        >

          <p className="text-cyan-500 mb-2 font-medium">
            Hola, soy
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Eduardo Pertuz
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-6 leading-8">
            Desarrollador Frontend especializado en Next.js, React y Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link href="/proyectos">
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition">
                Ver proyectos
              </button>
            </Link>

            <Link href="/cv">
              <button className="border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-slate-100 px-6 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition">
                Descargar CV
              </button>
            </Link>

          </div>

          <div className="flex gap-4 mt-8">

            <a
              href="https://github.com/eduardopertuz1712"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              <GithubLogo size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/edupertuz1712/"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              <LinkedinLogo size={20} />
            </a>

            <a
              href="mailto:pertuzvillegaseduardoisaac@gmail.com"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              <Envelope size={20} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-300/40 shadow-2xl/10 mx-auto"
        >

          <Image
            src="/images/profile/profile.png"
            alt="Eduardo"
            fill
            className="object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}