"use client";
import React from 'react';
import Image from 'next/image';

function SlideOne() {
  return (
    <div className="px-4 py-6 bg-[#547E7E]">
      {/* Section 1: Image + Title */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6  p-6 rounded-lg">
        <Image
          src="/my-img.jpg"
          alt="my img"
          width={300}
          height={300}
          className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px] object-cover"
        />
        <h1 className="text-white text-center md:text-left text-lg md:text-xl max-w-md">
          Fullstack developer specializing in building scalable and innovative web applications using the latest technologies.
        </h1>
      </div>

      {/* Section 2: Description */}
      <div className="mt-8 rounded-lg bg-[#ffffff42] backdrop-blur-md p-6">
        <p className="text-black text-sm md:text-base leading-relaxed">
          Hello, I’m Hamza El Ouadi, a passionate and creative Full-Stack developer based in Casablanca, Morocco. I have extensive experience in web development with a deep interest in both design and user experience. I specialize in building comprehensive web applications, from the front end to the back end, focusing on delivering seamless user experiences and high performance.
          <br /><br />
          Throughout my career, I’ve had the opportunity to work on a variety of exciting projects, ranging from developing responsive e-commerce websites to creating interactive web applications with full system integration. These experiences have allowed me to refine my skills and stay updated with the latest trends and technologies in Full-Stack Development.
          <br /><br />
          When I’m not busy coding, I’m immersed in my university studies at the Faculty of Sciences in Ain Chock, Casablanca, where I specialize in Mathematical Physics. I envision becoming a mechanical and energy engineer and a skilled software developer. I’m always excited to take on new challenges and bring innovative ideas to life.
          <br /><br />
          Feel free to explore my portfolio to see examples of my work, and if you have any questions or would like to collaborate, don’t hesitate to get in touch.
        </p>
      </div>
    </div>
  );
}

export default SlideOne;
