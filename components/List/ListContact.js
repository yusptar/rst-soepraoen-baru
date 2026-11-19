import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
export const listContact = [
  // {
  //   id: 1,
  //   title: "Alamat",
  //   content:
  //     "Jl. S. Supriadi No.22, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65112",
  //   icon: (
  //     <>
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
  //       />
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
  //       />
  //     </>
  //   ),
  //   link: "https://goo.gl/maps/J7HFRPjREchDrxae7",
  // },
  {
    id: 1,
    title: "Layanan Gawat Darurat",
    content: "(0341) 364124 / 0823-3076-9738",
    icon: (
        <FaAmbulance
        className="text-white flex justify-center items-center"
        size={25}
        />
      // <>
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      //   />
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      //   />
      // </>
    ),
    link: "tel:08113277300",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-300",
  },
  {
    id: 2,
    title: "Pusat Informasi",
    content: "0811-3277-303",
    icon: (
      // <path
      //   strokeLinecap="round"
      //   strokeLinejoin="round"
      //   d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      // />
      <FaWhatsapp
        className="text-white flex justify-center items-center"
        size={25}
      />
    ),
    link: "https://api.whatsapp.com/send/?phone=628113277303",
    color: "bg-gradient-to-br from-green-500 to-green-300",
  },
  // {
  //   id: 3,
  //   title: "Telepon",
  //   content: "(0341) 325 111 / 325 112",
  //   icon: (
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
  //     />
  //   ),
  //   link: "tel:0341325111",
  // },
  {
    id: 3,
    title: "Pengaduan",
    content: "0811-3494-390",
    icon: (
      <FaPhoneAlt
        className="text-white flex justify-center items-center"
        size={25}
      />
      // <path
      //   strokeLinecap="round"
      //   strokeLinejoin="round"
      //   d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
      // />
    ),
    link: "tel:08113494390",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-200",
  },
  {
    id: 4,
    title: "Email",
    content: "rumkit.soepraoen@gmail.com",
    color: "bg-gradient-to-br from-blue-400 via-red-400 via-yellow-400 to-green-400",
    viewBox: "0 0 48 48", 
    icon: (
      <>
        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
      </>
    ),
    link: "mailto:rumkit.soepraoen@gmail.com",
  },
  {
    id: 5,
    title: "Instagram",
    content: "@rssoepraoen",
    color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600", 
    viewBox: "0 0 48 48", 
    icon: (
      <>
        <radialGradient id="instaGrad1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fd5" />
          <stop offset=".328" stopColor="#ff543f" />
          <stop offset=".348" stopColor="#fc5245" />
          <stop offset=".504" stopColor="#e64771" />
          <stop offset=".643" stopColor="#d53e91" />
          <stop offset=".761" stopColor="#cc39a4" />
          <stop offset=".841" stopColor="#c837ab" />
        </radialGradient>
        <path fill="url(#instaGrad1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20
          c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20
          C42.014,38.383,38.417,41.986,34.017,41.99z" />
        <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5
          s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" />
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
        <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12
          C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18
          c0-2.757-2.243-5-5-5H18z" />
      </>
    ),
    link: "https://www.instagram.com/rssoepraoen/",
  },
  {
    id: 6,
    title: "Youtube",
    content: "Rumah Sakit Tk.II dr. Soepraoen",
    viewBox: "0 0 48 48", 
    icon: (
      <>
        <path
          fill="#FF3D00"
          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1
          c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9
          c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
        />
        <path fill="#FFF" d="M20 31L20 17 32 24z" />
      </>
    ),
    link: "https://www.youtube.com/@rssoepraoen",
    color: "bg-red-500",
  },
  
];
