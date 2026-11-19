import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import AnimatedInView from "../../components/TransitionEffect/AnimatedInView";

const FAQItem = ({ question, answer }) => {
const [isOpen, setIsOpen] = useState(false);
const contentRef = useRef(null);
  
const toggleOpen = () => {
    setIsOpen(!isOpen);
};

  
return (
    <div className="rounded-lg my-2">
      <div
        className="bg-gradient-to-r from-blue-900 to-blue-300 rounded-lg px-4 py-2 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">{question}</span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ease-in-out text-black font-bold ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ maxHeight: isOpen ? contentRef.current.scrollHeight : '0px' }}
      >
        <div className="bg-white px-4 py-2 ">
          <ul className="list-disc list-inside">
            {answer.map((point, index) => {
              if (point.includes('Silakan klik link ini:')) {
                return (
                  <li key={index}>
                    Bagaimana Alur Pendaftaran Pasien di Rumah Sakit Tk. II dr. Soepraoen? Pasien yang ingin berobat Rawat Jalan, bisa melakukan pendaftaran secara langsung ataupun secara online. Pasien yang berobat secara langsung, silakan datang ke loket pendaftaran pada hari pemeriksaan dengan membawa Kartu Berobat, Surat Rujukan, dan Kartu BPJS (bagi pasien BPJS), kartu Asuransi (bagi peserta Asuransi). Pelayanan loket pendaftaran buka setiap Senin s.d Jumat 07.00 s.d 12.00 WIB. Untuk pasien yang mendaftar secara online. Silakan klik link ini:{' '}
                    <a
                      href="https://www.rssoepraoen.co.id/informasi/pendaftaran#anjungan"
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alur Pendaftaran Pasien Online
                    </a>
                  </li>
                );
              } else if (point.includes('disini')) {
                return (
                  <li key={index}>
                    Jangan khawatir jika anda memiliki pertanyaan atau keluhan layanan kami, untuk informasi lebih lanjut silahkan menghubungi petugas {' '}
                    <a
                      href="https://www.rssoepraoen.co.id/contact/whatsapp"
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      disini
                    </a>
                  </li>
                );
              } else {
                return <li key={index}>{point}</li>;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
    const faqs = [
      {
        question: 'Mengapa kami Selalu Terdepan?',
        answer: [
            'Kami didukung lebih dari 60 dokter spesialis dan sub spesialis, 15 dokter umum dan 2 dokter gigi untuk pelayanan pasien',
            'Kami memiliki kecepatan layanan yang prima dan paripurna dengan didukung adanya pendaftaran online Hallo Soepraoen dan E-Rekam Medis',
            'Kami juga memiliki perlengkapan medis yang modern dan lengkap, seperti treadmill, Ct Scan, dll',
            'Sebagai Rumah Sakit rujukan utama seluruh Prajurit, PNS dan Masyarakat di Jawa Timur.'
        ],
      },
      {
        question: 'Bagaimana Alur Pendaftaran?',
        answer: [
            'Apakah Rumah Sakit Tk. II dr. Soepraoen melayani pasien BPJS? Rumah Sakit Tk. II dr. Soepraoen melayani Pasien BPJS, Pasien Asuransi yang bekerja sama, dan Pasien Umum/Swasta.',
            'Bagaimana Alur Pendaftaran Pasien di Rumah Sakit Tk. II dr. Soepraoen? Pasien yang ingin berobat Rawat Jalan, bisa melakukan pendaftaran secara langsung ataupun secara online. Pasien yang berobat secara langsung, silakan datang ke loket pendaftaran pada hari pemeriksaan dengan membawa Kartu Berobat, Surat Rujukan, dan Kartu BPJS (bagi pasien BPJS), kartu Asuransi (bagi peserta Asuransi). Pelayanan loket pendaftaran buka setiap Senin s.d Jumat 07.00 s.d 12.00 WIB. Untuk pasien yang mendaftar secara online. Silakan klik link ini: Alur Pendaftaran Pasien Online',
            'Bagaimana Alur Pendaftaran Pasien Baru di Rumah Sakit Tk. II dr. Soepraoen? Pasien baru yang ingin berobat menyerahkan Foto Copy Kartu BPJS dan Foto Copy KTP masing-masing 4 lembar serta membawa Surat Rujukan dari Faskes Tingkat Pertama ke bagian Pendaftaran untuk mendapatkan kartu berobat Rumah Sakit Tk. II dr. Soepraoen.',
            'Bagaimana Alur Pendaftaran Pasien lama di Rumah Sakit Tk. II dr. Soepraoen? Pasien lama yang ingin berobat membawa Surat Rujukan dari Faskes tingkat pertama ke bagian Pendaftaran.',
            'Bagaimana Alur Pendaftaran Pasien Asuransi di Rumah Sakit Tk. II dr. Soepraoen? Bagi peserta Asuransi membawa Kartu Asuransi dan Surat Rujukan dari Faskes tingkat pertama ke bagian Pendaftaran',
        ],
      },
      {
        question: 'Bagaimana dengan biaya perawatan pasien?',
        answer: [
          'Kami secara khusus melayani pasien dari Prajurit, PNS dan Keluarganya, akan tetapi kami juga melayani masyarakat umum secara luas dengan layanan profesional dan terintegrasi.',
          'Masyarakat umum dapat memakai Jaminan Kesehatan Nasional (JKN), Jasa Raharja, atau asuransi lain yang telah bekerja sama dengan Rumah Sakit Tk. II dr. Soepraoen untuk proses pembiayaan layanan.',
        ]
      },
      {
        question: 'Bagaimana Jika ada kesulitan dalam mendapatkan Layanan Kesehatan?',
        answer: [
          'Jangan khawatir jika anda memiliki pertanyaan atau keluhan layanan kami, untuk informasi lebih lanjut silahkan menghubungi petugas disini',
        ]
      },
    ];
  
    return (
      <div className="container mx-auto py-4">
        <AnimatedInView variant="fade-in" delay={0.20}>
        <div className="flex justify-center overflow-y-auto">
          <div className="2xl:w-4/5 w-full justify-center flex">
            <div className="relative z-10 md:w-11/12">
              <div className="absolute z-0 inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-bold text-blue-900 my-5 text-center">
                    <i>Frequently Asked Question</i> (F.A.Q) 
                </span>
              </div>
            </div>
          </div>
        </div>
        </AnimatedInView>
        
     
        <div className="my-2 md:mb-2 flex justify-center ">
            <div className="2xl:w-4/5 w-full justify-center flex-col items-center">
                {faqs.map((faq, index) => (
                  <AnimatedInView key={faq.id || index} variant="fade-down" delay={0.20}>
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </AnimatedInView>
                ))}
            </div>
        </div>

        <AnimatedInView variant="fade-up" delay={0.20}>
          <div className="w-full flex justify-center mt-3">
              <Link
              href="/informasi/faq"
              className="bg-blue-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-800"
              >
              Lihat lebih detail
              </Link>
          </div>
        </AnimatedInView>
      </div>
    );
  };
  
  export default FAQ;