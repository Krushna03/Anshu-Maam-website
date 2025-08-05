import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-center w-full flex justify-center py-4">
      <nav className="w-[90%] max-w-[1330px] bg-pink-50 border border-pink-200 rounded-full px-4 md:px-8 flex items-center justify-between shadow-sm relative">
        {/* Logo */}
        <div className="text-3xl font-logo text-black py-3">
          <img src="logo-1.png" alt="logo" className="h-11 w-11" />
        </div>

        {/* Navigation Links (visible on md and above) */}
        <ul className="hidden sm:flex items-center font-sans gap-8 md:gap-10 text-lg md:text-xl font-medium py-3">
          <NavLink to={"/"} className="text-black hover:font-bold cursor-pointer">
            Home
          </NavLink>
          <NavLink to={"/about-us"} className="text-black hover:font-bold cursor-pointer">
            About Us
          </NavLink>
          <NavLink to={"/services"} className="text-black hover:font-bold cursor-pointer">
            Services
          </NavLink>
        </ul>

        {/* Contact Us Button (flush right, full height) */}
        <div className="hidden sm:block -mx-3 md:-mx-8">
          <Link
            to="#"
            className="bg-[#ff007f] hover:bg-[#e60073] text-white text-base md:text-lg font-normal px-6 md:px-8 py-[0.75rem] md:py-[18px] rounded-full border-[3px] border-white shadow-sm transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon (only on small screens) */}
        <div className="sm:hidden absolute right-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-lg p-6 z-10 md:hidden">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li className="text-black hover:font-bold cursor-pointer">Home</li>
              <li className="text-black hover:font-bold cursor-pointer">About Us</li>
              <li className="text-black hover:font-bold cursor-pointer">Services</li>
            </ul>
            <div className="mt-4">
              <Link
                to="#"
                className="block bg-[#ff007f] hover:bg-[#e60073] text-white text-lg font-normal text-center px-6 py-3 rounded-full shadow-md transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
