import React from 'react';
import Image from 'next/image';
import WeatherApp from "./_components/WeatherApp/page.jsx";


function SlideThree() {
  return (
    <div className="w-full min-h-screen bg-[#547E7E] flex items-center justify-center px-4 py-6">
      <div className="flex justify-center">
        <Image
          src="/projects.png"
          alt="img for page projects"
          width={500}
          height={400}
          className="object-contain w-[300px] md:w-[500px] h-auto"
        />
      </div>
        <WeatherApp/>
    </div>
  );
}

export default SlideThree;
