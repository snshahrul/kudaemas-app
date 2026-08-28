/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // If deploying to Netlify or static hosting
    // Or specify domains if using Vercel
    domains: ['localhost', 'kudaemas-app.vercel.app'],
  },
};

module.exports = nextConfig;