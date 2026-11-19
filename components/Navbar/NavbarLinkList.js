export const links = [
  {
    name: "Home",
    submenu: false,
    link: "/",
  },
  {
    name: "Profil",
    submenu: true,
    sublinks: [
      {
        name: "Profil",
        submenu: false,
        link: "/profil/profil-rs",
      },
      {
        name: "Sejarah",
        submenu: false,
        link: "/profil/sejarah",
      },
      {
        name: "Visi & Misi",
        submenu: false,
        link: "/profil/visi-misi",
      },
      {
        name: "Jajaran Direksi",
        submenu: false,
        link: "/profil/jajaran-direksi",
      },
      {
        name: "Prestasi",
        submenu: false,
        link: "/profil/prestasi",
      },
      {
        name: "Mitra Kerjasama RS",
        submenu: false,
        link: "/profil/mitra-kerjasama-rs",
      },
      {
        name: "Denah Rumah Sakit",
        submenu: false,
        link: "/profil/denah-rumah-sakit",
      },
    ],
  },
  // {
  //   name: "Informasi",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       name: "PPID",
  //       submenu: false,
  //       link: "/informasi/ppid",
  //     },
  //     {
  //       name: "Ketersediaan Darah",
  //       submenu: false,
  //       link: "/informasi/ketersediaan-darah",
  //     },
  //     {
  //       name: "Pengadaan",
  //       submenu: false,
  //       link: "/informasi/pengadaan",
  //     },
  //     {
  //       name: "Karir",
  //       submenu: false,
  //       link: "/informasi/karir",
  //     },

  //     {
  //       name: "Berita",
  //       submenu: false,
  //       link: "/informasi/berita",
  //     },
  //     {
  //       name: "Komite Mutu",
  //       submenu: true,
  //       sublinks: [
  //         {
  //           name: "Indikator Mutu",
  //           link: "/zona-integritas/pmkp/indikator-mutu",
  //         },
  //         {
  //           name: "Visi dan Misi PMKP",
  //           link: "/zona-integritas/pmkp/visi-dan-misi-pmkp",
  //         },
  //         {
  //           name: "Struktur Organisasi PMKP",
  //           link: "/zona-integritas/pmkp/struktur-organisasi-pmkp",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "PPID",
    submenu: true,
    sublinks: [
      {
        name: "PPID",
        submenu: false,
        link: "/informasi/ppid",
      },
      {
        name: "KOMKORDIK",
        submenu: false,
        link: "/informasi/komkordik",
      },
      {
        name: "INDIKATOR KINERJA",
        submenu: false,
        link: "/informasi/ppid/indikator-kinerja",
      },
      {
        name: "Informasi",
        submenu: true,
        sublinks: [
          {
            name: "Ketersediaan Darah",
            submenu: false,
            link: "/informasi/ketersediaan-darah",
          },
          {
            name: "Pencarian Pasien",
            submenu: false,
            link: "https://rssoepraoen.com/webapps/caripasien.php",
          },
           {
            name: "Jumlah Kunjungan Rawat Jalan",
            submenu: false,
            link: "https://rssoepraoen.com/webapps/kunjunganralan.php",
          },
          {
            name: "Pengadaan",
            submenu: false,
            link: "/informasi/pengadaan",
          },
          {
            name: "Karir",
            submenu: false,
            link: "/informasi/karir",
          },
           {
            name: "E-Leaflet",
            submenu: false,
            link: "/informasi/booklet-digital",
          },
    
          // {
          //   name: "Jadwal Dokter",
          //   submenu: false,
          //   link: "/informasi/jadwal-dokter",
          // },
          // {
          //   name: "Ulasan",
          //   submenu: false,
          //   link: "/informasi/ulasan",
          // },
          {
            name: "Berita",
            submenu: false,
            link: "/informasi/berita",
          },
          {
            name: "Indikator Mutu",
            link: "/zona-integritas/pmkp/indikator-mutu",
          },
          {
            name: "Visi dan Misi PMKP",
            link: "/zona-integritas/pmkp/visi-dan-misi-pmkp",
          },
          {
            name: "Struktur Organisasi PMKP",
            link: "/zona-integritas/pmkp/struktur-organisasi-pmkp",
          },
        ]
      },
      {
        name: "Perpustakaan",
        submenu: true,
        sublinks: [
          {
            name: "Perpustakaan Rumah Sakit Tk.II dr.Soepraoen",
            submenu: false,
            link: "https://rssoepraoen.com/perpustakaan/",
          },
          {
            name: "Perpustakaan ITSK",
            submenu: false,
            link: "https://perpustakaan.itsk-soepraoen.ac.id",
          },
          // {
          //   name: "Perpus Bedah B",
          //   submenu: false,
          //   link: "",
          // },
        ],
      },
    ]
  },

  {
    name: "Fasilitas Layanan",
    submenu: true,
    sublinks: [
      {
        name: "Ketersediaan Kamar",
        submenu: true,
        sublinks: [
          {
            name: "Kelas",
            // link: "https://rssoepraoen.com/webapps/bed4.php",
            link: "/informasi/ketersediaan-kamar",
          },
          {
            name: "Nama Kamar",
            link: "https://rssoepraoen.com/webapps/bed3.php",
          },
        ],
      },
      {
        name: "Tarif Pelayanan",
        submenu: true,
        sublinks: [
          {
            name: "Medical Checkup",
            link: "/informasi/tarif-pelayanan/medical-checkup",
          },
          {
            name: "Tindakan Rawat Jalan",
            link: "/informasi/tarif-pelayanan/rawat-jalan",
          },
          {
            name: "Kelas Ruang Rawat Inap",
            link: "/informasi/tarif-pelayanan/kelas-ruang-rawat-inap",
          },
          {
            name: "RAPID Antigen & SWAB PCR",
            link: "/informasi/tarif-pelayanan/rapid-antigen-swab-pcr",
          },
        ],
      },
      {
        name: "Alur Pendaftaran Pasien",
        submenu: true,
        sublinks: [
          {
            name: "IGD",
            link: "/informasi/alur-pendaftaran/igd",
          },
          {
            name: "Rawat Jalan",
            link: "/informasi/alur-pendaftaran/rawat-jalan",
          },
          {
            name: "Rawat Inap",
            link: "/informasi/alur-pendaftaran/rawat-inap",
          },
        ],
      },
      // {
      //   name: "Layanan Unggulan",
      //   submenu: true,
      //   sublinks: [
      //     {
      //       name: "Unit Kemoterapi",
      //       link: "/fasilitas-layanan/layanan-unggulan/unit-kemoterapi",
      //     },
      //     {
      //       name: "Unit Hemodialisa",
      //       link: "/fasilitas-layanan/layanan-unggulan/unit-hemodialisa",
      //     },
      //     {
      //       name: "Medical Checkup",
      //       link: "/informasi/tarif-pelayanan/medical-checkup",
      //     },
      //     {
      //       name: "Unit PCR",
      //       link: "/informasi/tarif-pelayanan/rapid-antigen-swab-pcr",
      //     },
      //     {
      //       name: "Radioterapi",
      //       link: "/fasilitas-layanan/layanan-unggulan/radioterapi",
      //     },
      //     {
      //       name: "Radiologi",
      //       link: "/fasilitas-layanan/layanan-unggulan/radiologi",
      //     },
      //     {
      //       name: "Jantung terpadu",
      //       link: "/fasilitas-layanan/layanan-unggulan/cathlab",
      //     },
      //     {
      //       name: "CT Scan",
      //       link: "/fasilitas-layanan/layanan-unggulan/ct-scan",
      //     },
      //     {
      //       name: "Urologi Terpadu",
      //       link: "/fasilitas-layanan/layanan-unggulan/eswl",
      //     },
      //     {
      //       name: "Laboratorium",
      //       link: "/fasilitas-layanan/layanan-unggulan/laboratorium",
      //     },
      //     {
      //       name: "Test Kesehatan Jiwa & Psikotest",
      //       link: "/fasilitas-layanan/layanan-unggulan/keswa",
      //     },
      //   ],
      // },
      {
        name: "Instalasi Gawat Darurat",
        submenu: false,
        link: "/fasilitas-layanan/instalasi-gawat-darurat",
      },
      {
        name: "Rawat Jalan",
        submenu: true,
        sublinks: [
          {
            name: "Poliklinik Penyakit Dalam",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-penyakit-dalam?kd_poli=INT",
          },
          {
            name: "Poliklinik Jantung",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-jantung?kd_poli=JAN",
          },
          {
            name: "Poliklinik Bedah",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-bedah?kd_poli=BED",
          },
          {
            name: "Poliklinik Syaraf",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-syaraf?kd_poli=SAR",
          },
          {
            name: "Poliklinik THT",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-tht?kd_poli=THT",
          },
          {
            name: "Poliklinik Anak",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-anak?kd_poli=ANA",
          },
          {
            name: "Poliklinik Penyakit Mata",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-anak?kd_poli=MAT",
          },
          {
            name: "Poliklinik Gigi dan Mulut",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-gigi-dan-mulut?kd_poli=PTD",
          },
          {
            name: "Poliklinik Paru",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-paru?kd_poli=PAR",
          },
          {
            name: "Poliklinik Kandungan",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-kandungan?kd_poli=OBG",
          },
          {
            name: "Poliklinik Jiwa",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-jiwa?kd_poli=JIW",
          },
          {
            name: "Poliklinik Kulit dan Kelamin",
            link: "/fasilitas-layanan/rawat-jalan/poliklinik-kulit-dan-kelamin?kd_poli=KLT",
          },
          // {
          //   name: "Poliklinik Geriatri",
          //   link: "/fasilitas-layanan/rawat-jalan/poliklinik-geriatri?kd_poli=GER",
          // },
          {
            name: "Poliklinik Komplementer",
            link: "/fasilitas-layanan/komplementer",
          },
          {
            name: "Instalasi Rehab Medik",
            link: "/fasilitas-layanan/rawat-jalan/instalasi-rehab-medik?kd_poli=IRM",
          },
         
        ],
      },
      {
        name: "Rawat Inap",
        submenu: true,
        sublinks: [
          {
            name: "Ruang Rawat Inap",
            link: "/informasi/tarif-pelayanan/kelas-ruang-rawat-inap",
          },
          // {
          //   name: "Unit Stroke",
          //   link: "/fasilitas-layanan/rawat-inap/unit-stroke",
          // },
        ],
      },
      {
        name: "Penunjang Umum",
        submenu: true,
        sublinks: [
          {
            name: "Instalasi Gizi",
            link: "/fasilitas-layanan/penunjang-umum/instalasi-gizi",
          },
          {
            name: "Unit Laundry",
            link: "/fasilitas-layanan/penunjang-umum/unit-laundry",
          },
          {
            name: "Unit CSSD",
            link: "/fasilitas-layanan/penunjang-umum/unit-cssd",
          },
          {
            name: "Kamar Jenazah",
            link: "/fasilitas-layanan/penunjang-umum/kamar-jenazah",
          },
          {
            name: "Unit Pengolahan Limbah & Incinerator",
            link: "/fasilitas-layanan/penunjang-umum/unit-pengolahan-limbah-incinerator",
          },
        ],
      },
      {
        name: "Fasilitas Umum",
        submenu: true,
        sublinks: [
          {
            name: "Fasilitas Umum",
            link: "/fasilitas-layanan/fasilitas-umum",
          },
          {
            name: "HomeCare",
            link: "/fasilitas-layanan/fasilitas-umum/homecare",
          },
          {
            name: "Konsultasi Dokter",
            link: "https://play.google.com/store/apps/details?id=com.rstds.halosoepraoen&pcampaignid=web_share",
          },
        ],
       
      },
      // {
      //   name: "Perpustakaan",
      //   submenu: false,
      //   link: "https://rssoepraoen.com/perpustakaan/",
      // },
    ],
  },
  {
    name: "ZI",
    submenu: true,
    link: "/contact",
    sublinks: [
      // { name: "WBK/WBBM", link: "/zona-integritas/wbk-wbbm" },
      {
        name: "Pembangunan ZI",
        submenu: true,
        sublinks: [
          {
            name: "Pembangunan ZI",
            link: "/zona-integritas/pembangunan-zi",
          },
          {
            name: "Pencanangan Zona Integritas Secara Digital",
            link: "https://rssoepraoen.com/pakta-integritas/",
          },
          {
            name: "Pencanangan Penguatan Komitmen",
            link: "/zona-integritas/pencanangan-komitmen",
          },
        ],
      },
      { 
        name: "ZI", 
        submenu: true,
        sublinks: [
          {
            name: "Perubahan Budaya Kerja",
            link: "/zona-integritas/bidang-1",
          },
          {
            name: "Mekanisme Kerja Satuan",
            link: "/informasi/ppid",
            // link: "/zona-integritas/bidang-2",
          },
          {
            name: "Penataan Sistem Manajemen SDM",
            link: "/informasi/karir",
            // link: "/zona-integritas/bidang-3",
          },
          {
            name: "Penguatan Akuntabilitas Satuan",
            link: "/zona-integritas/bidang-4",
          },
          {
            name: "Penguatan Pengawasan",
            link: "/zona-integritas/bidang-5",
          },
          {
            name: "Peningkatan Kualitas Pelayanan Prajurit dan atau Masyarakat",
            link: "/zona-integritas/pelayanan-publik",
            // link: "/zona-integritas/bidang-6",
          },
          {
            name: "Komponen Hasil",
            // link: "/zona-integritas/komponen-hasil",
            link: "/zona-integritas/komponen-hasil",
          },
        ],
      },
      {
        name: "Benturan Kepentingan",
        submenu: true,
        sublinks: [
          {
            name: "Link Pengaduan",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSfXunZxYP8R_0gUTSxmAxMQFwsSVBok6tdHvM6Bc7QlGWUV5A/viewform",
            link: "/zona-integritas/benturan-kepentingan",
          },
          
        ],
      },

      {
        name: "IKM, IPAK, dan IPKP",
        submenu: true,
        sublinks: [
          {
            name: "Indeks Kepuasan Masyarakat",
            link: "/zona-integritas/index-kepuasan-masyarakat",
          },
          {
            name: "Indeks Persepsi Anti Korupsi",
            link: "/zona-integritas/index-persepsi-korupsi",
          },
          {
            name: "Indeks Persepsi Kualitas Pelayanan",
            link: "/zona-integritas/index-persepsi-kualitas-pelayanan",
          },
        ],
      },
      {
        name: "Pengaduan Masyarakat",
        submenu: true,
        sublinks: [
          {
            name: "Link Pengaduan Masyarakat",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSetJgbS9rYOSqOX2IOgrFobXENDUPhqc7tkKbT0bFDbLrbWWA/viewform",
            link: "/zona-integritas/pengaduan-masyarakat",
          },
        ],
      },
      {
        name: "Survei Kepuasan",
        submenu: true,
        sublinks: [
          {
            name: "Link Survei Indeks Persepsi Kualitas Pelayanan",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeER-mAL-WbiiDF7rOau4f_hMl9WFqfU8Er7vTakyQhVM-aew/viewform",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeM41FuYmYS2AhwzUcd7YcWzJ1uIsZxqCrW9FAaNhE5QBPEmw/viewform",
            // link: "https://forms.gle/NkRGZ8Me4EMQ2Nb79",
            link: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfcAuhFIBxSKKB7v4bgImAOCIjAP28eRFc02ZEXHYgN8ih9NQ/viewform?usp=send_form",
          },
          {
            name: "Link Survei Indeks Persepsi Anti Korupsi",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeER-mAL-WbiiDF7rOau4f_hMl9WFqfU8Er7vTakyQhVM-aew/viewform",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeM41FuYmYS2AhwzUcd7YcWzJ1uIsZxqCrW9FAaNhE5QBPEmw/viewform",
            // link: "https://forms.gle/NkRGZ8Me4EMQ2Nb79",
            link: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSesVkvHeR5nRKcYmwXGwFCNl-vKhu6bPl9b1ZDxrddpT7QaAQ/viewform?usp=send_form",
          },
          {
            name: "Link Survei Indeks Kepuasan Masyarakat",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeER-mAL-WbiiDF7rOau4f_hMl9WFqfU8Er7vTakyQhVM-aew/viewform",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeM41FuYmYS2AhwzUcd7YcWzJ1uIsZxqCrW9FAaNhE5QBPEmw/viewform",
            // link: "https://forms.gle/NkRGZ8Me4EMQ2Nb79",
            link: "https://bit.ly/SKM_TW-4_2026",
          },
          // {
          //   name: "Link Survei Indeks Persepsi Anti Korupsi",
          //   link: "https://docs.google.com/forms/d/e/1FAIpQLScDKQZBPA1lc6LvfnLUGwUXNmvtIOG1sMh0uEN0ADO53bn1aw/viewform",
          // },
          {
            name: "Link Survei Kepuasan Layanan Onkologi Terpadu",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeER-mAL-WbiiDF7rOau4f_hMl9WFqfU8Er7vTakyQhVM-aew/viewform",
            // link: "https://docs.google.com/forms/d/e/1FAIpQLSeM41FuYmYS2AhwzUcd7YcWzJ1uIsZxqCrW9FAaNhE5QBPEmw/viewform",
            // link: "https://forms.gle/NkRGZ8Me4EMQ2Nb79",
            link: "https://www.rssoepraoen.co.id/fasilitas-layanan/layanan-unggulan/onkologi-terpadu/survey",
          },
        ],
      },

      // {
      //   name: "Survey SMILE Puskesad",
      //   link: "/zona-integritas/hasil-survey-smile",
      //   submenu: false,
      // },
    

      {
        name: "Whistle Blowing System",
        submenu: false,
        link: "/zona-integritas/whistle-blowing-system",
      },
      // {
      //   name: "Pelayanan Publik",
      //   submenu: false,
      //   link: "/zona-integritas/pelayanan-publik",
      // },
      // {
      //   name: "PMKP",
      //   submenu: true,
      //   sublinks: [
      //     {
      //       name: "Indikator Mutu 2022",
      //       link: "/zona-integritas/pmkp/indikator-mutu",
      //     },
      //     {
      //       name: "Visi dan Misi PMKP",
      //       link: "/zona-integritas/pmkp/visi-dan-misi-pmkp",
      //     },
      //     {
      //       name: "Struktur Organisasi PMKP",
      //       link: "/zona-integritas/pmkp/struktur-organisasi-pmkp",
      //     },
      //     // {
      //     //   name: "Produk PMKP RUMKIT",
      //     //   link: "/zona-integritas/pmkp/produk-pmkp-rumkit",
      //     // },
      //   ],
      // },
    ],
  },
  // {
  //   name: "FAQ",
  //   submenu: false,
  //   link: "/informasi/faq",
  // },
  {
    name: "Hubungi Kami",
    submenu: false,
    link: "/contact",
  },
];
