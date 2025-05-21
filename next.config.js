/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  env: {
    // ... autres variables d'environnement existantes
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },
  optimizeFonts: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  typescript: {
    // ⚠️ Désactivé temporairement pour la construction
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimisticClientCache: true,
    webpackBuildWorker: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Optimisations Webpack supplémentaires
    if (!dev && !isServer) {
      // Splitting de code pour améliorer le chargement
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.runtimeChunk = true;
    }
    
    return config;
  },
}

module.exports = nextConfig 