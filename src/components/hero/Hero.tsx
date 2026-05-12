"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
} from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        md:px-16
        lg:px-24
        text-slate-950
        dark:text-slate-100
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-5xl
          rounded-[40px]
          bg-white/80
          dark:bg-slate-950/80
          backdrop-blur-xl
          border
          border-slate-200
          dark:border-slate-800
          shadow-2xl
          p-10
          md:p-16
        "
      >
        <p className="text-cyan-500 text-lg md:text-xl font-medium mb-4">
          Hola, soy
        </p>

        <h1
          className="
            text-3xl
            md:text-6xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          Eduardo
          <br />
          Pertuz
        </h1>

        <p
          className="
            mt-8
            text-lg
            md:text-2xl
            text-slate-600
            dark:text-slate-400
            leading-9
            max-w-3xl
          "
        >
          Desarrollador Frontend especializado en
          Next.js, React y Tailwind CSS.
          Me enfoco en crear experiencias modernas,
          interactivas y visualmente atractivas.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-10">

          <Link href="/proyectos">
            <button
              className="
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
                transition
                shadow-lg
              "
            >
              Ver proyectos
            </button>
          </Link>

          <Link href="/cv-eduardo-pertuz.pdf" download >
            <button
              className="
                border
                border-slate-300
                dark:border-slate-700
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
                hover:bg-slate-100
                dark:hover:bg-slate-900
                transition
              "
            >
              Descargar CV
            </button>
          </Link>

        </div>

        {/* Socials */}
        <div className="flex gap-5 mt-10">

          <a
            href="https://github.com/eduardopertuz1712"
            target="_blank"
            className="
              p-4
              rounded-2xl
              bg-slate-100
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              hover:scale-110
              hover:bg-cyan-500
              hover:text-white
              transition
            "
          >
            <GithubLogo size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/edupertuz1712/"
            target="_blank"
            className="
              p-4
              rounded-2xl
              bg-slate-100
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              hover:scale-110
              hover:bg-cyan-500
              hover:text-white
              transition
            "
          >
            <LinkedinLogo size={24} />
          </a>

          <a
            href="mailto:pertuzvillegaseduardoisaac@gmail.com"
            className="
              p-4
              rounded-2xl
              bg-slate-100
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              hover:scale-110
              hover:bg-cyan-500
              hover:text-white
              transition
            "
          >
            <Envelope size={24} />
          </a>

        </div>
      </motion.div>
    </section>
  );
}