// Konfigurasi PM2 untuk server Ubuntu: jalankan dengan  pm2 start ecosystem.config.js
// PENTING: NEXT_PUBLIC_BASE_PATH harus ada saat `next build` DAN saat `next start`.
module.exports = {
  apps: [
    {
      name: "rst-soepraoen",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_BASE_PATH: "",
      },
    },
  ],
};
