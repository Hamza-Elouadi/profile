import React from 'react';
import Image from 'next/image';
import WeatherApp from "../_components/WeatherApp/page.jsx";

function SlideThree() {
  return (
    <div className="w-full min-h-screen bg-[#547E7E] flex flex-col items-center justify-center px-4 py-6 gap-6">
      <div className="flex justify-center">
        <Image
          src="/projects.png"
          alt="img for page projects"
          width={500}
          height={400}
          className="object-contain w-[300px] md:w-[500px] h-auto"
        />
      </div>

      <WeatherApp
        title="Weather App"
        description="A modern weather and prayer times app that provides real-time forecasts and global prayer schedules using the OpenWeatherMap API."
        imageUrl="/Weather-App.png"
        githubUrl="https://github.com/Hamza-Elouadi/Weather-App"
        liveUrl="https://hamza-elouadi.github.io/Weather-App/"
      />
    </div>
  );
}

export default SlideThree;