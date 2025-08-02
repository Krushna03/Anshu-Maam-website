import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [ "HOME", "ABOUT", "SERVICES", "CORPORATE WELLNESS", "GALLERY", "CONTACT" ];

  return (
    <header className="bg-white flex h-20 w-full items-center justify-between px-4 md:px-6 lg:px-20 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/anju-logo-removebg.png"
            alt="SN Logo"
            className="w-[100px] sm:w-28 h-auto"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 lg:gap-10">
        {navLinks.map((label) => (
          <Link
            key={label}
            to="#"
            className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-custom-plum" /> : <Menu className="h-6 w-6 text-custom-plum" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 z-40 md:hidden border-t border-gray-200">
          {navLinks.map((label) => (
            <Link
              key={label}
              to="#"
              className="text-sm font-semibold text-custom-plum py-2 w-full border-b border-gray-100 hover:text-[#cd85ad] transition"
              onClick={() => setMobileMenuOpen(false)} // close on click
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
