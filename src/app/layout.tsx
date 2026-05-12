import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Providers from "@/components/providers/Providers";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackgroundEffects from "@/components/ui/BackgroundEffects";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de Eduardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 transition-colors duration-300">
        <Providers>
          <ScrollProgress />

          <BackgroundEffects />

          <Navbar />

          <main>{children}</main>

          <Footer />

          <Toaster
            position="top-right"
            richColors
          />
        </Providers>
      </body>
    </html>
  );
}