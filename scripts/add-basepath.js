/**
 * Codemod: tambahkan basePath ke semua path aset lokal (/assets/x.png, /logo.png, /x.pdf, ...)
 *
 *   src="/a.png"        ->  src={asset("/a.png")}
 *   image: "/a.png"     ->  image: asset("/a.png")
 *
 * Dilewati:
 *   - nilai `link:` / `href=`  (dipakai oleh <Link>, yang sudah otomatis menambah basePath)
 *   - path di dalam className / string lain (mis. bg-[url('/x.png')])  -> perbaiki manual
 *   - baris komentar
 *
 * Pemakaian (dari root proyek):  node scripts/add-basepath.js
 * Aman dijalankan ulang (path yang sudah dibungkus asset() tidak dibungkus lagi).
 */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIRS = ["pages", "components"];
const EXT = "png|jpe?g|webp|svg|gif|ico|pdf|mp4|webm";
const HELPER = path.join(ROOT, "helpers", "asset.js");

// "..."/'...' path aset yang berdiri sendiri sebagai string
const LIT = new RegExp(`(["'])(\\/[A-Za-z0-9_./ %()\\-]+\\.(?:${EXT}))\\1`, "gi");

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (/\.(js|jsx|ts|tsx)$/.test(f)) out.push(p);
  }
  return out;
}

let totalFiles = 0, totalRepl = 0;
const skipped = [];

for (const d of DIRS) {
  if (!fs.existsSync(path.join(ROOT, d))) continue;
  for (const file of walk(path.join(ROOT, d))) {
    const src = fs.readFileSync(file, "utf8");
    let count = 0;

    const lines = src.split("\n").map((line, i) => {
      const t = line.trim();
      if (t.startsWith("//") || t.startsWith("{/*") || t.startsWith("*")) return line;

      return line.replace(LIT, (m, q, p, offset) => {
        const before = line.slice(0, offset);
        // sudah dibungkus
        if (/asset\(\s*$/.test(before)) return m;
        // dipakai <Link> -> biarkan
        if (/\b(link|href)\s*[:=]\s*\{?\s*$/.test(before)) return m;
        // berada di dalam string lain (mis. className="... url('/x.png')")
        const dq = (before.match(/"/g) || []).length;
        const bt = (before.match(/`/g) || []).length;
        if ((q === "'" && dq % 2 === 1) || bt % 2 === 1) {
          skipped.push(`${path.relative(ROOT, file)}:${i + 1}  ${t.slice(0, 90)}`);
          return m;
        }
        count++;
        // atribut JSX: src="/x.png" -> src={asset("/x.png")}
        if (/\b[\w-]+=\s*$/.test(before)) return `{asset("${p}")}`;
        return `asset("${p}")`;
      });
    });

    if (!count) continue;
    let out = lines.join("\n");

    if (!/import\s*\{\s*asset\s*\}/.test(out)) {
      let rel = path.relative(path.dirname(file), HELPER).replace(/\\/g, "/").replace(/\.js$/, "");
      if (!rel.startsWith(".")) rel = "./" + rel;
      const imp = `import { asset } from "${rel}";\n`;
      // sisipkan setelah import terakhir (atau di baris pertama)
      const m = [...out.matchAll(/^import[\s\S]*?from\s+["'][^"']+["'];?[^\n]*\n/gm)];
      if (m.length) {
        const last = m[m.length - 1];
        const at = last.index + last[0].length;
        out = out.slice(0, at) + imp + out.slice(at);
      } else {
        out = imp + out;
      }
    }

    fs.writeFileSync(file, out);
    totalFiles++;
    totalRepl += count;
  }
}

console.log(`Selesai: ${totalRepl} path diubah di ${totalFiles} file.`);
if (skipped.length) {
  console.log("\nPerlu dicek manual (path di dalam string lain):");
  skipped.forEach((s) => console.log("  " + s));
}
