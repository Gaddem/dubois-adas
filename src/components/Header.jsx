import Image from "next/image";
import logo from "@/assets/logo.png"; // Remplace par le chemin réel de ton logo
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 flex justify-center items-center bg-white shadow-sm">
      <Link href="/">
        <Image src={logo} alt="Etablissements Dubois" width={420} height={20}   style={{ objectFit: 'contain' }} />
      </Link>
    </header>
  );
}
