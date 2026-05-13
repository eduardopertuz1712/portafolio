"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

import {
  House,
  User,
  Folder,
  Envelope,
  List,
  X,
} from "@phosphor-icons/react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 md:hidden bg-cyan-500 text-white p-3 rounded-xl shadow-lg"
      >
        {open ? <X size={24} /> : <List size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72
          bg-white dark:bg-slate-950
          border-r border-slate-200 dark:border-white/10
          backdrop-blur-xl
          z-50
          p-8
          flex flex-col
          transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
        `}
      >
        {/* Profile */}
        <div className="flex flex-col items-center">
          
          <img
            src="/images/profile/profile.png"
            alt="Foto de Eduardo"
            className="
              w-32
              h-32
              rounded-full
              object-cover
              border-4
              border-cyan-500
              shadow-xl
            "
          />

          <h1 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
            Eduardo
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Frontend Developer
          </p>

        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 mt-16">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-4
              p-4 rounded-2xl
              text-slate-700 dark:text-slate-300
              hover:bg-cyan-500 hover:text-white
              transition
            "
          >
            <House size={22} />
            Inicio
          </Link>

          <Link
            href="/sobre-mi"
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-4
              p-4 rounded-2xl
              text-slate-700 dark:text-slate-300
              hover:bg-cyan-500 hover:text-white
              transition
            "
          >
            <User size={22} />
            Sobre mí
          </Link>

          <Link
            href="/proyectos"
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-4
              p-4 rounded-2xl
              text-slate-700 dark:text-slate-300
              hover:bg-cyan-500 hover:text-white
              transition
            "
          >
            <Folder size={22} />
            Proyectos
          </Link>

          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-4
              p-4 rounded-2xl
              text-slate-700 dark:text-slate-300
              hover:bg-cyan-500 hover:text-white
              transition
            "
          >
            <Envelope size={22} />
            Contacto
          </Link>

        </nav>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between">

          <ThemeToggle />

          <span className="text-xs text-slate-400">
            © Eduardo
          </span>

        </div>

      </aside>
    </>
  );
}