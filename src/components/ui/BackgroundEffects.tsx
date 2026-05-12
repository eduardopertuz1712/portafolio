"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute top-[-80px] left-1/4 w-80 h-80 bg-cyan-300/10 rounded-full blur-[120px]" />

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-100px] right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[120px]" />

    </div>
  );
}