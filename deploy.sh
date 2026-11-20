#!/bin/bash
# Build & (re)start rst-soepraoen di https://rssoepraoen.com/rst-soepraoen
set -e
cd "$(dirname "$0")"

export NEXT_PUBLIC_BASE_PATH=

git pull            # aktifkan kalau kode diambil dari Git
npm ci
npm run build
pm2 startOrReload ecosystem.config.js --update-env
pm2 save
echo "Selesai. Cek: curl -I http://127.0.0.1:3000/rst-soepraoen"
