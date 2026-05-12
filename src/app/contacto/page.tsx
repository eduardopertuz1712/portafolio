"use client";

import { toast } from "sonner";
import { useState } from "react";

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      toast.success("Mensaje enviado correctamente 🚀");

      setFormData({
        nombre: "",
        correo: "",
        mensaje: "",
      });

    } catch (error) {
      console.log(error);

      toast.error("Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-slate-950 dark:text-slate-100">

      <div className="rounded-[2rem] bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl/10 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Contacto
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="block mb-2 text-slate-950 dark:text-slate-100">
              Nombre
            </label>

            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none text-slate-950 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-950 dark:text-slate-100">
              Correo
            </label>

            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none text-slate-950 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-950 dark:text-slate-100">
              Mensaje
            </label>

            <textarea
              rows={6}
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none text-slate-950 dark:text-slate-100"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

        </form>

      </div>

    </main>
  );
}