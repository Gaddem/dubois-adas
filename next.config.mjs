/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                // Rend le site statique
  images: { unoptimized: true },   // Évite les problèmes avec next/image
};

export default nextConfig;