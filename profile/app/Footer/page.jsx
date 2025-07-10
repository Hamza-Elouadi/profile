"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#547E7E] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        {/* Left side - text */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Hamza Elouadi. All rights reserved.
        </p>

        {/* Right side - social icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/212770493196"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://x.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-500 transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
