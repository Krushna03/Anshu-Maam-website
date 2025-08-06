import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const handleNavigate = (value) => {
    switch (value) {
      case "youtube":
        window.open("https://www.youtube.com/@laughwithanju", "_blank");
        break;
    
      case "linkedin":
        window.open("https://www.linkedin.com/in/anju-shahani/", "_blank");
        break;
    
      case "instagram":
        window.open("https://www.instagram.com/laughwithanju/", "_blank");
        break;

      default:
        break;
    }
  }

  return (
    <footer className="bg-[#FEA0CF] text-[#1f1f1f] font-comfortaa px-4 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#d7499c] pb-10">
        {/* Left Column - Logo and Description */}
        <div className="space-y-4 flex flex-col items-center md:grid text-center md:text-left">
          <img src="/logo.png" alt="logo" className="h-28 w-48 sm:h-36" />
          <p className="text-sm font-medium">
            Professional Coach, Laughter Yoga Expert,
            <br />
            <span className="font-semibold">Human Connection Enthusiast</span>
          </p>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-extrabold">Quick Links</h3>
          <ul className="space-y-2 text-base font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Column - Social + Newsletter */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-bold">Social Media</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-[#1f1f1f]">
            <FaInstagram className="cursor-pointer" onClick={() => handleNavigate("instagram")} />
            <FaLinkedinIn className="cursor-pointer" onClick={() => handleNavigate("linkedin")} />
            <FaYoutube className="cursor-pointer" onClick={() => handleNavigate("youtube")} />
          </div>
          <p className="text-sm font-medium mt-4">Subscribe to our newsletter</p>
          <div className="relative max-w-xs mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b-2 border-[#1f1f1f] bg-transparent py-2 pr-10 focus:outline-none placeholder:text-[#1f1f1f]"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1 rounded-tr-md rounded-br-md bg-gradient-to-r from-[#ff4ec0] to-[#8e2de2] text-white">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-[#1f1f1f]">
        <p>Anju Shahani ©2025. All Rights Reserved</p>
        <p className="mt-2 sm:mt-0">Developed with Joy by Krushna Sakhare</p>
      </div>
    </footer>
  );
};

export default Footer;
