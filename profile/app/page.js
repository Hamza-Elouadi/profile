"use client";
import { useState, useRef } from "react";
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

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleSwipe = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        nextSlide();
      } else if (distance < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div className="relative w-full min-h-screen bg-[#547E7E] text-white flex flex-col items-center justify-center px-4 py-8">
      <div
        className="w-full max-w-4xl flex items-center justify-center"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
        onTouchEnd={handleSwipe}
        onMouseDown={(e) => (touchStartX.current = e.clientX)}
        onMouseUp={(e) => {
          touchEndX.current = e.clientX;
          handleSwipe();
        }}
      >
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
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
