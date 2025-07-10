"use client";
import React from 'react';
import Image from 'next/image';

function SlideTwo() {
  return (
    <div className="w-full min-h-screen bg-[#547E7E] flex items-center justify-center px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl">
        {/* الصورة */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <Image
            src="/img-language.png"
            alt="img language"
            width={400}
            height={400}
            className="object-contain w-60 h-auto md:w-[400px]"
          />
        </div>

        {/* النص */}
        <h1 className="text-white text-center md:text-left text-base md:text-lg leading-relaxed max-w-md">
          "I use the latest technologies and programming languages to create seamless and efficient digital experiences, including HTML, CSS, JavaScript, Next.js, Tailwind CSS, Node.js, Express.js, Git and GitHub to ensure performance and quality."
        </h1>
      </div>
    </div>
  );
}

export default SlideTwo;
