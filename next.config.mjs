/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                // Rend le site statique
  images: { unoptimized: true },   // Évite les problèmes avec next/image
  basePath: '/dubois-adas',           // 👈 nom EXACT de ton repo GitHub
  assetPrefix: '/dubois-adas/',       // 👈 pour les assets CSS/JS
};

export default nextConfig;