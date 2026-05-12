"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 dark:border-white/10 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50">

      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold text-slate-950 dark:text-slate-100">
          Eduardo
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-slate-950 dark:text-slate-100">
          <li>
            <Link href="/" className="hover:text-cyan-500 transition">
              Inicio
            </Link>
          </li>

          <li>
            <Link href="/sobre-mi" className="hover:text-cyan-500 transition">
              Sobre mí
            </Link>
          </li>

          <li>
            <Link href="/proyectos" className="hover:text-cyan-500 transition">
              Proyectos
            </Link>
          </li>

          <li>
            <Link href="/contacto" className="hover:text-cyan-500 transition">
              Contacto
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <List size={30} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">

          <ul className="flex flex-col p-4 gap-4 text-slate-950 dark:text-slate-100">

            <li>
              <Link href="/" className="hover:text-cyan-500 transition">
                Inicio
              </Link>
            </li>

            <li>
              <Link href="/sobre-mi" className="hover:text-cyan-500 transition">
                Sobre mí
              </Link>
            </li>

            <li>
              <Link href="/proyectos" className="hover:text-cyan-500 transition">
                Proyectos
              </Link>
            </li>

            <li>
              <Link href="/contacto" className="hover:text-cyan-500 transition">
                Contacto
              </Link>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
}