"use client";

import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
       
        <h1 className="text-2xl font-bold  mb-6">
          Scan Me
        </h1>

        <div className="bg-white p-5 rounded-2xl shadow-lg">
          <QRCodeSVG
            value="http://localhost:3000/welcome"
            size={250}
          />
        </div>

        <p className="mt-5 text-gray-600">
          Scan to connect with Hello Bite
        </p>

      </div>
    </main>
  );
}