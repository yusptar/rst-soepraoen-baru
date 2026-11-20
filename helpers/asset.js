// Tambahkan basePath (mis. "/rst-soepraoen") ke path file di folder public.
// <Link> dan router.push() sudah otomatis, jadi JANGAN dibungkus dengan ini.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (p) => (p && p.startsWith("/") ? `${BASE_PATH}${p}` : p);
