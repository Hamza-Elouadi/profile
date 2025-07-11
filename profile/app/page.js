"use client";
import { useState } from "react";
import SlideOne from "./SlideOne/page.jsx";
import SlideTwo from "./SlideTwo/page.jsx";
import SlideThree from "./SlideThree/page.jsx";

const slides = [
  { id: 1, component: <SlideOne /> },
  { id: 2, component: <SlideTwo /> },
  { id: 3, component: <SlideThree /> },
];

export default function MagicSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div className="relative w-full min-h-screen bg-[#547E7E] text-white flex flex-col items-center justify-center px-4 py-8">
      
      {/* عرض الشريحة الحالية فقط */}
      <div className="w-full max-w-4xl flex items-center justify-center">
        {slides[current].component}
      </div>

      {/* أزرار التنقل */}
      <div className="flex justify-between items-center w-full max-w-sm mt-6">
        <button onClick={prevSlide} className="bg-gray-800 p-3 rounded-full">
          ❮
        </button>
        <button onClick={nextSlide} className="bg-gray-800 p-3 rounded-full">
          ❯
        </button>
      </div>

      {/* نقاط التحكم */}
      <div className="mt-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-500"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
