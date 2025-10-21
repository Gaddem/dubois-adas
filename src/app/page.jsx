import '@/styles/globals.css';
import Image from 'next/image';
import History from "@/assets/history.png";
import Adas from "@/assets/adas.png";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Etablissements Dubois Lattes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Depuis plus de 50 ans, les Etablissements Dubois œuvrent au service de l’automobile dans la région, avec passion, rigueur et innovation.
        </p>
      </header>

      <section className="max-w-3xl text-left space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-gray-800">
          Notre histoire
        </h2>
        <Image src={History} alt="Etablissements Dubois" width={400} height={20}   style={{ width:"80%" }} />
        <p>
          Fondée à Lattes, l’entreprise s’est d’abord spécialisée dans le commerce et la distribution de pièces automobiles et accessoires. Au fil des années, les Etablissements Dubois ont bâti une solide réputation sur la qualité de leurs produits, le respect des délais et un service client irréprochable.
        </p>
        <p>
          Implantée dans l’agglomération de Montpellier, l’équipe a su évoluer avec les technologies automobiles : aujourd’hui, elle met son expertise au service des systèmes les plus modernes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          Notre mission
        </h2>
        <Image src={Adas} alt="Etablissements Dubois" width={400} height={20}   style={{ width:"80%" }} />
        <p>
          Chez Dubois, nous avons une ambition : accompagner nos clients dans la transition vers des véhicules équipés de systèmes avancés d’aide à la conduite (ADAS). Nous intervenons directement au garage pour diagnostiquer, calibrer, réparer ou optimiser vos équipements ADAS.
        </p>
        <p>
          Notre engagement : garantir votre sécurité et la fiabilité de vos systèmes ADAS, tout en vous offrant un service rapide, proche et personnalisé.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          Pourquoi nous choisir ?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Intervention au garage.</li>
          <li>Techniciens formés sur les dernières technologies ADAS.</li>
          <li>Service rapide, transparence et qualité garantie.</li>
        </ul>
      </section>

      <section className="text-center">
        <Link href="/rdv" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Prendre rendez-vous
        </Link>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} Etablissements Dubois – Tous droits réservés.
      </footer>
    </main>
  );
}