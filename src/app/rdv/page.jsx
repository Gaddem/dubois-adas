"use client";

import "@/styles/globals.css";
import { useEffect } from "react";

export default function RDV() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js'; // ✅ script officiel
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Prendre rendez-vous</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Choisissez un créneau pour qu’un technicien des Etablissements Dubois
        intervienne à votre domicile.
      </p>

        <div
        className="calendly-inline-widget w-full max-w-xl h-[700px]"
        data-url="https://calendly.com/kevin-azur-34/30min" // ✅ URL de ton événement
      />
    </main>
  );
}
