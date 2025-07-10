"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // أيقونات القائمة

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#547E7E] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* اسم الموقع */}
        <div>
          <h1 className="text-[32px] font-black">HAMZA</h1>
          <h2 className="ml-8 text-[32px] font-thin">EL OUADI</h2>
        </div>

        {/* القائمة في الشاشات الكبيرة */}
        <nav className="hidden md:flex gap-10 text-lg">
          <a href="/SlideOne">About me</a>
          <a href="/SlideTwo">Skills</a>
          <a href="/SlideThree">Projects</a>
          <a href="/Contact">Contact</a>
        </nav>

        {/* زر القائمة على الهاتف */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* القائمة المنسدلة على الهاتف */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden flex flex-col items-center gap-4 mt-4 bg-[#365B5B] p-4 rounded-lg"
        >
          <a href="/SlideOne" className="block">About me</a>
          <a href="/SlideTwo" className="block">Skills</a>
          <a href="/SlideThree" className="block">Projects</a>
          <a href="/Contact" className="block">Contact</a>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
