/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'BakerCloud Kasm Repository',
    description: 'UN-official store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://c0ryb4k3r.github.io/kasm-registry/',
    contactUrl: 'https://none.com',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/release',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
