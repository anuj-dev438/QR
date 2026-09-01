"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-[#FFC107] flex justify-center mt-10 sm:mt-2">

      <div className="relative w-full max-w-md min-h-screen overflow-hidden flex flex-col items-center px-6 py-10">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-5 text-6xl rotate-12">🍔</div>
          <div className="absolute top-60 right-5 text-5xl -rotate-12">🍕</div>
          <div className="absolute bottom-60 left-10 text-5xl">🍟</div>
          <div className="absolute bottom-80 right-10 text-5xl">🌮</div>
        </div>

        {/* Logo */}
        <div className="relative z-10 mt-8">
          <Image
            src="/logo2.png"
            alt="Hello Bite Logo"
            width={190}
            height={190}
            className="object-contain"
          />
        </div>

        {/* Welcome */}
        <div className="relative z-10 text-center mt-2">

          <p className="text-xl font-semibold italic text-[#3b1f00]">
            → Welcome to
          </p>

          <h1 className="text-5xl sm:text-6xl font-black italic text-[#E53935] mt-3">
            Hello Bite
          </h1>

          <p className="text-xl font-bold italic text-[#3b1f00] mt-4">
            Welcomes You All!
          </p>

          <div className="flex justify-center mt-2 text-[#E53935]">
            <ArrowRight />
          </div>

        </div>

        {/* Button */}
        <a
          href="/social"
          className="relative z-10 mt-4 bg-[#E53935] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#c62828] hover:scale-105 transition-all duration-200"
        >
          Click me
        </a>

       <div className="mt-4">
         <i className="text-[#E53935] text-center mb-2 text-xl font-semibold">To connect us</i>
        <Image
        src="/logo.png"
        alt=""
        width={150}
        height={150}
      className="object-contain mt-2"
        />
       </div>

        {/* Bottom Red Wave */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-[#E53935] rounded-t-[50%] translate-y-12 mt-4" />

      </div>

    </main>
  );
}