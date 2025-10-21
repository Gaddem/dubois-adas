/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // utile si tu utilises next/image
  basePath: '/dubois-adas', // <-- change "mon-site" par le nom de ton repo
};

export default nextConfig;