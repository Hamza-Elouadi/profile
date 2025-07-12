"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function WeatherApp({ title, description, imageUrl, githubUrl, liveUrl }) {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover"
        width={400}
        height={224}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-gray-900 text-white px-3 py-1.5 rounded hover:bg-gray-800"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
            >
              <ExternalLink size={16} />
              visit the site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
