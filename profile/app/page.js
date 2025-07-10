"use client";
import { useState } from "react";
import SlideOne from "./SlideOne/page.jsx";
import SlideTwo from "./SlideTwo/page.jsx";
import SlideThree from "./SlideThree/page.jsx";

// تعريف الشرائح مع المكونات المستوردة
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
    <div className="relative w-full h-screen bg-[#547E7E] text-white flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-700 ${
              index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            {slide.component}
          </div>
        ))}
      </div>

      {/* أزرار التنقل */}
      <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full">
        ❯
      </button>

      {/* النقاط (Dots) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
