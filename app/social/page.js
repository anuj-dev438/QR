"use client";
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { use } from 'react';
export default function Social() {
  const [showPopup,setshowPopup]=useState(false);
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
            → Connect with us ←
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
  width={80}
  height={80}
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


 <button 
 onClick={()=> setshowPopup(true)}
 className=" sm:mb-14 mb-10 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-cyan-500/20 active:scale-95 group">
  <span className='text-white'>Rating & Review</span>
  <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 text-white" />
</button>

{
  showPopup && (
    <div className='fixed indet-0 z-50 flex items-center justify-center shadow-xl px-4'>
      <div className='relative w-full max-w-md rounded-2xl bg-[#FFC107] p-6'>
<button 
onClick={()=> setshowPopup(false)}
className='absolute right-4 top-4 text-gray-500'
>
  x
</button>
<h2 className='text-xl font-bold text-gray-900'>
  Ratting & Review
</h2>
<p className='text-gray-700 mt-2'>
  Do you want to open the Review & Rating page
</p>
<Link href="/social/Review&Rating"
onClick={()=> setshowPopup(false)}
className='mt-6 block rounded-xl bg-red-600 px-5 py-3 text-center font-medium text-white'

>
  Open Review & Rating
</Link>
      </div>
    </div>
  )
}
        {/* Bottom Red Wave */}
        <div
          className="absolute bottom-0 left-0 w-full h-28 sm:mt-10
                     bg-[#E53935] rounded-t-[50%] translate-y-12"
        />

      </div>
    </main>
  );
}