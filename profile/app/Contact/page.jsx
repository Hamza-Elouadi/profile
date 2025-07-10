"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ استوردنا أيقونة WhatsApp

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl shadow-xl p-8 md:p-16">
        
        {/* Left side - contact info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-300">
            Effective communication provides essential support in achieving goals.
            We’re here to answer your questions, so don’t hesitate to reach out.
            We strive to offer you the best possible experience, 
            whether you’re looking for collaboration or simply want to say hello.
          </p>

          <div className="text-gray-300 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <p>CasaBlanca</p>
                <p>Sidi maarouf</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              <p>+212 770493196</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5" />
              <p>hamzaelouadi2004@gmail.com</p>
            </div>
          </div>
          <button className="flex items-center gap-4 hover:bg-green-500 rounded-sm">
            <FaWhatsapp className="w-5 h-5 text-green-500" />
            <a
              href="https://wa.me/212770493196"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
            +212 770493196
            </a>
          </button>
        </div>

        {/* Right side - form */}
        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
        
            const form = e.target;
            const data = {
              firstName: form[0].value,
              lastName: form[1].value,
              email: form[2].value,
              message: form[3].value,
            };
        
            const res = await fetch('/api/contact', {
              method: 'POST',
              body: JSON.stringify(data),
            });
        
            const result = await res.json();
            if (result.success) {
              alert("Message sent successfully!");
              form.reset();
            } else {
              alert("Something went wrong!");
            }
          }}
        >          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">First name</label>
              <input
                type="text"
                className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Last name</label>
              <input
                type="text"
                className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="5"
              className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
