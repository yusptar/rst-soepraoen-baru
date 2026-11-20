import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Epasien from "../components/Banner/Epasien";
import { asset } from "../helpers/asset";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  styles: ["italic", "normal"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>RST DR SOEPRAOEN</title>
        <meta
          name="description"
          content="
          RST DR SOEPRAOEN adalah rumah sakit milik TNI AD yang mempunyai tupoksi memberikan pelayanan kesehatan kepada Prajurit TNI, Aparatur Sipil Negara dan Keluarganya serta masyarakat Umum. Meliputi layanan Gawat Darurat, Rawat Jalan, Rawat Inap dan Penunjang. RST DR SOEPRAOEN menyediakan 247 tempat Tidur yang siap melayani pasien rawat inap dan 16 Poliklinik Spesialis.
          RST DR SOEPRAOEN juga dilengkapi beberapa fasilitas penunjang medis seperti Radioterapi, Cath Lab, ESWL, Laboratorium PA, Laboratorium PK, Radiologi, dan lain-lain.
          RST DR SOEPRAOEN telah terakreditasi Paripurna dan mendapatkan penghargaan sebagai Satuan Kerja Berkinerja Terbaik II Kategori Badan Layanan Umum Atas Kinerja Pelaksanaan Anggaran Periode tahun 2021."
        />
        <meta name="facebook-domain-verification" content="cplqjp1148f2c9ablq3btietaw405d" />
        <link rel="icon" href={asset("/logo.png")} />
      </Head>
      <div className="bg-white text-black">
        <Navbar />
        <Component {...pageProps} />
        <Epasien />
        <Footer />
      </div>
    </main>
  );
}
