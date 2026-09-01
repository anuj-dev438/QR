"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Social() {
  return (
    <main className="min-h-screen bg-[#FFC107] flex justify-center">
      
      <div className="relative w-full max-w-md min-h-screen overflow-hidden flex flex-col items-center px-6 py-8">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-5 text-6xl">🍔</div>
          <div className="absolute top-60 right-5 text-5xl">🍕</div>
          <div className="absolute bottom-60 left-10 text-5xl">🍟</div>
          <div className="absolute bottom-80 right-10 text-5xl">🌮</div>
        </div>

        {/* Logo */}
        <div className="relative z-8 mt-2">
          <Image
            src="/logo2.png"
            alt="Hello Bite Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <div className="relative z-10 text-center mt-4">
          <h1 className="text-2xl sm:text-3xl font-black italic text-[#3b1f00]">
            → Connect With Us ←
          </h1>

          <div className="h-1 w-32 bg-[#E53935] mx-auto mt-2 rounded-full" />
        </div>

        {/* Social Buttons */}
        <div className="relative z-10 w-full mt-4 flex flex-col gap-5">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/hellobitescafe?igsi=bWVxNnczZ24xdmU1"
            target="_blank"
            rel="noopener noreferrer"
     className="
  w-full flex items-center gap-4
  bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737]
  text-white px-6 py-4 rounded-2xl
  shadow-lg
  scale-[0.97] sm:scale-100
  hover:scale-[1.03]
  transition-transform duration-200
"
          >
            <FaInstagram size={32} />

            <span className="text-lg font-bold">
              Follow us on Instagram
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1HmJWc3o1x/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4
                       bg-[#1877F2] text-white px-6 py-4 rounded-2xl
                       shadow-lg hover:scale-[1.03]
                       transition-all duration-200"
          >
            <FaFacebookF size={30} />

            <span className="text-lg font-bold">
              Like us on Facebook
            </span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@hellobitescafe?si=ug90wrCKmVSZyWNz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4
                       bg-[#E53935] text-white px-6 py-4 rounded-2xl
                       shadow-lg hover:scale-[1.03]
                       transition-all duration-200"
          >
            <FaYoutube size={32} />

            <span className="text-lg font-bold">
              Subscribe on YouTube
            </span>
          </a>

        </div>
        <div className="flex mt-2 gap-4 items-center justify-center mb-4">


  <span>
<Image
src="/facebook.png"
alt=""
width={50}
height={50}
className="object-contain"
/>
  </span>
  <div className="mt-2">
  <Image
  src="/youtube1.png"
  alt=""
  width={50}
  height={50}
  className="object-contain"
  />
</div>
  <span>
<Image
src="/instagram.png"
alt=""
width={50}
height={50}
className="object-contain"
/>
  </span>
</div>
        {/* Bottom Red Wave */}
        <div
          className="absolute bottom-0 left-0 w-full h-28 sm:mt-10
                     bg-[#E53935] rounded-t-[50%] translate-y-12"
        />

      </div>
    </main>
  );
}