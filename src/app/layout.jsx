import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "Dubois ADAS",
  description: "Site vitrine Dubois ADAS Montpellier/Lattes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-800 font-sans h-screen overflow-hidden">
        {/* Header fixe */}
        <Header />

        {/* Contenu scrollable */}
        <main className="mt-0 h-[calc(100vh-96px)] overflow-auto pb-15">
          {children}
        </main>
      </body>
    </html>
  );
}
