// Sumber: Rev. Struktur Orgas BLU Rumkit Tk. II dr. Soepraoen - November 2026
// kategori: PIMPINAN | KOMITE | KABAG | PEMBANTU | DEPARTEMEN | INSTALASI | PELAKSANA | ANGGOTA (tampil di modal atasannya)
// status 1 = punya bawahan (tombol "Lihat Selengkapnya" membuka modal berisi item dengan parent = level-nya)
// nama kosong = jabatan masih kosong / belum terisi

export const listDireksi = [
  // ================= UNSUR PIMPINAN =================
  {
    nama: "Kolonel Ckm dr. Handy Hernandy Yuliawan, Sp.M",
    jabatan: "Kepala Rumah Sakit",
    foto: "/assets/direksi/karumkit-handy.jpeg",
    level: "KARUMKIT",
    parent: "-",
    status: 0,
    kategori: "PIMPINAN"
  },
  {
    nama: "Letkol Ckm dr. Teguh Ismanto, Sp.An",
    jabatan: "Wakil Kepala Rumah Sakit",
    foto: "/assets/orgas-blu/Letkol dr. Teguh, Sp.An.jpg",
    level: "WAKARUMKIT",
    parent: "KARUMKIT",
    status: 0,
    kategori: "PIMPINAN"
  },
  // Komite & Unsur Pengawas
  {
    nama: "Kolonel Ckm dr. Dini Henriyanto, Sp.PD",
    jabatan: "KE KOMMED",
    foto: "/assets/orgas-blu/Letkol Ckm dr. Dini Hendriyanto Sp.PD.png",
    level: "KE KOMMED",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  {
    nama: "Letkol Ckm (K) Nova Lumentut, S.Kep, M.MKes",
    jabatan: "KE KOMWAT",
    foto: "",
    level: "KE KOMWAT",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  {
    nama: "Letkol Ckm (K) Eri Wiyasti, S.K.M., M.Kes",
    jabatan: "KE KOM NAKES LAIN",
    foto: "/assets/orgas-blu/Letkol Ckm Eri Wiyasti.jpg",
    level: "KE KOM NAKES LAIN",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  {
    nama: "Letkol Ckm (K) Mustriwi, S.Kep., Ners., M.Kep",
    jabatan: "KE KOM MUTU RS",
    foto: "",
    level: "KE KOM MUTU RS",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  {
    nama: "Mayor Ckm Dr. Elvianto W, S.Pd, S.Kep.Ners, M.MKes",
    jabatan: "KOMKORDIK",
    foto: "/assets/orgas-blu/Mayor Ckm Elvianto.jpg",
    level: "KOMKORDIK",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  {
    nama: "Letkol Ckm (K) Eri Wiyasti, S.K.M., M.Kes",
    jabatan: "KA SPI",
    foto: "/assets/orgas-blu/Letkol Ckm Eri Wiyasti.jpg",
    level: "KA SPI",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  {
    nama: "Letkol Ckm (K) Yunining, S.Psi",
    jabatan: "MPP / CASE MANAGER",
    foto: "",
    level: "MPP / CASE MANAGER",
    parent: "KARUMKIT",
    status: 0,
    kategori: "KOMITE"
  },
  // Kepala Bagian & UKPBJ
  {
    nama: "Letkol Ckm (K) Dr. dr. Tiwik E, Sp.PK., M.Kes",
    jabatan: "KABAG YAN",
    foto: "/assets/orgas-blu/Letkol Ckm dr Tiwik.jpg",
    level: "KABAG YAN",
    parent: "KARUMKIT",
    status: 1,
    kategori: "KABAG"
  },
  // KABAG YAN
  {
    nama: "Kapten Ckm Anton Prasetyo H. S, S.Kep",
    jabatan: "KASI MINKES",
    foto: "",
    level: "KASI MINKES",
    parent: "KABAG YAN",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a dr. Erick Rusli",
    jabatan: "KASI JANGMED",
    foto: "/assets/orgas-blu/dr Erick.jpg",
    level: "KASI JANGMED",
    parent: "KABAG YAN",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Letkol Ckm (K) Sari Tri Buntari, S.Si., Apt",
    jabatan: "KASI JANGUM",
    foto: "/assets/orgas-blu/Mayor Ckm Sari tri Buntari.jpg",
    level: "KASI JANGUM",
    parent: "KABAG YAN",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm (K) Nurul Hidayanti",
    jabatan: "KABAG REN DAN KEU",
    foto: "/assets/orgas-blu/Letkol Ckm Nurul Hidayanti.jpg",
    level: "KABAG REN DAN KEU",
    parent: "KARUMKIT",
    status: 1,
    kategori: "KABAG"
  },
  // KABAG REN DAN KEU
  {
    nama: "Mayor Ckm Andri Irwanto",
    jabatan: "KASIRENPROGGAR",
    foto: "/assets/orgas-blu/Mayor Ckm Andri Irwanto.jpg",
    level: "KASIRENPROGGAR",
    parent: "KABAG REN DAN KEU",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS III/b Yuanita Dewi Andriana S, S.Sos",
    jabatan: "BENDAHARA",
    foto: "/assets/orgas-blu/Yuanita Dewi Andriana S, S.Sos.png",
    level: "BENDAHARA",
    parent: "KABAG REN DAN KEU",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a dr. M. Rodli, Sp.An",
    jabatan: "ASURANSI DAN KLAIM BPJS",
    foto: "/assets/orgas-blu/dr. Muhammad Rodli, Sp. An CROP.jpg.jpeg",
    level: "ASURANSI DAN KLAIM BPJS",
    parent: "KABAG REN DAN KEU",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "",
    jabatan: "KABAG LOG",
    foto: "",
    level: "KABAG LOG",
    parent: "KARUMKIT",
    status: 1,
    kategori: "KABAG"
  },
  // KABAG LOG
  {
    nama: "",
    jabatan: "KASIMINLOG",
    foto: "",
    level: "KASIMINLOG",
    parent: "KABAG LOG",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Kapten Ckm Sugeng Haryanto",
    jabatan: "KAUR SIMAK",
    foto: "/assets/orgas-blu/Kapten Sugeng Haryanto crop.png",
    level: "KAUR SIMAK",
    parent: "KABAG LOG",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm (K) Simpen W, S.Kep Ners., M.Kes",
    jabatan: "KA UKPBJ",
    foto: "/assets/orgas-blu/letkol-simpen.jpeg",
    level: "KA UKPBJ",
    parent: "KARUMKIT",
    status: 1,
    kategori: "KABAG"
  },
  // KA UKPBJ
  {
    nama: "Letkol Ckm (K) Sari Tri Buntari, S.Si., Apt",
    jabatan: "PP JANGUM",
    foto: "/assets/orgas-blu/Mayor Ckm Sari tri Buntari.jpg",
    level: "PP JANGUM",
    parent: "KA UKPBJ",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a dr. Erick Rusli",
    jabatan: "PP JANGMED",
    foto: "/assets/orgas-blu/dr Erick.jpg",
    level: "PP JANGMED",
    parent: "KA UKPBJ",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Letkol Ckm (K) Deasy Achmawati, S.Si., Apt",
    jabatan: "PP FARMASI",
    foto: "",
    level: "PP FARMASI",
    parent: "KA UKPBJ",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Mayor Ckm Slamet Pradianta",
    jabatan: "PP KONSTRUKSI",
    foto: "",
    level: "PP KONSTRUKSI",
    parent: "KA UKPBJ",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Mayor Ckm Jumein",
    jabatan: "PP BAHAN MAKANAN",
    foto: "",
    level: "PP BAHAN MAKANAN",
    parent: "KA UKPBJ",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  // ================= UNSUR PEMBANTU PIMPINAN =================
  {
    nama: "Mayor Ckm Slamet Pradianta",
    jabatan: "KASITUUD",
    foto: "",
    level: "KASITUUD",
    parent: "KARUMKIT",
    status: 1,
    kategori: "PEMBANTU"
  },
  // KASITUUD
  {
    nama: "Kapten Ckm Sugeng Haryanto",
    jabatan: "URPAM",
    foto: "/assets/orgas-blu/Kapten Sugeng Haryanto crop.png",
    level: "URPAM",
    parent: "KASITUUD",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Kapten Ckm Nur Akhmad",
    jabatan: "URPERS",
    foto: "/assets/orgas-blu/kapten ckmNur Akhmad.jpg",
    level: "URPERS",
    parent: "KASITUUD",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Kapten Ckm Soepriyanto, S.Psi",
    jabatan: "URDAL",
    foto: "",
    level: "URDAL",
    parent: "KASITUUD",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Mayor Ckm David Saiful Anwar, A.Md.Kep., S.Kom",
    jabatan: "KASI IT/SIM RS, INFOKES DAN PEMASARAN",
    foto: "",
    level: "KASI IT/SIM RS",
    parent: "KARUMKIT",
    status: 0,
    kategori: "PEMBANTU"
  },
  // ================= UNSUR PELAYANAN - DEPARTEMEN =================
  {
    nama: "",
    jabatan: "KADEP BEDAH DAN ANESTESI",
    foto: "",
    level: "KADEP BEDAH DAN ANESTESI",
    parent: "KARUMKIT",
    status: 1,
    kategori: "DEPARTEMEN"
  },
  // KADEP BEDAH DAN ANESTESI
  {
    nama: "",
    jabatan: "KASUBDEP BEDAH",
    foto: "",
    level: "KASUBDEP BEDAH",
    parent: "KADEP BEDAH DAN ANESTESI",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBDEP ANESTESI",
    foto: "",
    level: "KASUBDEP ANESTESI",
    parent: "KADEP BEDAH DAN ANESTESI",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "",
    jabatan: "KADEP OBSGYN DAN IKA",
    foto: "",
    level: "KADEP OBSGYN DAN IKA",
    parent: "KARUMKIT",
    status: 1,
    kategori: "DEPARTEMEN"
  },
  // KADEP OBSGYN DAN IKA
  {
    nama: "",
    jabatan: "KASUBDEP OBSGYN",
    foto: "",
    level: "KASUBDEP OBSGYN",
    parent: "KADEP OBSGYN DAN IKA",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBDEP IKA",
    foto: "",
    level: "KASUBDEP IKA",
    parent: "KADEP OBSGYN DAN IKA",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm dr. Hari Indratno, Sp.JP(K) FIHA",
    jabatan: "KADEP P.DALAM, JANTUNG DAN PARU",
    foto: "",
    level: "KADEP P.DALAM, JANTUNG DAN PARU",
    parent: "KARUMKIT",
    status: 1,
    kategori: "DEPARTEMEN"
  },
  // KADEP P.DALAM, JANTUNG DAN PARU
  {
    nama: "",
    jabatan: "KASUBDEP PENY. DALAM",
    foto: "",
    level: "KASUBDEP PENY. DALAM",
    parent: "KADEP P.DALAM, JANTUNG DAN PARU",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a dr. Yusuf Arifin, Sp.JP",
    jabatan: "KASUBDEP JANTUNG",
    foto: "/assets/orgas-blu/dr Yusuf.JPG",
    level: "KASUBDEP JANTUNG",
    parent: "KADEP P.DALAM, JANTUNG DAN PARU",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBDEP PARU",
    foto: "",
    level: "KASUBDEP PARU",
    parent: "KADEP P.DALAM, JANTUNG DAN PARU",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "",
    jabatan: "KADEP MATA, THT DAN KULKEL",
    foto: "",
    level: "KADEP MATA, THT DAN KULKEL",
    parent: "KARUMKIT",
    status: 1,
    kategori: "DEPARTEMEN"
  },
  // KADEP MATA, THT DAN KULKEL
  {
    nama: "",
    jabatan: "KASUBDEP MATA",
    foto: "",
    level: "KASUBDEP MATA",
    parent: "KADEP MATA, THT DAN KULKEL",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBDEP THT",
    foto: "",
    level: "KASUBDEP THT",
    parent: "KADEP MATA, THT DAN KULKEL",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBDEP KULKEL",
    foto: "",
    level: "KASUBDEP KULKEL",
    parent: "KADEP MATA, THT DAN KULKEL",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm dr. Bowo Hery P, Sp.S., M.BIOMED",
    jabatan: "KADEP P.SARAF DAN JIWA",
    foto: "/assets/orgas-blu/Mayor Ckm dr Bowo.jpg",
    level: "KADEP P.SARAF DAN JIWA",
    parent: "KARUMKIT",
    status: 1,
    kategori: "DEPARTEMEN"
  },
  // KADEP P.SARAF DAN JIWA
  {
    nama: "",
    jabatan: "KASUBDEP PENY. SARAF",
    foto: "",
    level: "KASUBDEP PENY. SARAF",
    parent: "KADEP P.SARAF DAN JIWA",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBDEP JIWA",
    foto: "",
    level: "KASUBDEP JIWA",
    parent: "KADEP P.SARAF DAN JIWA",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm drg. Ibnu Sina, Sp.Pros., MARS",
    jabatan: "KADEP GILUT",
    foto: "",
    level: "KADEP GILUT",
    parent: "KARUMKIT",
    status: 1,
    kategori: "DEPARTEMEN"
  },
  // KADEP GILUT
  {
    nama: "",
    jabatan: "KASUBDEP GILUT",
    foto: "",
    level: "KASUBDEP GILUT",
    parent: "KADEP GILUT",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  // ================= UNSUR PELAYANAN - INSTALASI =================
  {
    nama: "Letkol Ckm (K) Yunining Setyowati, S.Psi",
    jabatan: "KAINSTALWATLAN",
    foto: "",
    level: "KAINSTALWATLAN",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTALWATLAN
  {
    nama: "PNS IV/a Dewi Anggraini, S.Kep.Ns., M.MMRS",
    jabatan: "KASUBWATLAN A",
    foto: "",
    level: "KASUBWATLAN A",
    parent: "KAINSTALWATLAN",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Kapten Ckm Agus Sasiono",
    jabatan: "KASUBWATLAN B",
    foto: "/assets/orgas-blu/Kapten Ckm Agus Sasiono.jpg",
    level: "KASUBWATLAN B",
    parent: "KAINSTALWATLAN",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm Pujianto, A.Md AK., S.K.M",
    jabatan: "KAINSTALWATNAP",
    foto: "/assets/orgas-blu/Letkol Ckm Pujianto.jpg",
    level: "KAINSTALWATNAP",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTALWATNAP
  {
    nama: "Mayor Ckm (K) Adriani, A.Md",
    jabatan: "KASUBWATNAP A",
    foto: "",
    level: "KASUBWATNAP A",
    parent: "KAINSTALWATNAP",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Mayor Ckm Asep Ruhendra, S.Kep.Ns",
    jabatan: "KASUBWATNAP B",
    foto: "",
    level: "KASUBWATNAP B",
    parent: "KAINSTALWATNAP",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBWATNAP C",
    foto: "",
    level: "KASUBWATNAP C",
    parent: "KAINSTALWATNAP",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "",
    jabatan: "KAINSTALKABED",
    foto: "",
    level: "KAINSTALKABED",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTALKABED
  {
    nama: "",
    jabatan: "KASUBINSTAL A",
    foto: "",
    level: "KASUBINSTAL A",
    parent: "KAINSTALKABED",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUBINSTAL B",
    foto: "",
    level: "KASUBINSTAL B",
    parent: "KAINSTALKABED",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "UNIT ESWL",
    foto: "",
    level: "UNIT ESWL",
    parent: "KAINSTALKABED",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a dr. Widiati Rahayu, Sp.P., FAPSR",
    jabatan: "ENDOSCOPY",
    foto: "/assets/orgas-blu/dr-widiati-rahayu.jpeg",
    level: "ENDOSCOPY",
    parent: "KAINSTALKABED",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "PNS IV/a dr. Gatot S, Sp.KFR",
    jabatan: "KAINSTAL REHABMED",
    foto: "/assets/orgas-blu/dr. Gatot.jpg",
    level: "KAINSTAL REHABMED",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTAL REHABMED
  {
    nama: "",
    jabatan: "KASUB REHABMED",
    foto: "",
    level: "KASUB REHABMED",
    parent: "KAINSTAL REHABMED",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm (K) dr. Thiba Dina M, Sp.PK",
    jabatan: "KAINSTALJANGDIAG",
    foto: "/assets/orgas-blu/Mayor Ckm (K) dr. Thiba Dina Merdikaningsih, Sp.PK.jpg.jpeg",
    level: "KAINSTALJANGDIAG",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTALJANGDIAG
  {
    nama: "PNS IV/a dr. Satwika Budi P, Sp.Rad",
    jabatan: "KASUB RADIOLOGI",
    foto: "/assets/orgas-blu/dr Pradhana.jpg",
    level: "KASUB RADIOLOGI",
    parent: "KAINSTALJANGDIAG",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Lettu Ckm Mariadi, A.Md",
    jabatan: "KASUB PATOLOGI KLINIK",
    foto: "",
    level: "KASUB PATOLOGI KLINIK",
    parent: "KAINSTALJANGDIAG",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a dr. Neviana Fitri L, Sp.PA",
    jabatan: "KASUB PATOLOGI ANATOMI",
    foto: "/assets/orgas-blu/dr Neviana.JPG",
    level: "KASUB PATOLOGI ANATOMI",
    parent: "KAINSTALJANGDIAG",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm Gogok Harianto, Apt",
    jabatan: "KAINSTALFARMASI",
    foto: "/assets/orgas-blu/Lwtkol Ckm Gogok.jpg",
    level: "KAINSTALFARMASI",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTALFARMASI
  {
    nama: "Letkol Ckm (K) Deasy Achmawati, S.Si., Apt",
    jabatan: "KASUB YANFAR",
    foto: "",
    level: "KASUB YANFAR",
    parent: "KAINSTALFARMASI",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASUB DALFAR",
    foto: "",
    level: "KASUB DALFAR",
    parent: "KAINSTALFARMASI",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Mayor Ckm Sukemi",
    jabatan: "KAINSTALJANGWAT",
    foto: "",
    level: "KAINSTALJANGWAT",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTALJANGWAT
  {
    nama: "PNS III/d Kris Setiowati, S.Gz.Dietiesen",
    jabatan: "KAUR GIZI",
    foto: "",
    level: "KAUR GIZI",
    parent: "KAINSTALJANGWAT",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS II/d Mufia Fuaida",
    jabatan: "KAUR LAUNDRY",
    foto: "",
    level: "KAUR LAUNDRY",
    parent: "KAINSTALJANGWAT",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PPPKPW M. Zainuri",
    jabatan: "KAUR K. JENAZAH",
    foto: "",
    level: "KAUR K. JENAZAH",
    parent: "KAINSTALJANGWAT",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS III/a Nita Restu D, S.Kep.Ners",
    jabatan: "UNIT CSSD",
    foto: "/assets/orgas-blu/Nita Restu Desyhastuti, A.Md.Kep.jpg",
    level: "UNIT CSSD",
    parent: "KAINSTALJANGWAT",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "Letkol Ckm (K) Mustriwi, S.Kep Ners., M.Kep",
    jabatan: "KABAGDIKLAT DAN LITBANGKES",
    foto: "",
    level: "KABAGDIKLAT DAN LITBANGKES",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KABAGDIKLAT DAN LITBANGKES
  {
    nama: "PPPK dr. Ragil Triyambodo",
    jabatan: "KASI DIKNAKES",
    foto: "",
    level: "KASI DIKNAKES",
    parent: "KABAGDIKLAT DAN LITBANGKES",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "PNS IV/a Fatkhuriyanto, S.S.T, MM",
    jabatan: "KASI DIKNAKES LAIN",
    foto: "/assets/orgas-blu/Fatkhuriyanto, SST.jpg",
    level: "KASI DIKNAKES LAIN",
    parent: "KABAGDIKLAT DAN LITBANGKES",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Mayor Ckm Imam Bukhori, S.Kep.Ners, M.Kes",
    jabatan: "KASI LAT",
    foto: "",
    level: "KASI LAT",
    parent: "KABAGDIKLAT DAN LITBANGKES",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "",
    jabatan: "KASI LITBANGKES",
    foto: "",
    level: "KASI LITBANGKES",
    parent: "KABAGDIKLAT DAN LITBANGKES",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "PNS IV/a dr. Ary Prasetyo W, Sp.THT-KL",
    jabatan: "KAINSTAL IGD",
    foto: "/assets/orgas-blu/dr. Ary Prasetyo Wibowo, Sp.THT-KL.png",
    level: "KAINSTAL IGD",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KAINSTAL IGD
  {
    nama: "PNS III/d Samsul H, S.Kep.Ners",
    jabatan: "KAUR GADAR BEDAH",
    foto: "",
    level: "KAUR GADAR BEDAH",
    parent: "KAINSTAL IGD",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  {
    nama: "dr. Agustinus Gatot D, Sp.Rad.Onk",
    jabatan: "KA ONKOTER",
    foto: "/assets/orgas-blu/dr agustinus gatot.jpeg",
    level: "KA ONKOTER",
    parent: "KARUMKIT",
    status: 1,
    kategori: "INSTALASI"
  },
  // KA ONKOTER
  {
    nama: "PNS IV/a dr. Margaretha Lupi P",
    jabatan: "KA UNIT HD",
    foto: "/assets/orgas-blu/dr. Margaretha.jpg",
    level: "KA UNIT HD",
    parent: "KA ONKOTER",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Letkol Ckm dr. Bowo Hery P, Sp.S., M.BIOMED",
    jabatan: "KAINSTAL PAVILIUN",
    foto: "/assets/orgas-blu/Mayor Ckm dr Bowo.jpg",
    level: "KAINSTAL PAVILIUN",
    parent: "KA ONKOTER",
    status: 0,
    kategori: "ANGGOTA"
  },
  {
    nama: "Letkol Ckm (K) dr. Thiba Dina M, Sp.PK",
    jabatan: "KA MCU",
    foto: "/assets/orgas-blu/Mayor Ckm (K) dr. Thiba Dina Merdikaningsih, Sp.PK.jpg.jpeg",
    level: "KA MCU",
    parent: "KA ONKOTER",
    status: 0,
    kategori: "ANGGOTA"
  },
  //
  // ================= UNSUR PELAKSANA =================
  {
    nama: "Kolonel Ckm Dr. dr. Zamroni, Sp.U., S.H",
    jabatan: "SMF GOL IV/KOL",
    foto: "",
    level: "SMF GOL IV/KOL",
    parent: "KARUMKIT",
    status: 0,
    kategori: "PELAKSANA"
  },
  {
    nama: "",
    jabatan: "SF",
    foto: "",
    level: "SF",
    parent: "KARUMKIT",
    status: 0,
    kategori: "PELAKSANA"
  },
];