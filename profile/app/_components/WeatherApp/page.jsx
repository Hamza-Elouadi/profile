"use client";

import React from "react";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function WeatherApp({ title, description, imageUrl, githubUrl, liveUrl }) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 md:flex">
      {/* الصورة */}
      <div className="w-full md:w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-64 md:h-full object-cover"
          width={600}
          height={400}
        />
      </div>

      {/* التفاصيل */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-base mb-4">{description}</p>

          {/* أيقونات اللغات */}
          <div className="flex gap-4 text-3xl text-gray-700">
            <FaHtml5 title="HTML5" className="text-orange-600" />
            <FaCss3Alt title="CSS3" className="text-blue-600" />
            <SiJavascript title="JavaScript" className="text-yellow-500" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <ExternalLink size={18} />
              Visit Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
