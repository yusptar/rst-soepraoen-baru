/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const isDev = process.env.NODE_ENV !== "production";

const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://images.unsplash.com https://robohash.org https://rssoepraoen.com https://www.rssoepraoen.com ${isDev ? "http://localhost:*" : ""};
  font-src 'self' data:;
  connect-src 'self' https://rssoepraoen.com https://www.rssoepraoen.com ${isDev ? "http://localhost:* ws://localhost:*" : ""};
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "localhost",
      "robohash.org",
      "rssoepraoen.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = {
  images: {
    minimumCacheTTL: 2678400,          // 31 hari, bukan 60 detik
    formats: ['image/webp'],           // jangan tambah AVIF (jumlah varian jadi dobel)
    deviceSizes: [640, 828, 1200, 1920], // default ada 8 ukuran, kurangi
    imageSizes: [64, 128, 256],
    // ...remotePatterns/domains yang sudah ada tetap dipakai
  },
};